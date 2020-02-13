(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-people-people-module~pages-profile-profile-module"],{

/***/ "./src/pages/messages/services/messages/messages.service.ts":
/*!******************************************************************!*\
  !*** ./src/pages/messages/services/messages/messages.service.ts ***!
  \******************************************************************/
/*! exports provided: MessagesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesService", function() { return MessagesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/pages/auth/services/auth/auth.service */ "./src/pages/auth/services/auth/auth.service.ts");
/* harmony import */ var src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/shared/helpers/extender */ "./src/shared/helpers/extender.ts");
/* harmony import */ var src_shared_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/shared/services/firestore/firestore.service */ "./src/shared/services/firestore/firestore.service.ts");








/**
 * crud methods to interact with firebase cloud store regarding messaging
 */
let MessagesService = class MessagesService extends src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_6__["Extender"] {
    constructor(injector, authService, firestoreService) {
        super(injector);
        this.injector = injector;
        this.authService = authService;
        this.firestoreService = firestoreService;
    }
    /** get messages that contain the users uid in participantsId property, check if message is flagged as archived
     * for each message get messages recipient and get their details from users collection. return data
     */
    getMessages(uid, archieved = false) {
        return this.firestoreService
            .colWithIds$('messages', (ref) => ref.where('participantsId', 'array-contains', uid).where('isArchieved', '==', archieved))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])((data) => {
            const reads$ = [];
            if (data.length > 0) {
                data.forEach((msg) => {
                    reads$.push(this.getMessage(msg.id));
                });
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])(reads$);
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])([]);
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => {
            return data;
        }));
    }
    /** get message and their participants information */
    getMessage(id) {
        let data;
        const reads$ = [];
        return this.firestoreService.doc$(`messages/${id}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])((msg) => {
            data = msg;
            msg.participantsId.forEach((i) => {
                reads$.push(this.firestoreService.doc$(`users/${i}`));
            });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])(reads$);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((joins) => {
            return Object.assign({}, data, { participants: joins });
        }));
    }
    /** update message */
    updateMessage(message) {
        return this.firestoreService.update(`messages/${message.id}`, message);
    }
    /** delete message */
    deleteMessage(message) {
        return this.firestoreService.delete(`messages/${message.id}`);
    }
    /** delete collection of messages */
    deleteAllMessages(batch) {
        return this.firestoreService.deleteCollection(`messages`, batch);
    }
    /** start chat with a user by first checking if a message already exists with the users id,
     * if no message exists, create one,
     * if message exists, navigate to chat modal
     */
    startChat(user) {
        this.firestoreService
            .colWithIds$('messages', (ref) => ref.where('participantsId', 'array-contains', user.uid))
            .subscribe((data) => {
            const message = data[0];
            if (!message) {
                this.createMessage(user);
            }
            else {
                this.goto(`${this.routes.messages}/${message.id}`);
            }
        });
    }
    /** delete a message in chat */
    deleteChat(message, data) {
        return this.firestoreService.update(`messages/${message.id}`, {
            messages: firebase_app__WEBPACK_IMPORTED_MODULE_2__["firestore"].FieldValue.arrayRemove(data)
        });
    }
    /** send a message */
    send(message, data) {
        delete message.participants;
        return this.firestoreService.update(`messages/${message.id}`, Object.assign({}, message, { messages: firebase_app__WEBPACK_IMPORTED_MODULE_2__["firestore"].FieldValue.arrayUnion(data) }));
    }
    /** create a message with participants and default messages property to empty array */
    createMessage(user) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const { uid } = yield this.authService.getUser();
            this.firestoreService.add('messages', {
                participantsId: [user.uid, uid],
                messages: [],
                isArchieved: false
            });
        });
    }
};
MessagesService.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: src_shared_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_7__["FirestoreService"] }
];
MessagesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], src_shared_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_7__["FirestoreService"]])
], MessagesService);



/***/ }),

/***/ "./src/pages/people/services/people/people.service.ts":
/*!************************************************************!*\
  !*** ./src/pages/people/services/people/people.service.ts ***!
  \************************************************************/
/*! exports provided: PeopleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeopleService", function() { return PeopleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/ngx/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/pages/auth/services/auth/auth.service */ "./src/pages/auth/services/auth/auth.service.ts");
/* harmony import */ var src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/shared/helpers/extender */ "./src/shared/helpers/extender.ts");
/* harmony import */ var src_shared_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/shared/services/firestore/firestore.service */ "./src/shared/services/firestore/firestore.service.ts");









/**
 * crud methods to interact with firebase cloud store regarding users
 */
let PeopleService = class PeopleService extends src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_7__["Extender"] {
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
        return this.firestoreService.colWithIds$(`users`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((users) => {
            return users.filter((user) => user.uid !== uid);
        }));
    }
    /** get a single user by id and return as promise */
    getPerson(uid) {
        return this.firestoreService
            .doc$(`users/${uid}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])())
            .toPromise();
    }
    /** get friends ids from friends collection */
    getFriendIds(uid) {
        return this.firestoreService.doc$(`friends/${uid}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((friends) => {
            this.friends = friends.friendIds;
            return friends.friendIds;
        }));
    }
    /** get friends data from friends collection. friends collection only stores id so get user object for each id using switch map */
    getFriends(uid) {
        return this.firestoreService.doc$(`friends/${uid}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])((_friend) => {
            const reads = [];
            if (_friend.friendIds.length > 0) {
                _friend.friendIds.forEach((item) => {
                    reads.push(this.firestoreService.doc$(`users/${item}`));
                });
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])(reads);
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])([]);
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((friends) => {
            return friends;
        }));
    }
    /** get followers ids from friends where friendsIds array contains current users uid */
    getFollowersIds(uid) {
        return this.firestoreService
            .colWithIds$(`friends`, (ref) => ref.where('friendIds', 'array-contains', uid))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((friends) => {
            return friends;
        }));
    }
    /** get followers data from friends where friendsIds array contains current users uid
     * friends collection only stores id so get user object for each id using switch map
     */
    getFollowers(uid) {
        return this.firestoreService
            .colWithIds$(`friends`, (ref) => ref.where('friendIds', 'array-contains', uid))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])((_friend) => {
            const reads = [];
            if (_friend.length > 0) {
                _friend.forEach((item) => {
                    reads.push(this.firestoreService.doc$(`users/${item.id}`));
                });
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])(reads);
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])([]);
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((friends) => {
            return friends;
        }));
    }
    /** follow user by creating/updating friendsIds in friends collection */
    follow(fid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const { uid } = yield this.authService.getUser();
            return yield this.firestoreService.set(`friends/${uid}`, {
                friendIds: firebase_app__WEBPACK_IMPORTED_MODULE_3__["firestore"].FieldValue.arrayUnion(fid)
            });
        });
    }
    /** unfollow user by removing friendsIds in friends collection */
    unfollow(fid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const { uid } = yield this.authService.getUser();
            return yield this.firestoreService.update(`friends/${uid}`, {
                friendIds: firebase_app__WEBPACK_IMPORTED_MODULE_3__["firestore"].FieldValue.arrayRemove(fid)
            });
        });
    }
};
PeopleService.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_2__["CallNumber"] },
    { type: src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: src_shared_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_8__["FirestoreService"] }
];
PeopleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
        _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_2__["CallNumber"],
        src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
        src_shared_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_8__["FirestoreService"]])
], PeopleService);



/***/ })

}]);
//# sourceMappingURL=default~pages-people-people-module~pages-profile-profile-module-es2015.js.map