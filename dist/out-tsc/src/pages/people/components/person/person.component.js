import * as tslib_1 from "tslib";
import { Component, ElementRef, Injector, ViewChild } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { AuthService } from 'src/pages/auth/services/auth/auth.service';
import { MessagesService } from 'src/pages/messages/services/messages/messages.service';
import { Extender } from 'src/shared/helpers/extender';
import { CommonService } from 'src/shared/services/common/common.service';
import { PeopleService } from '../../services/people/people.service';
/**
 * view users profile and call, follow, unfollow share or chat to user
 */
let PersonComponent = class PersonComponent extends Extender {
    constructor(injector, navParams, authService, peopleService, messageService, commonService) {
        super(injector);
        this.injector = injector;
        this.navParams = navParams;
        this.authService = authService;
        this.peopleService = peopleService;
        this.messageService = messageService;
        this.commonService = commonService;
    }
    /** get current user, get user to view by getting id from nav param */
    ngOnInit() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.currentUser = yield this.authService.getUser();
            const uid = this.navParams.get('data');
            this.user = yield this.peopleService.getPerson(uid);
        });
    }
    /** call user */
    call() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.commonService.callUser(this.user.mobile || this.user.phone, this.callNumber);
            this.closeModal();
        });
    }
    /** chat to user */
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
    /** getter to check if user is a friend */
    get isFriend() {
        return this.peopleService.friends.includes(this.user.uid);
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
    ViewChild('callNumber', null),
    tslib_1.__metadata("design:type", ElementRef)
], PersonComponent.prototype, "callNumber", void 0);
PersonComponent = tslib_1.__decorate([
    Component({
        selector: 'app-person',
        templateUrl: './person.component.html',
        styleUrls: ['./person.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [Injector,
        NavParams,
        AuthService,
        PeopleService,
        MessagesService,
        CommonService])
], PersonComponent);
export { PersonComponent };
//# sourceMappingURL=person.component.js.map