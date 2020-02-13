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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/pages/auth/services/auth/auth.service */ "./src/pages/auth/services/auth/auth.service.ts");
/* harmony import */ var src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/shared/helpers/extender */ "./src/shared/helpers/extender.ts");
/* harmony import */ var src_shared_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/shared/services/firestore/firestore.service */ "./src/shared/services/firestore/firestore.service.ts");








/**
 * crud methods to interact with firebase cloud store regarding messaging
 */
var MessagesService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MessagesService, _super);
    function MessagesService(injector, authService, firestoreService) {
        var _this = _super.call(this, injector) || this;
        _this.injector = injector;
        _this.authService = authService;
        _this.firestoreService = firestoreService;
        return _this;
    }
    /** get messages that contain the users uid in participantsId property, check if message is flagged as archived
     * for each message get messages recipient and get their details from users collection. return data
     */
    MessagesService.prototype.getMessages = function (uid, archieved) {
        var _this = this;
        if (archieved === void 0) { archieved = false; }
        return this.firestoreService
            .colWithIds$('messages', function (ref) {
            return ref.where('participantsId', 'array-contains', uid).where('isArchieved', '==', archieved);
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (data) {
            var reads$ = [];
            if (data.length > 0) {
                data.forEach(function (msg) {
                    reads$.push(_this.getMessage(msg.id));
                });
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])(reads$);
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])([]);
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            return data;
        }));
    };
    /** get message and their participants information */
    MessagesService.prototype.getMessage = function (id) {
        var _this = this;
        var data;
        var reads$ = [];
        return this.firestoreService.doc$("messages/" + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (msg) {
            data = msg;
            msg.participantsId.forEach(function (i) {
                reads$.push(_this.firestoreService.doc$("users/" + i));
            });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])(reads$);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (joins) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, data, { participants: joins });
        }));
    };
    /** update message */
    MessagesService.prototype.updateMessage = function (message) {
        return this.firestoreService.update("messages/" + message.id, message);
    };
    /** delete message */
    MessagesService.prototype.deleteMessage = function (message) {
        return this.firestoreService.delete("messages/" + message.id);
    };
    /** delete collection of messages */
    MessagesService.prototype.deleteAllMessages = function (batch) {
        return this.firestoreService.deleteCollection("messages", batch);
    };
    /** start chat with a user by first checking if a message already exists with the users id,
     * if no message exists, create one,
     * if message exists, navigate to chat modal
     */
    MessagesService.prototype.startChat = function (user) {
        var _this = this;
        this.firestoreService
            .colWithIds$('messages', function (ref) { return ref.where('participantsId', 'array-contains', user.uid); })
            .subscribe(function (data) {
            var message = data[0];
            if (!message) {
                _this.createMessage(user);
            }
            else {
                _this.goto(_this.routes.messages + "/" + message.id);
            }
        });
    };
    /** delete a message in chat */
    MessagesService.prototype.deleteChat = function (message, data) {
        return this.firestoreService.update("messages/" + message.id, {
            messages: firebase_app__WEBPACK_IMPORTED_MODULE_2__["firestore"].FieldValue.arrayRemove(data)
        });
    };
    /** send a message */
    MessagesService.prototype.send = function (message, data) {
        delete message.participants;
        return this.firestoreService.update("messages/" + message.id, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, message, { messages: firebase_app__WEBPACK_IMPORTED_MODULE_2__["firestore"].FieldValue.arrayUnion(data) }));
    };
    /** create a message with participants and default messages property to empty array */
    MessagesService.prototype.createMessage = function (user) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var uid;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authService.getUser()];
                    case 1:
                        uid = (_a.sent()).uid;
                        this.firestoreService.add('messages', {
                            participantsId: [user.uid, uid],
                            messages: [],
                            isArchieved: false
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    MessagesService.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
        { type: src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
        { type: src_shared_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_7__["FirestoreService"] }
    ]; };
    MessagesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], src_shared_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_7__["FirestoreService"]])
    ], MessagesService);
    return MessagesService;
}(src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_6__["Extender"]));



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/ngx/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/pages/auth/services/auth/auth.service */ "./src/pages/auth/services/auth/auth.service.ts");
/* harmony import */ var src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/shared/helpers/extender */ "./src/shared/helpers/extender.ts");
/* harmony import */ var src_shared_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/shared/services/firestore/firestore.service */ "./src/shared/services/firestore/firestore.service.ts");









/**
 * crud methods to interact with firebase cloud store regarding users
 */
