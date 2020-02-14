import * as tslib_1 from "tslib";
import { Component, Injector } from '@angular/core';
import { AuthService } from 'src/pages/auth/services/auth/auth.service';
import { Extender } from 'src/shared/helpers/extender';
import { CommonService } from 'src/shared/services/common/common.service';
import { FeedService } from '../../services/feed/feed.service';
import { FeedAddComponent } from '../feed-add/feed-add.component';
import { FeedCommentComponent } from '../feed-comment/feed-comment.component';
import { FeedDetailComponent } from '../feed-detail/feed-detail.component';
/**
 * get feed from the app, displays 4 design versions, search feed, like and open comment for feed.
 * open feed detail and add new feed can all be accessed from feed component
 */
let FeedComponent = class FeedComponent extends Extender {
    constructor(injector, authService, feedService, commonService) {
        super(injector);
        this.injector = injector;
        this.authService = authService;
        this.feedService = feedService;
        this.commonService = commonService;
        this.openSearch = false;
        this.views = this.feedService.views;
    }
    /** get current user, get feed
     * handle openPostFromUrl method
     */
    ngOnInit() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.loading = true;
            this.user = yield this.authService.getUser();
            this.openPostFromUrl();
            this.subscriptions.push(this.feedService.getFeed(this.user.uid).subscribe((feed) => {
                this.feed = [...feed];
                this.loading = false;
            }, (err) => {
                this.loading = false;
                this.toast(err);
            }));
        });
    }
    /** if url has query param, navigate to view and id in param (used for share links when you click the share button) */
    openPostFromUrl() {
        this.subscriptions.push(this.activatedRoute.queryParams.subscribe((param) => {
            if (param && param.id) {
                this.viewPost({ id: param.id });
            }
        }));
    }
    /** search friends feed */
    onSearch(val) {
        this.feed = this.feedService.searchFeed(val);
    }
    /** manage feed actions such as likes, comments etc */
    manage(_event) {
        if (_event.type === 'like') {
            this.feedService.like(_event.data);
        }
        else if (_event.type === 'comment') {
            this.comment(_event.data);
        }
        else if (_event.type === 'profile') {
            this.profile(_event.data);
        }
        else if (_event.type === 'share') {
            this.share(_event.data);
        }
        else if (_event.type === 'detail') {
            this.viewPost(_event.data);
        }
        else if (_event.type === 'more') {
            this.more(_event.data);
        }
    }
    /** delete a post */
    delete(post) {
        this.feedService.delete(post);
    }
    /** go to post author's profile page */
    profile(post) {
        this.goto(this.routes.people + '/' + post.user.uid);
    }
    /** open add post modal, add to array of feed after completed */
    addPost() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const modal = yield this.openModal(FeedAddComponent, null, 'custom-modal');
            modal.present();
        });
    }
    /** open post details modal, update array of feed if any change is made */
    viewPost(post) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const modal = yield this.openModal(FeedDetailComponent, post.id);
            modal.present();
        });
    }
    /** open feed's comments */
    comment(post) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const modal = yield this.openModal(FeedCommentComponent, post.id);
            modal.present();
        });
    }
    /** open actionsheet for more options */
    more(data) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const actionSheetCtrl = yield this.actionSheetCtrl.create({
                header: this.translate.instant('feed-component.more-header'),
                buttons: [
                    {
                        text: this.translate.instant('feed-component.more-option-open'),
                        handler: () => {
                            this.viewPost(data);
                        }
                    },
                    {
                        text: this.translate.instant('feed-component.more-option-delete'),
                        handler: () => {
                            this.delete(data);
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
    /** share feed to other apps */
    share(post) {
        const url = `feed?id=${post.id}`;
        this.commonService.share(post.content, post.title, post.images, url);
    }
};
FeedComponent = tslib_1.__decorate([
    Component({
        selector: 'app-feed',
        templateUrl: './feed.component.html',
        styleUrls: ['./feed.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [Injector,
        AuthService,
        FeedService,
        CommonService])
], FeedComponent);
export { FeedComponent };
//# sourceMappingURL=feed.component.js.map