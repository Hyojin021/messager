import * as tslib_1 from "tslib";
import { Injectable, Injector } from '@angular/core';
import * as firebase from 'firebase/app';
import { combineLatest, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { AuthService } from 'src/pages/auth/services/auth/auth.service';
import { Extender } from 'src/shared/helpers/extender';
import { FirestoreService } from 'src/shared/services/firestore/firestore.service';
/**
 * crud methods to interact with firebase cloud store regarding messaging
 */
let MessagesService = class MessagesService extends Extender {
    constructor(injector, authService, firestoreService) {
        super(injector);
        this.injector = injector;
        this.authService = authService;
        this.firestoreService = firestoreService;
    }
    /** get messages that contain the users uid in participantsId property, check if message is flagged as archived
     * for each message get messages recipient and get their details from users collection. return data
     */
    getMessages(uid, archieved = false) {
        return this.firestoreService
            .colWithIds$('messages', (ref) => ref.where('participantsId', 'array-contains', uid).where('isArchieved', '==', archieved))
            .pipe(switchMap((data) => {
            const reads$ = [];
            if (data.length > 0) {
                data.forEach((msg) => {
                    reads$.push(this.getMessage(msg.id));
                });
                return combineLatest(reads$);
            }
            else {
                return of([]);
            }
        }), map((data) => {
            return data;
        }));
    }
    /** get message and their participants information */
    getMessage(id) {
        let data;
        const reads$ = [];
        return this.firestoreService.doc$(`messages/${id}`).pipe(switchMap((msg) => {
            data = msg;
            msg.participantsId.forEach((i) => {
                reads$.push(this.firestoreService.doc$(`users/${i}`));
            });
            return combineLatest(reads$);
        }), map((joins) => {
            return Object.assign({}, data, { participants: joins });
        }));
    }
    /** update message */
    updateMessage(message) {
        return this.firestoreService.update(`messages/${message.id}`, message);
    }
    /** delete message */
    deleteMessage(message) {
        return this.firestoreService.delete(`messages/${message.id}`);
    }
    /** delete collection of messages */
    deleteAllMessages(batch) {
        return this.firestoreService.deleteCollection(`messages`, batch);
    }
    /** start chat with a user by first checking if a message already exists with the users id,
     * if no message exists, create one,
     * if message exists, navigate to chat modal
     */
    startChat(user) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            let myaccount = yield this.authService.getUser();
            this.firestoreService
                .colWithIds$('messages', (ref) => ref.where('participantsId', 'array-contains', user.uid))
                .pipe(map((data) => {
                let temp = [];
                data.forEach((element) => {
                    element.participantsId.forEach((part) => {
                        if (part == myaccount.uid) {
                            temp.push(element);
                        }
                    });
                });
                return temp;
            }))
                .subscribe((data) => {
                const message = data[0];
                if (!!message) {
                    this.goto(`${this.routes.messages}/${message.id}`);
                }
                else {
                    this.createMessage(user);
                }
            });
        });
    }
    /** delete a message in chat */
    deleteChat(message, data) {
        return this.firestoreService.update(`messages/${message.id}`, {
            messages: firebase.firestore.FieldValue.arrayRemove(data)
        });
    }
    /** send a message */
    send(message, data) {
        delete message.participants;
        return this.firestoreService.update(`messages/${message.id}`, Object.assign({}, message, { messages: firebase.firestore.FieldValue.arrayUnion(data) }));
    }
    /** create a message with participants and default messages property to empty array */
    createMessage(user) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const { uid } = yield this.authService.getUser();
            this.firestoreService.add('messages', {
                participantsId: [user.uid, uid],
                messages: [],
                isArchieved: false
            });
        });
    }
};
MessagesService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [Injector, AuthService, FirestoreService])
], MessagesService);
export { MessagesService };
//# sourceMappingURL=messages.service.js.map