var PeopleService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PeopleService, _super);
    function PeopleService(injector, callNumber, authService, firestoreService) {
        var _this = _super.call(this, injector) || this;
        _this.injector = injector;
        _this.callNumber = callNumber;
        _this.authService = authService;
        _this.firestoreService = firestoreService;
        _this.friends = [];
        return _this;
    }
    Object.defineProperty(PeopleService.prototype, "alpha", {
        /** get alphabets A to Z */
        get: function () {
            var a = [];
            var i = 'A'.charCodeAt(0);
            var j = 'Z'.charCodeAt(0);
            for (; i <= j; ++i) {
                a.push(String.fromCharCode(i));
            }
            return a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PeopleService.prototype, "views", {
        /** get tabbed views detail */
        get: function () {
            return [
                {
                    id: 0,
                    name: 'All',
                    active: true,
                    event: function () { }
                },
                {
                    id: 1,
                    name: 'Friends',
                    event: function () { }
                }
            ];
        },
        enumerable: true,
        configurable: true
    });
    /** sort and group people by first letter of their name and return an array of letter
     * and then array of users with that first letter of display name
     */
    PeopleService.prototype.groupPeople = function (people) {
        var sortedContacts = people.sort(function (a, b) {
            return a.displayName.toLowerCase() > b.displayName.toLowerCase()
                ? 1
                : b.displayName.toLowerCase() > a.displayName.toLowerCase()
                    ? -1
                    : 0;
        });
        var currentLetter = false;
        var currentContacts = [];
        var groupedPeople = [];
        sortedContacts.forEach(function (value) {
            if (value.displayName.charAt(0).toString() !== currentLetter) {
                currentLetter = value.displayName.charAt(0);
                var newGroup = {
                    letter: currentLetter,
                    people: []
                };
                currentContacts = newGroup.people;
                groupedPeople.push(newGroup);
            }
            currentContacts.push(value);
        });
        return groupedPeople;
    };
    /** get users from users collection, remove current user from list */
    PeopleService.prototype.getPeople = function (uid) {
        return this.firestoreService.colWithIds$("users").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (users) {
            return users.filter(function (user) { return user.uid !== uid; });
        }));
    };
    /** get a single user by id and return as promise */
    PeopleService.prototype.getPerson = function (uid) {
        return this.firestoreService
            .doc$("users/" + uid)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])())
            .toPromise();
    };
    /** get friends ids from friends collection */
    PeopleService.prototype.getFriendIds = function (uid) {
        var _this = this;
        return this.firestoreService.doc$("friends/" + uid).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (friends) {
            _this.friends = friends.friendIds;
            return friends.friendIds;
        }));
    };
    /** get friends data from friends collection. friends collection only stores id so get user object for each id using switch map */
    PeopleService.prototype.getFriends = function (uid) {
        var _this = this;
        return this.firestoreService.doc$("friends/" + uid).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (_friend) {
            var reads = [];
            if (_friend.friendIds.length > 0) {
                _friend.friendIds.forEach(function (item) {
                    reads.push(_this.firestoreService.doc$("users/" + item));
                });
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])(reads);
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])([]);
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (friends) {
            return friends;
        }));
    };
    /** get followers ids from friends where friendsIds array contains current users uid */
    PeopleService.prototype.getFollowersIds = function (uid) {
        return this.firestoreService
            .colWithIds$("friends", function (ref) { return ref.where('friendIds', 'array-contains', uid); })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (friends) {
            return friends;
        }));
    };
    /** get followers data from friends where friendsIds array contains current users uid
     * friends collection only stores id so get user object for each id using switch map
     */
    PeopleService.prototype.getFollowers = function (uid) {
        var _this = this;
        return this.firestoreService
            .colWithIds$("friends", function (ref) { return ref.where('friendIds', 'array-contains', uid); })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (_friend) {
            var reads = [];
            if (_friend.length > 0) {
                _friend.forEach(function (item) {
                    reads.push(_this.firestoreService.doc$("users/" + item.id));
                });
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])(reads);
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])([]);
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (friends) {
            return friends;
        }));
    };
    /** follow user by creating/updating friendsIds in friends collection */
    PeopleService.prototype.follow = function (fid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var uid;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authService.getUser()];
                    case 1:
                        uid = (_a.sent()).uid;
                        return [4 /*yield*/, this.firestoreService.set("friends/" + uid, {
                                friendIds: firebase_app__WEBPACK_IMPORTED_MODULE_3__["firestore"].FieldValue.arrayUnion(fid)
                            })];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** unfollow user by removing friendsIds in friends collection */
    PeopleService.prototype.unfollow = function (fid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var uid;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authService.getUser()];
                    case 1:
                        uid = (_a.sent()).uid;
                        return [4 /*yield*/, this.firestoreService.update("friends/" + uid, {
                                friendIds: firebase_app__WEBPACK_IMPORTED_MODULE_3__["firestore"].FieldValue.arrayRemove(fid)
                            })];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    PeopleService.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
        { type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_2__["CallNumber"] },
        { type: src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
        { type: src_shared_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_8__["FirestoreService"] }
    ]; };
    PeopleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
            _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_2__["CallNumber"],
            src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
            src_shared_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_8__["FirestoreService"]])
    ], PeopleService);
    return PeopleService;
}(src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_7__["Extender"]));



/***/ })

}]);
//# sourceMappingURL=default~pages-people-people-module~pages-profile-profile-module-es5.js.map