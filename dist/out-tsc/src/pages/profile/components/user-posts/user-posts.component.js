import * as tslib_1 from "tslib";
import { Component, Injector } from '@angular/core';
import { AuthService } from 'src/pages/auth/services/auth/auth.service';
import { FeedService } from 'src/pages/feed/services/feed/feed.service';
import { Extender } from 'src/shared/helpers/extender';
import { ImagePreviewComponent } from 'src/shared/modals/image-preview/image-preview.component';
/**
 * get users posts images and list them in a gallery format
 */
let UserPostsComponent = class UserPostsComponent extends Extender {
    constructor(injector, authService, feedService) {
        super(injector);
        this.injector = injector;
        this.authService = authService;
        this.feedService = feedService;
        this.posts = [];
    }
    /** get user feed and extract images into one array */
    ngOnInit() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const { uid } = yield this.authService.getUser();
            this.loading = true;
            this.subscriptions.push(this.feedService.getUserFeed(uid).subscribe((feed) => {
                this.loading = false;
                this.posts = [].concat.apply([], feed.map((post) => post.images));
            }));
        });
    }
    /** open image preview */
    open(image) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const modal = yield this.openModal(ImagePreviewComponent, image, 'custom-modal');
            modal.present();
        });
    }
};
UserPostsComponent = tslib_1.__decorate([
    Component({
        selector: 'app-user-posts',
        templateUrl: './user-posts.component.html',
        styleUrls: ['./user-posts.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [Injector, AuthService, FeedService])
], UserPostsComponent);
export { UserPostsComponent };
//# sourceMappingURL=user-posts.component.js.map