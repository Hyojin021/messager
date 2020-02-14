import * as tslib_1 from "tslib";
import { Component, Injector } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { AuthService } from 'src/pages/auth/services/auth/auth.service';
import { Extender } from 'src/shared/helpers/extender';
import { FeedService } from '../../services/feed/feed.service';
/**
 * enable user to add comments to a post
 */
let FeedCommentComponent = class FeedCommentComponent extends Extender {
    constructor(injector, navParams, authService, feedService) {
        super(injector);
        this.injector = injector;
        this.navParams = navParams;
        this.authService = authService;
        this.feedService = feedService;
        this.comments = [];
        this.openSearch = false;
    }
    /** get current user and post id from navParams and get comments for the post */
    ngOnInit() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.user = yield this.authService.getUser();
            const fid = this.navParams.get('data');
            this.loading = true;
            this.subscriptions.push(this.feedService.getComments(fid, this.user.uid).subscribe((comments) => {
                this.loading = false;
                this.comments = comments;
            }, (err) => {
                this.loading = false;
                this.toast(err);
            }));
        });
    }
    /** search comments */
    onSearch(val) {
        this.comments = this.feedService.searchComments(val);
    }
    /** save or edit new or existing comment */
    save(text) {
        let comment;
        if (this.editComment) {
            comment = this.editComment;
            comment.text = text;
        }
        else {
            comment = {
                uid: this.user.uid,
                fid: this.navParams.get('data'),
                text
            };
        }
        this.feedService.upsertComment(comment).then(() => {
            comment = null;
            this.commentMsg = null;
            this.editComment = null;
        });
    }
    /** manage comment by opening actionsheet and displaying options edit or delete comment. */
    openOptions(comment) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetCtrl.create({
                header: this.translate.instant('other.options'),
                buttons: [
                    {
                        text: this.translate.instant('other.edit-label'),
                        handler: () => {
                            this.editComment = comment;
                            this.commentMsg = comment.text;
                        }
                    },
                    {
                        text: this.translate.instant('other.delete-label'),
                        handler: () => {
                            this.feedService.deleteComment(comment);
                        }
                    },
                    {
                        text: this.translate.instant('other.cancel'),
                        role: 'cancel',
                        handler: () => { }
                    }
                ]
            });
            yield actionSheet.present();
        });
    }
};
FeedCommentComponent = tslib_1.__decorate([
    Component({
        selector: 'app-feed-comment',
        templateUrl: './feed-comment.component.html',
        styleUrls: ['./feed-comment.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [Injector,
        NavParams,
        AuthService,
        FeedService])
], FeedCommentComponent);
export { FeedCommentComponent };
//# sourceMappingURL=feed-comment.component.js.map