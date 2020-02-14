import * as tslib_1 from "tslib";
import { Component, Injector } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { AuthService } from 'src/pages/auth/services/auth/auth.service';
import { Extender } from 'src/shared/helpers/extender';
import { CommonService } from 'src/shared/services/common/common.service';
import { FeedService } from '../../services/feed/feed.service';
import { FeedAddComponent } from '../feed-add/feed-add.component';
import { FeedCommentComponent } from '../feed-comment/feed-comment.component';
/**
 * view post details
 */
let FeedDetailComponent = class FeedDetailComponent extends Extender {
    constructor(injector, navParams, commonService, authService, feedService) {
        super(injector);
        this.injector = injector;
        this.navParams = navParams;
        this.commonService = commonService;
        this.authService = authService;
        this.feedService = feedService;
        this.feed = null;
        this.currentIndex = 0;
    }
    /** get user and get post */
    ngOnInit() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.user = yield this.authService.getUser();
            const id = this.navParams.get('data');
            this.subscriptions.push(this.feedService.getPost(id, this.user.uid).subscribe((feed) => (this.feed = feed)));
        });
    }
    /** open action sheet with options to edit, delete, access comments, like or share post */
    openOptions(feed) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetCtrl.create({
                header: this.translate.instant('other.options'),
                buttons: [
                    {
                        text: this.translate.instant('other.edit-label'),
                        handler: () => {
                            this.edit(feed);
                        }
                    },
                    {
                        text: this.translate.instant('other.delete-label'),
                        role: 'destructive',
                        handler: () => {
                            this.delete(feed);
                        }
                    },
                    {
                        text: this.translate.instant('feed-detail-component.open-comments'),
                        handler: () => {
                            this.comment(feed);
                        }
                    },
                    {
                        text: this.translate.instant('feed-detail-component.like'),
                        handler: () => {
                            this.like();
                        }
                    },
                    {
                        text: this.translate.instant('feed-detail-component.share-button'),
                        handler: () => {
                            this.share(feed);
                        }
                    },
                    {
                        text: this.translate.instant('other.cancel'),
                        role: 'cancel',
                        handler: () => { }
                    }
                ]
            });
            actionSheet.present();
        });
    }
    /** open edit modal with post id */
    edit(post) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (post.user.uid === this.user.uid) {
                const modal = yield this.openModal(FeedAddComponent, post.id, 'custom-modal');
                yield modal.present();
            }
            else {
                this.toast(this.translate.instant('feed-detail-component.cannot-edit'));
            }
        });
    }
    /** like feed */
    like() {
        this.feedService.like(this.feed);
    }
    /** open comments */
    comment(post) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const modal = yield this.openModal(FeedCommentComponent, post);
            modal.present();
        });
    }
    /** get post url and share post */
    share(post) {
        const url = `feed?id=${post.id}`;
        this.commonService.share(post.content, post.title, post.images, url);
    }
    /** show prompt and delete post */
    delete(post) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (post.uid === this.user.uid) {
                const prompt = yield this.alertCtrl.create({
                    header: this.translate.instant('feed-detail-component.delete-alert-title'),
                    message: this.translate.instant('feed-detail-component.delete-alert-message'),
                    buttons: [
                        {
                            text: this.translate.instant('other.cancel'),
                            role: 'cancel'
                        },
                        {
                            text: this.translate.instant('other.delete-label'),
                            handler: () => {
                                this.feedService.delete(post).then(() => {
                                    this.modalCtrl.dismiss();
                                    this.toast(this.translate.instant('feed-detail-component.confirm-delete'));
                                });
                            }
                        }
                    ]
                });
                yield prompt.present();
            }
            else {
                this.toast(this.translate.instant('feed-detail-component.cannot-delete'));
            }
        });
    }
    /** navigate to the next image */
    forward() {
        if (this.currentIndex < this.feed.images.length - 1) {
            this.currentIndex += 1;
        }
        else {
            this.currentIndex = 0;
        }
    }
    /** navigate to the previous image */
    back() {
        if (this.currentIndex < 1) {
            this.currentIndex = this.feed.images.length - 1;
        }
        else {
            this.currentIndex -= 1;
        }
    }
};
FeedDetailComponent = tslib_1.__decorate([
    Component({
        selector: 'app-feed-detail',
        templateUrl: './feed-detail.component.html',
        styleUrls: ['./feed-detail.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [Injector,
        NavParams,
        CommonService,
        AuthService,
        FeedService])
], FeedDetailComponent);
export { FeedDetailComponent };
//# sourceMappingURL=feed-detail.component.js.map