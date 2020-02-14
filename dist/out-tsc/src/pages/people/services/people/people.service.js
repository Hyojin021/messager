import * as tslib_1 from "tslib";
import { Injectable, Injector } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number/ngx';
import * as firebase from 'firebase/app';
import { combineLatest, of } from 'rxjs';
import { first, map, switchMap } from 'rxjs/operators';
import { AuthService } from 'src/pages/auth/services/auth/auth.service';
import { Extender } from 'src/shared/helpers/extender';
import { FirestoreService } from 'src/shared/services/firestore/firestore.service';
/**
 * crud methods to interact with firebase cloud store regarding users
 */
let PeopleService = class PeopleService extends Extender {
    constructor(injector, callNumber, authService, firestoreService) {
        super(injector);
        this.injector = injector;
        this.callNumber = callNumber;
        this.authService = authService;
        this.firestoreService = firestoreService;
        this.friends = [];
    }
    /** get alphabets A to Z */
    get alpha() {
        const a = [];
        let i = 'A'.charCodeAt(0);
        const j = 'Z'.charCodeAt(0);
        for (; i <= j; ++i) {
            a.push(String.fromCharCode(i));
        }
        return a;
    }
    /** get tabbed views detail */
    get views() {
        return [
            {
                id: 0,
                name: 'All',
                active: true,
                event: () => { }
            },
            {
                id: 1,
                name: 'Friends',
                event: () => { }
            }
        ];
    }
    /** sort and group people by first letter of their name and return an array of letter
     * and then array of users with that first letter of display name
     */
    groupPeople(people) {
        const sortedContacts = people.sort((a, b) => {
            return a.displayName.toLowerCase() > b.displayName.toLowerCase()
                ? 1
                : b.displayName.toLowerCase() > a.displayName.toLowerCase()
                    ? -1
                    : 0;
        });
        let currentLetter = false;
        let currentContacts = [];
        const groupedPeople = [];
        sortedContacts.forEach((value) => {
            if (value.displayName.charAt(0).toString() !== currentLetter) {
                currentLetter = value.displayName.charAt(0);
                const newGroup = {
                    letter: currentLetter,
                    people: []
                };
                currentContacts = newGroup.people;
                groupedPeople.push(newGroup);
            }
            currentContacts.push(value);
        });
        return groupedPeople;
    }
    /** get users from users collection, remove current user from list */
    getPeople(uid) {
        return this.firestoreService.colWithIds$(`users`).pipe(map((users) => {
            return users.filter((user) => user.uid !== uid);
        }));
    }
    /** get a single user by id and return as promise */
    getPerson(uid) {
        return this.firestoreService
            .doc$(`users/${uid}`)
            .pipe(first())
            .toPromise();
    }
    /** get friends ids from friends collection */
    getFriendIds(uid) {
        return this.firestoreService.doc$(`friends/${uid}`).pipe(map((friends) => {
            this.friends = friends.friendIds;
            return friends.friendIds;
        }));
    }
    /** get friends data from friends collection. friends collection only stores id so get user object for each id using switch map */
    getFriends(uid) {
        return this.firestoreService.doc$(`friends/${uid}`).pipe(switchMap((_friend) => {
            const reads = [];
            if (_friend.friendIds.length > 0) {
                _friend.friendIds.forEach((item) => {
                    reads.push(this.firestoreService.doc$(`users/${item}`));
                });
                return combineLatest(reads);
            }
            else {
                return of([]);
            }
        }), map((friends) => {
            return friends;
        }));
    }
    /** get followers ids from friends where friendsIds array contains current users uid */
    getFollowersIds(uid) {
        return this.firestoreService
            .colWithIds$(`friends`, (ref) => ref.where('friendIds', 'array-contains', uid))
            .pipe(map((friends) => {
            return friends;
        }));
    }
    /** get followers data from friends where friendsIds array contains current users uid
     * friends collection only stores id so get user object for each id using switch map
     */
    getFollowers(uid) {
        return this.firestoreService
            .colWithIds$(`friends`, (ref) => ref.where('friendIds', 'array-contains', uid))
            .pipe(switchMap((_friend) => {
            const reads = [];
            if (_friend.length > 0) {
                _friend.forEach((item) => {
                    reads.push(this.firestoreService.doc$(`users/${item.id}`));
                });
                return combineLatest(reads);
            }
            else {
                return of([]);
            }
        }), map((friends) => {
            return friends;
        }));
    }
    /** follow user by creating/updating friendsIds in friends collection */
    follow(fid) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const { uid } = yield this.authService.getUser();
            return yield this.firestoreService.set(`friends/${uid}`, {
                friendIds: firebase.firestore.FieldValue.arrayUnion(fid)
            });
        });
    }
    /** unfollow user by removing friendsIds in friends collection */
    unfollow(fid) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const { uid } = yield this.authService.getUser();
            return yield this.firestoreService.update(`friends/${uid}`, {
                friendIds: firebase.firestore.FieldValue.arrayRemove(fid)
            });
        });
    }
};
PeopleService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [Injector,
        CallNumber,
        AuthService,
        FirestoreService])
], PeopleService);
export { PeopleService };
//# sourceMappingURL=people.service.js.map