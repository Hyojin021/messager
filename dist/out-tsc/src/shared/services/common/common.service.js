import * as tslib_1 from "tslib";
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, Injector } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { Camera } from '@ionic-native/camera/ngx';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { of } from 'rxjs';
import { map } from 'rxjs/internal/operators';
import { AuthService } from 'src/pages/auth/services/auth/auth.service';
import { Extender } from 'src/shared/helpers/extender';
import { SocialShareComponent } from 'src/shared/modals/social-share/social-share.component';
import { FirestoreService } from '../firestore/firestore.service';
let CommonService = class CommonService extends Extender {
    constructor(injector, http, authService, firestoreService, camera, callNumber, imagePicker, socialSharing) {
        super(injector);
        this.injector = injector;
        this.http = http;
        this.authService = authService;
        this.firestoreService = firestoreService;
        this.camera = camera;
        this.callNumber = callNumber;
        this.imagePicker = imagePicker;
        this.socialSharing = socialSharing;
        this.cameraOptions = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.countries = [];
    }
    /** get list of countries from free api */
    getCountries() {
        if (this.countries.length === 0) {
            return this.http.get('https://restcountries.eu/rest/v2/all').pipe(map((res) => {
                this.countries = res;
                return res;
            }));
        }
        else {
            return of(this.countries);
        }
    }
    /** search country by name */
    searchCountry(search) {
        return this.http.get('https://restcountries.eu/rest/v2/name/' + search).pipe(map((res) => {
            return res;
        }));
    }
    /** call user method checks if the device supports native and uses native call number function.
     * otherwise pass reference to <a href="tel:" and access click event to make a browser call
     */
    callUser(mobile, el) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (mobile) {
                if (window.cordova) {
                    yield this.callNumber.isCallSupported();
                    return yield this.callNumber.callNumber(mobile, false);
                }
                else {
                    el.nativeElement.click();
                }
            }
            else {
                this.toast('User does not have a phone number');
            }
        });
    }
    /** checks if the device supports native and uses native share function
     * otherwise using open social share component
     */
    share(message, subject, file, url) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (window.cordova) {
                return yield this.socialSharing
                    .share(message, subject, file, url)
                    .then(() => this.toast(this.translate.instant('feed-component.share-confirm')));
            }
            else {
                const modal = yield this.openModal(SocialShareComponent, url, 'custom-modal');
                modal.present();
            }
        });
    }
    /** specify which native library to use to get images.
     * if multiple images, use imagePicker library, if camera, use camera library
     */
    getPictures(type, multiple = false) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (!multiple) {
                return this.getPicturesNative(type);
            }
            else {
                return yield this.getPicturesFromLibrary();
            }
        });
    }
    /** get files from browser file input and convert to images and resolve all */
    getImagesFromFiles(event) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            let reads = [];
            const images = Array.prototype.slice.call(event.target.files);
            if (images && images.length > 0) {
                reads = images.map((element) => {
                    return new Promise((resolve, reject) => {
                        const reader = new FileReader();
                        reader.onloadend = (e) => {
                            resolve(e.target.result);
                        };
                        return reader.readAsDataURL(element);
                    });
                });
                const _images = yield Promise.all(reads);
                return _images;
            }
        });
    }
    /** get single image from camera or library and append base64 string text and resolve */
    getPicturesNative(type) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.cameraOptions.sourceType = type;
            this.cameraOptions.quality = 20;
            return yield new Promise((resolve, reject) => {
                this.camera
                    .getPicture(this.cameraOptions)
                    .then((results) => {
                    resolve('data:image/jpeg;base64,' + results);
                })
                    .catch((err) => reject(err));
            });
        });
    }
    /** get images from library and append base64 string text and resolve */
    getPicturesFromLibrary() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const options = {
                outputType: 1,
                quality: 20,
                maximumImagesCount: 5
            };
            return yield new Promise((resolve, reject) => {
                this.imagePicker
                    .getPictures(options)
                    .then((results) => {
                    resolve(results.map((item) => 'data:image/jpeg;base64,' + item));
                })
                    .catch((err) => {
                    reject(err);
                    this.toast('fail' + err);
                });
            });
        });
    }
};
CommonService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__param(1, Inject(HttpClient)),
    tslib_1.__metadata("design:paramtypes", [Injector,
        HttpClient,
        AuthService,
        FirestoreService,
        Camera,
        CallNumber,
        ImagePicker,
        SocialSharing])
], CommonService);
export { CommonService };
//# sourceMappingURL=common.service.js.map