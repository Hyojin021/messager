import * as tslib_1 from "tslib";
import { Component, Injector } from '@angular/core';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { NavParams } from '@ionic/angular';
import { Extender } from 'src/shared/helpers/extender';
import { FirestoreService } from 'src/shared/services/firestore/firestore.service';
let ImagePreviewComponent = class ImagePreviewComponent extends Extender {
    constructor(injector, navParams, socialShare, firestoreService) {
        super(injector);
        this.injector = injector;
        this.navParams = navParams;
        this.socialShare = socialShare;
        this.firestoreService = firestoreService;
    }
    /** get image from navParams */
    ngOnInit() {
        this.image = this.navParams.get('data');
    }
    /** save an image to device album */
    save(image) {
        this.socialShare.saveToPhotoAlbum(image).then(() => this.toast(this.translate.instant('other.save-to-album')));
    }
    /** save share image via various media */
    share(image) {
        this.socialShare.share(null, null, null, image);
    }
};
ImagePreviewComponent = tslib_1.__decorate([
    Component({
        selector: 'app-image-preview',
        templateUrl: './image-preview.component.html',
        styleUrls: ['./image-preview.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [Injector,
        NavParams,
        SocialSharing,
        FirestoreService])
], ImagePreviewComponent);
export { ImagePreviewComponent };
//# sourceMappingURL=image-preview.component.js.map