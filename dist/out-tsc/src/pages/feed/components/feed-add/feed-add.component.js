import * as tslib_1 from "tslib";
import { Component, ElementRef, Injector, ViewChild } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { AuthService } from 'src/pages/auth/services/auth/auth.service';
import { Extender } from 'src/shared/helpers/extender';
import { ImagePreviewComponent } from 'src/shared/modals/image-preview/image-preview.component';
import { CommonService } from 'src/shared/services/common/common.service';
import { FirestoreService } from 'src/shared/services/firestore/firestore.service';
import { isArray } from 'util';
import { FeedService } from '../../services/feed/feed.service';
/**
 * allows the user to edit or add new post, browse, select and store images to firebase storage
 */
let FeedAddComponent = class FeedAddComponent extends Extender {
    constructor(injector, navParams, authService, commonService, feedService, firestoreService) {
        super(injector);
        this.injector = injector;
        this.navParams = navParams;
        this.authService = authService;
        this.commonService = commonService;
        this.feedService = feedService;
        this.firestoreService = firestoreService;
        this.images = [];
        this.tempImages = [];
        this.feedOptions = [
            {
                icon: 'camera',
                click: () => {
                    this.openImageOptions();
                }
            },
            {
                icon: 'check-square',
                click: () => {
                    this.more = !this.more;
                }
            }
        ];
        this.failPromise = (err) => {
            this.loading = false;
            this.toast(err);
        };
    }
    /** get current user, get id from navParam, if id present get data for feed, if no id set default data */
    ngOnInit() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.currentUser = yield this.authService.getUser();
            const id = this.navParams.get('data');
            if (!id) {
                this.feed = {
                    id: this.firestoreService.createId(),
                    content: '',
                    images: [],
                    subtitle: '',
                    title: '',
                    uid: this.currentUser.uid
                };
            }
            else {
                this.subscriptions.push(this.feedService.getPost(id, this.currentUser.uid).subscribe((feed) => {
                    this.feed = feed;
                    this.images = this.feed.images;
                }));
            }
        });
    }
    /** open options for image upload */
    openImageOptions() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const actionSheetCtrl = yield this.actionSheetCtrl.create({
                header: this.translate.instant('feed-add-component.image-option-header'),
                buttons: [
                    {
                        text: this.translate.instant('feed-add-component.image-option-library'),
                        handler: () => {
                            this.getPictures(0, true);
                        }
                    },
                    {
                        text: this.translate.instant('feed-add-component.image-option-camera'),
                        handler: () => {
                            this.getPictures(1);
                        }
                    },
                    {
                        text: this.translate.instant('other.close'),
                        role: 'cancel'
                    }
                ]
            });
            yield actionSheetCtrl.present();
        });
    }
    /** open options on image selection, present actionsheet to delete or open image */
    doMoreOnImage(image, index) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const actionSheetCtrl = yield this.actionSheetCtrl.create({
                header: this.translate.instant('other.options'),
                buttons: [
                    {
                        text: this.translate.instant('other.open-label'),
                        handler: () => {
                            this.openImage(image);
                        }
                    },
                    {
                        text: this.translate.instant('other.delete-label'),
                        handler: () => {
                            this.removeImage(index);
                        }
                    },
                    {
                        text: this.translate.instant('other.close'),
                        role: 'cancel'
                    }
                ]
            });
            yield actionSheetCtrl.present();
        });
    }
    /** used for browser image uploads, hooked up to input file type on change event */
    detectFiles(event) {
        this.commonService.getImagesFromFiles(event).then((images) => {
            this.checkAndSaveImages(images);
        });
    }
    /** remove uploaded images */
    removeImage(index) {
        this.firestoreService.deleteUpload(this.images[index]);
        this.images.splice(index, 1);
    }
    /** preview image in modal */
    openImage(image) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const modal = yield this.openModal(ImagePreviewComponent, image, 'custom-modal');
            modal.present();
        });
    }
    /** save feed and feed images */
    save() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.loading = true;
            if (!this.feed.images || (!this.feed.images && !isArray(this.feed.images))) {
                this.feed.images = [];
            }
            this.uploadImage(this.tempImages).then((images) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                this.feed.images = this.feed.images.concat(images);
                yield this.feedService.upsertPost(this.feed).then((_data) => {
                    this.loading = false;
                    this.closeModal();
                }, (error) => this.toast(error));
            }));
        });
    }
    /**
     * get image using native camera plugin to retrieve from either camera or library of device
     * param type is a number that specifies whether to get from camera or from library
     * one image retrieved, upload to firebase storage. if error, display a toast with error message
     */
    getPictures(type, multiple = false) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            let imageData = [];
            this.loading = true;
            if (window.cordova) {
                // if on device use native plugins
                imageData = yield this.commonService.getPictures(type, multiple);
                yield this.checkAndSaveImages(imageData);
            }
            else {
                // if on device use browser file upload
                this.fileInputButton.nativeElement.click();
            }
        });
    }
    /** remove images from input file for browser only
     * store images or send a toast id no image found
     */
    checkAndSaveImages(imageData) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.loading = false;
            this.fileInputButton.nativeElement.value = null;
            if (imageData.length > 0) {
                this.tempImages = imageData;
                this.images = this.images.concat(this.tempImages);
            }
            else {
                this.toast(this.translate.instant('message.component.no-images-selected'));
            }
        });
    }
    /**
     * append base 64 string to image data, upload image data to firebase storage.
     * the upload function returns a download data which is then saved to images
     */
    uploadImage(imageData) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.images = imageData;
            const read$ = [];
            this.images.forEach((i) => {
                read$.push(this.firestoreService.uploadImage(i, `${Date.now()}-${this.currentUser.uid}`, `feed-images-${this.feed.id}`));
            });
            try {
                const res = yield Promise.all(read$);
                this.loading = false;
                return res;
            }
            catch (err) {
                return this.failPromise(err);
            }
        });
    }
};
tslib_1.__decorate([
    ViewChild('fileInputButton', null),
    tslib_1.__metadata("design:type", ElementRef)
], FeedAddComponent.prototype, "fileInputButton", void 0);
FeedAddComponent = tslib_1.__decorate([
    Component({
        selector: 'app-feed-add',
        templateUrl: './feed-add.component.html',
        styleUrls: ['./feed-add.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [Injector,
        NavParams,
        AuthService,
        CommonService,
        FeedService,
        FirestoreService])
], FeedAddComponent);
export { FeedAddComponent };
//# sourceMappingURL=feed-add.component.js.map