import * as tslib_1 from "tslib";
import { Component, ElementRef, Injector, ViewChild } from '@angular/core';
import { AuthService } from 'src/pages/auth/services/auth/auth.service';
import { Extender } from 'src/shared/helpers/extender';
import { CommonService } from 'src/shared/services/common/common.service';
import { FirestoreService } from 'src/shared/services/firestore/firestore.service';
import { isArray } from 'util';
let EditProfileComponent = class EditProfileComponent extends Extender {
    constructor(injector, authService, commonService, firestoreService) {
        super(injector);
        this.injector = injector;
        this.authService = authService;
        this.commonService = commonService;
        this.firestoreService = firestoreService;
        this.countrySelectOptions = {
            header: this.translate.instant('edit-profile-component.select-country'),
            data: this.commonService.getCountries()
        };
        this.failPromise = (err) => {
            this.loading = false;
            this.toast(err);
        };
    }
    /** get current user */
    ngOnInit() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.currentUser = yield this.authService.getUser();
        });
    }
    /**
     * open actionsheet with options to select image from camera or library
     * once image is selected, save image to firebase cloud storage
     */
    changePhoto() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetCtrl.create({
                header: this.translate.instant('edit-profile-component.change-profile-image'),
                buttons: [
                    {
                        text: this.translate.instant('other.camera'),
                        handler: () => {
                            this.getPicture(1);
                        }
                    },
                    {
                        text: this.translate.instant('other.library'),
                        handler: () => {
                            this.getPicture(0);
                        }
                    },
                    {
                        text: this.translate.instant('other.close'),
                        role: 'cancel'
                    }
                ]
            });
            yield actionSheet.present();
        });
    }
    /** detect file from browser file input changes and upload image */
    detectFiles(event) {
        let image;
        this.commonService.getImagesFromFiles(event).then((images) => {
            if (isArray(images)) {
                image = images[0];
            }
            this.uploadImage(image);
        });
    }
    /**
     * update currentUser and close modal, show toast if any error occurs
     */
    save(close = true) {
        this.loading = true;
        this.firestoreService
            .upsert(`users/${this.currentUser.uid}`, this.currentUser)
            .then(() => {
            this.loading = false;
            if (close) {
                this.closeModal(this.currentUser);
            }
        })
            .catch((err) => this.failPromise(err));
    }
    /**
     * get image using native camera plugin to retrieve from either camera or library of device
     * param type is a number that specifies whether to get from camera or from library
     * one image retrieved, upload to firebase storage. if error, display a toast with error message
     * @param type
     */
    getPicture(type) {
        this.loading = true;
        if (window.cordova) {
            // if on device use native plugins
            this.commonService
                .getPictures(type)
                .then((imageData) => {
                this.uploadImage(imageData);
            })
                .catch((err) => this.failPromise(err));
        }
        else {
            // if on device use browser file upload
            this.fileInputButton.nativeElement.click();
        }
    }
    /**
     * append base 64 string to image data, upload image data to firebase storage.
     * the upload function returns a download data which is then saved to currentUser.photoUrl property
     */
    uploadImage(imageData) {
        this.currentUser.photoURL = imageData;
        this.firestoreService
            .uploadImage(this.currentUser.photoURL, this.currentUser.uid, 'profile-images')
            .then((photoURL) => {
            this.currentUser.photoURL = photoURL;
            this.save(false);
            this.loading = false;
        })
            .catch((err) => this.failPromise(err));
    }
};
tslib_1.__decorate([
    ViewChild('fileInputButton', null),
    tslib_1.__metadata("design:type", ElementRef)
], EditProfileComponent.prototype, "fileInputButton", void 0);
EditProfileComponent = tslib_1.__decorate([
    Component({
        selector: 'app-edit-profile',
        templateUrl: './edit-profile.component.html',
        styleUrls: ['./edit-profile.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [Injector,
        AuthService,
        CommonService,
        FirestoreService])
], EditProfileComponent);
export { EditProfileComponent };
//# sourceMappingURL=edit-profile.component.js.map