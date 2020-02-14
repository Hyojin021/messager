import * as tslib_1 from "tslib";
import { Component, ElementRef, Injector, Input, ViewChild } from '@angular/core';
import { AuthService } from 'src/pages/auth/services/auth/auth.service';
import { MessagesService } from 'src/pages/messages/services/messages/messages.service';
import { PeopleService } from 'src/pages/people/services/people/people.service';
import { Extender } from 'src/shared/helpers/extender';
import { CommonService } from 'src/shared/services/common/common.service';
import { isArray } from 'util';
/**
 * toggle to get either users followers or friends by toggling following input property
 * list users
 */
let UserPeopleComponent = class UserPeopleComponent extends Extender {
    constructor(injector, authService, commonService, messageService, peopleService) {
        super(injector);
        this.injector = injector;
        this.authService = authService;
        this.commonService = commonService;
        this.messageService = messageService;
        this.peopleService = peopleService;
        this.friends = [];
        this.following = false;
    }
    /** get current user, if following input property is true, get current users followers
     * if false, get current users friends
     */
    ngOnInit() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.user = yield this.authService.getUser();
            this.loading = true;
            if (!this.following) {
                this.subscriptions.push(this.peopleService.getFriends(this.user.uid).subscribe((friends) => {
                    this.loading = false;
                    this.friends = friends;
                }));
            }
            else {
                this.subscriptions.push(this.peopleService.getFollowers(this.user.uid).subscribe((friends) => {
                    this.loading = false;
                    this.friends = friends;
                }));
            }
            this.subscriptions.push(this.peopleService.getFriendIds(this.user.uid).subscribe((data) => (this.friendsIds = data)));
        });
    }
    /** call user */
    call() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.commonService.callUser(this.user.mobile || this.user.phone, this.callNumber);
            this.closeModal();
        });
    }
    /** start chat with user */
    chat() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.messageService.startChat(this.user);
            this.closeModal();
        });
    }
    /** share user */
    share() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const url = `people?id=${this.user.uid}`;
            yield this.commonService.share(this.user.displayName, this.user.email, this.user.photoURL, url);
            this.closeModal();
        });
    }
    /** check if user is a friends  */
    isFriend(fid) {
        return isArray(this.friends) && this.friendsIds.includes(fid);
    }
    /** check if user is a friend and follow or unfollow depending on if they are already your friend or not */
    manage() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (this.peopleService.friends.includes(this.user.uid)) {
                yield this.peopleService.unfollow(this.user.uid);
            }
            else {
                yield this.peopleService.follow(this.user.uid);
            }
        });
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean)
], UserPeopleComponent.prototype, "following", void 0);
tslib_1.__decorate([
    ViewChild('callNumber', null),
    tslib_1.__metadata("design:type", ElementRef)
], UserPeopleComponent.prototype, "callNumber", void 0);
UserPeopleComponent = tslib_1.__decorate([
    Component({
        selector: 'app-user-people',
        templateUrl: './user-people.component.html',
        styleUrls: ['./user-people.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [Injector,
        AuthService,
        CommonService,
        MessagesService,
        PeopleService])
], UserPeopleComponent);
export { UserPeopleComponent };
//# sourceMappingURL=user-people.component.js.map