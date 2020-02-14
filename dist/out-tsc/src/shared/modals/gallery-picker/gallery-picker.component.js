import * as tslib_1 from "tslib";
import { Component, Injector } from '@angular/core';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { NavParams } from '@ionic/angular';
import { Extender } from 'src/shared/helpers/extender';
import { isArray } from 'util';
let GalleryPickerComponent = class GalleryPickerComponent extends Extender {
    constructor(injector, navParams, socialShare) {
        super(injector);
        this.injector = injector;
        this.navParams = navParams;
        this.socialShare = socialShare;
        this.images = [];
        this.textMsg = null;
        this.selectedImageIndex = 0;
    }
    /** get images from nav param and set main image */
    ngOnInit() {
        const data = this.navParams.get('data');
        this.images = isArray(data) ? data : [data];
        this.mainImage = this.images[this.selectedImageIndex];
    }
    /** send will set images and text and pass it as param in close modal so be accessed and used by message.component.ts */
    send(text, images) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const data = {
                images,
                text
            };
            this.closeModal(data);
        });
    }
    /** save an image to device album */
    save() {
        this.socialShare.saveToPhotoAlbum(this.mainImage).then(() => this.toast(this.translate.instant('other.save-to-album')));
    }
    /** save share image via various media */
    share() {
        this.socialShare.share(null, null, null, this.mainImage);
    }
    /** remove image */
    remove() {
        this.images.splice(this.selectedImageIndex, 1);
        this.mainImage = this.images[0];
    }
};
GalleryPickerComponent = tslib_1.__decorate([
    Component({
        selector: 'app-gallery-picker',
        templateUrl: './gallery-picker.component.html',
        styleUrls: ['./gallery-picker.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [Injector, NavParams, SocialSharing])
], GalleryPickerComponent);
export { GalleryPickerComponent };
//# sourceMappingURL=gallery-picker.component.js.map