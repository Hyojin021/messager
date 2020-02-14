import * as tslib_1 from "tslib";
import { Component, ElementRef, Injector, ViewChild } from '@angular/core';
import { AuthService } from 'src/pages/auth/services/auth/auth.service';
import { MessagesService } from 'src/pages/messages/services/messages/messages.service';
import { Extender } from 'src/shared/helpers/extender';
import { CommonService } from 'src/shared/services/common/common.service';
import { isArray } from 'util';
import { PeopleService } from '../../services/people/people.service';
import { PersonComponent } from '../person/person.component';
/**
 * get list of people fro users collection, group them by first letter of their display names.
 * using a href to scroll to category by letter in the user list.
 * you can follow and unfollow users, call and start message
 */
let PeopleComponent = class PeopleComponent extends Extender {
    constructor(injector, authService, messageService, peopleService, commonService) {
        super(injector);
        this.injector = injector;
        this.authService = authService;
        this.messageService = messageService;
        this.peopleService = peopleService;
        this.commonService = commonService;
        /** group contacts by first letter of their first names */
        this.groupedPeople = [];
        /** stores string array of alphabets */
        this.alpha = [];
        /** stores tabbed views properties */
        this.views = [];
        /** toggles search bar in template */
        this.openSearch = false;
        this.selectedIndex = 0;
        this.alpha = this.peopleService.alpha;
        this.views = this.peopleService.views;
    }
    /** get currentUser, get users friends ids and get all users from user collection */
    ngOnInit() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.loading = true;
            this.openProfileFromUrl();
            this.currentUser = yield this.authService.getUser();
            this.subscriptions.push(this.peopleService.getFriendIds(this.currentUser.uid).subscribe((ids) => (this.friends = ids)));
            this.subscriptions.push(this.peopleService.getPeople(this.currentUser.uid).subscribe((users) => {
                this.list = users;
                this.loading = false;
                this.showList(this.selectedIndex);
            }, (err) => {
                this.loading = false;
                this.toast(err);
            }));
        });
    }
    /** if you navigate to this page with query params, open person modal and use id in query param to find user details */
    openProfileFromUrl() {
        this.subscriptions.push(this.activatedRoute.queryParams.subscribe((param) => {
            if (param && param.id) {
                this.open(param.id);
            }
        }));
    }
    /** search list of users by name and regroup into alphabet categories */
    onSearch(val) {
        let people;
        if (val && val.trim() !== '') {
            people = this.list.filter((item) => {
                return item.displayName.toLowerCase().indexOf(val.toLowerCase()) > -1;
            });
        }
        else {
            people = [...this.list];
        }
        this.groupedPeople = this.peopleService.groupPeople(people);
    }
    /** show either friends or all people based on tab selection */
    showList(index) {
        this.selectedIndex = index;
        if (index === 0) {
            this.groupedPeople = this.peopleService.groupPeople(this.list);
        }
        else {
            const friends = this.list.filter((user) => (this.friends && this.friends.length > 0 ? this.friends.includes(user.uid) : null));
            this.groupedPeople = this.peopleService.groupPeople(friends);
        }
    }
    /** check if user is a friend and follow or unfollow depending on if they are already your friend or not */
    manage(friend) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (isArray(this.friends) && this.friends.includes(friend.uid)) {
                yield this.peopleService.unfollow(friend.uid);
            }
            else {
                yield this.peopleService.follow(friend.uid);
            }
            this.showList(this.selectedIndex);
        });
    }
    isFriend(fid) {
        return isArray(this.friends) && this.friends.includes(fid);
    }
    /** open a persons profile */
    open(uid) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const modal = yield this.openModal(PersonComponent, uid, 'custom-modal');
            modal.present();
        });
    }
    /** open action sheet with options for a person selection */
    openMore(contact) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const actionSheetCtrl = yield this.actionSheetCtrl.create({
                header: this.translate.instant('other.options'),
                buttons: [
                    {
                        text: this.translate.instant('people-component.unfollow'),
                        handler: () => {
                            this.manage(contact);
                        }
                    },
                    {
                        text: this.translate.instant('people-component.open'),
                        handler: () => {
                            this.open(contact.uid);
                        }
                    },
                    {
                        text: this.translate.instant('people-component.call'),
                        handler: () => {
                            this.commonService.callUser(contact.mobile || contact.phone, this.callNumber);
                        }
                    },
                    {
                        text: this.translate.instant('people-component.chat'),
                        handler: () => {
                            this.messageService.startChat(contact);
                        }
                    },
                    {
                        text: this.translate.instant('other.cancel'),
                        role: 'cancel'
                    }
                ]
            });
            yield actionSheetCtrl.present();
        });
    }
    /** scroll user to user group category */
    scrollTo(item) {
        const element = document.getElementById(item);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest'
            });
        }
    }
};
tslib_1.__decorate([
    ViewChild('content', null),
    tslib_1.__metadata("design:type", ElementRef)
], PeopleComponent.prototype, "content", void 0);
tslib_1.__decorate([
    ViewChild('callNumber', null),
    tslib_1.__metadata("design:type", ElementRef)
], PeopleComponent.prototype, "callNumber", void 0);
PeopleComponent = tslib_1.__decorate([
    Component({
        selector: 'app-people',
        templateUrl: './people.component.html',
        styleUrls: ['./people.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [Injector,
        AuthService,
        MessagesService,
        PeopleService,
        CommonService])
], PeopleComponent);
export { PeopleComponent };
//# sourceMappingURL=people.component.js.map