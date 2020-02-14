import * as tslib_1 from "tslib";
import { Component, Injector } from '@angular/core';
import { AuthService } from 'src/pages/auth/services/auth/auth.service';
import { FeedService } from 'src/pages/feed/services/feed/feed.service';
import { PeopleService } from 'src/pages/people/services/people/people.service';
import { Extender } from 'src/shared/helpers/extender';
import { EditProfileComponent } from 'src/shared/modals/edit-profile/edit-profile.component';
/**
 * view users details and their posts, followers and friends
 */
let ProfileComponent = class ProfileComponent extends Extender {
    constructor(injector, authService, feedService, peopleService) {
        super(injector);
        this.injector = injector;
        this.authService = authService;
        this.feedService = feedService;
        this.peopleService = peopleService;
        this.friends = [];
        this.followers = [];
        this.selectedView = 0;
        this.posts = [];
    }
    /** set tab data  */
    get views() {
        return [
            {
                id: 0,
                name: this.translate.instant('profile-component.post'),
                value: this.posts.length
            },
            {
                id: 1,
                name: this.translate.instant('profile-component.following'),
                value: this.friends ? this.friends.length : 0
            },
            {
                id: 2,
                name: this.translate.instant('profile-component.followers'),
                value: this.followers.length
            }
        ];
    }
    /** get current user */
    ngOnInit() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.user = yield this.authService.getUser();
        });
    }
    /** get user and user details such as feed, friends and followers */
    ionViewDidEnter() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.subscriptions.push(this.authService.user.subscribe((user) => {
                if (user) {
                    this.user = user;
                    this.subscriptions.push(this.feedService.getUserFeed(this.user.uid).subscribe((posts) => (this.posts = posts)));
                    this.subscriptions.push(this.peopleService.getFriendIds(this.user.uid).subscribe((friends) => (this.friends = friends)));
                    this.subscriptions.push(this.peopleService.getFollowersIds(this.user.uid).subscribe((friends) => (this.followers = friends)));
                }
            }));
        });
    }
    /** open more options in action sheet with options to edit, logout or close action sheet */
    more() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const actionSheetCtrl = yield this.actionSheetCtrl.create({
                header: this.translate.instant('other.options'),
                buttons: [
                    {
                        text: this.translate.instant('setting-component.edit-account'),
                        handler: () => this.edit()
                    },
                    {
                        text: this.translate.instant('setting-component.logout-button'),
                        handler: () => {
                            this.authService.signOut().then(() => this.goto(this.routes.auth));
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
    /** open profile edit modal */
    edit() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const modal = yield this.openModal(EditProfileComponent, this.user);
            modal.present();
        });
    }
};
ProfileComponent = tslib_1.__decorate([
    Component({
        selector: 'app-profile',
        templateUrl: './profile.component.html',
        styleUrls: ['./profile.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [Injector,
        AuthService,
        FeedService,
        PeopleService])
], ProfileComponent);
export { ProfileComponent };
//# sourceMappingURL=profile.component.js.map