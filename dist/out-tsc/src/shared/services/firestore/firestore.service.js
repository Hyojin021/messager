import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import * as firebase from 'firebase/app';
import { from } from 'rxjs';
import { expand, map, mergeMap, take, takeWhile, tap } from 'rxjs/operators';
let FirestoreService = class FirestoreService {
    constructor(afs, afStorage) {
        this.afs = afs;
        this.afStorage = afStorage;
    }
    /// **************
    /// Write Data
    /// **************
    /// Firebase Server Timestamp
    get timestamp() {
        return firebase.firestore.FieldValue.serverTimestamp();
    }
    /// **************
    /// Get a Reference
    /// **************
    createId() {
        return this.afs.createId();
    }
    col({ ref, queryFn }) {
        return typeof ref === 'string' ? this.afs.collection(ref, queryFn) : ref;
    }
    doc(ref) {
        return typeof ref === 'string' ? this.afs.doc(ref) : ref;
    }
    /// **************
    /// Get Data
    /// **************
    doc$(ref) {
        return this.doc(ref)
            .snapshotChanges()
            .pipe(map((doc) => {
            return Object.assign({ id: doc.payload.id }, doc.payload.data());
        }));
    }
    col$(ref, queryFn) {
        return this.col({ ref, queryFn })
            .snapshotChanges()
            .pipe(map((docs) => {
            return docs.map((a) => a.payload.doc.data());
        }));
    }
    /// with Ids
    colWithIds$(ref, queryFn) {
        return this.col({ ref, queryFn })
            .snapshotChanges()
            .pipe(map((actions) => {
            return actions.map((a) => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                return Object.assign({ id }, data);
            });
        }));
    }
    /** set document update created and updated timestamp, use merge true to merge data if its an update */
    set(ref, data) {
        const timestamp = this.timestamp;
        return this.doc(ref).set(Object.assign({}, data, { updatedAt: timestamp, createdAt: timestamp }), { merge: true });
    }
    /** update data and timestamp */
    update(ref, data) {
        return this.doc(ref).update(Object.assign({}, data, { updatedAt: this.timestamp }));
    }
    delete(ref) {
        return this.doc(ref).delete();
    }
    add(ref, data) {
        const timestamp = this.timestamp;
        return this.col({ ref }).add(Object.assign({}, data, { updatedAt: timestamp, createdAt: timestamp }));
    }
    geopoint(lat, lng) {
        return new firebase.firestore.GeoPoint(lat, lng);
    }
    /// If doc exists update, otherwise set
    upsert(ref, data) {
        const doc = this.doc(ref)
            .snapshotChanges()
            .pipe(take(1))
            .toPromise();
        return doc.then((snap) => {
            return snap.payload.exists ? this.update(ref, data) : this.set(ref, data);
        });
    }
    /// *************
    /// Upload Data to Firestore
    /// *************
    /** configure storage name for image upload,
     * if image is a URI, encode to data_url and upload using putString function in firebase storage reference
     * if image isn't a URI just call putString without encoding
     */
    uploadImage(imageURI, filename, store, isURI = false) {
        return new Promise((resolve, reject) => {
            const name = `${store}/${filename}`;
            const storageRef = this.afStorage.storage.ref();
            const imageRef = storageRef.child(name);
            if (isURI) {
                this.encodeImageUri(imageURI, (image64) => {
                    this.uploadWithPutString(imageRef, image64, name, resolve, reject);
                });
            }
            else {
                this.uploadWithPutString(imageRef, imageURI, name, resolve, reject);
            }
        });
    }
    /** upload a file to firebase and save file metadata in files document */
    uploadFile(upload, store) {
        const storageRef = this.afStorage.storage.ref();
        const uploadTask = storageRef.child(`${store}/${upload.file.name}`).put(upload.file);
        return uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, (snapshot) => {
            // upload in progress
            upload.progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        }, (error) => {
            // upload failed
            console.log(error);
        }, () => {
            // upload success
            upload.url = uploadTask.snapshot.downloadURL;
            upload.name = upload.file.name;
            this.saveFileData(upload);
        });
    }
    /** get token from download url, use token as id to file file in files collection,
     * delete file and use name from file doc to delete from storage
     */
    deleteUpload(url) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const token = this.getDownloadToken(url);
            if (token) {
                return this.doc$(`files/${token}`).subscribe((file) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                    yield this.deleteFileData(token);
                    return yield this.deleteFileStorage(file.name);
                }));
            }
        });
    }
    /** encode uri to data url */
    encodeImageUri(imageUri, callback) {
        const c = document.createElement('canvas');
        const ctx = c.getContext('2d');
        const img = new Image();
        img.onload = function () {
            const aux = this;
            c.width = aux.width;
            c.height = aux.height;
            ctx.drawImage(img, 0, 0);
            const dataURL = c.toDataURL('image/jpeg');
            callback(dataURL);
        };
        img.src = imageUri;
    }
    /// **************
    /// Inspect Data
    /// **************
    inspectDoc(ref) {
        const tick = new Date().getTime();
        this.doc(ref)
            .snapshotChanges()
            .pipe(take(1), tap((d) => {
            const tock = new Date().getTime() - tick;
            console.log(`Loaded Document in ${tock}ms`, d);
        }))
            .subscribe();
    }
    inspectCol(ref) {
        const tick = new Date().getTime();
        this.col({ ref })
            .snapshotChanges()
            .pipe(take(1), tap((c) => {
            const tock = new Date().getTime() - tick;
            console.log(`Loaded Collection in ${tock}ms`, c);
        }))
            .subscribe();
    }
    /// **************
    /// Create and read doc references
    /// **************
    /// create a reference between two documents
    connect(host, key, doc) {
        return this.doc(host).update({ [key]: this.doc(doc).ref });
    }
    /// returns a documents references mapped to AngularFirestoreDocument
    docWithRefs$(ref) {
        return this.doc$(ref).pipe(map((doc) => {
            for (const k of Object.keys(doc)) {
                if (doc[k] instanceof firebase.firestore.DocumentReference) {
                    doc[k] = this.doc(doc[k].path);
                }
            }
            return doc;
        }));
    }
    /**
     * Delete a collection, in batches of batchSize. Note that this does
     * not recursively delete sub-collections of documents in the collection
     * from: https://github.com/AngularFirebase/80-delete-firestore-collections/blob/master/src/app/firestore.service.ts
     */
    deleteCollection(path, batchSize) {
        const source = this.deleteBatch(path, batchSize);
        // expand will call deleteBatch recursively until the collection is deleted
        return source.pipe(expand((val) => this.deleteBatch(path, batchSize)), takeWhile((val) => val > 0));
    }
    /** upload image base64 string to firebase storage using putString method */
    uploadWithPutString(imageRef, imageURI, name, resolve, reject) {
        imageRef.putString(imageURI, 'data_url').then((url) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.saveFileData({ name, url: yield imageRef.getDownloadURL() });
            resolve(imageRef.getDownloadURL());
        }), (err) => {
            reject(err);
        });
    }
    /** get token from url query param */
    getDownloadToken(url) {
        const urlParams = new URLSearchParams(url);
        return urlParams.get('token');
    }
    // add files details from the realtime db
    saveFileData({ name, url }) {
        const token = this.getDownloadToken(url);
        return this.set(`files/${token}`, { name, url });
    }
    // Deletes the file details from the realtime db
    deleteFileData(key) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.delete(`files/${key}`);
        });
    }
    // Firebase files must have unique names in their respective storage dir
    // So the name serves as a unique key
    deleteFileStorage(name) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.afStorage.storage
                .ref()
                .child(`${name}`)
                .delete();
        });
    }
    // Detects documents as batched transaction
    deleteBatch(path, batchSize) {
        const colRef = this.afs.collection(path, (ref) => ref.orderBy('__name__').limit(batchSize));
        return colRef.snapshotChanges().pipe(take(1), mergeMap((snapshot) => {
            // Delete documents in a batch
            const batch = this.afs.firestore.batch();
            snapshot.forEach((doc) => {
                batch.delete(doc.payload.doc.ref);
            });
            return from(batch.commit()).pipe(map(() => snapshot.length));
        }));
    }
};
FirestoreService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [AngularFirestore, AngularFireStorage])
], FirestoreService);
export { FirestoreService };
//# sourceMappingURL=firestore.service.js.map