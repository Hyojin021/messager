(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-feed-feed-module~pages-profile-profile-module"],{

/***/ "./src/pages/feed/services/feed/feed.service.ts":
/*!******************************************************!*\
  !*** ./src/pages/feed/services/feed/feed.service.ts ***!
  \******************************************************/
/*! exports provided: FeedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedService", function() { return FeedService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/pages/auth/services/auth/auth.service */ "./src/pages/auth/services/auth/auth.service.ts");
/* harmony import */ var src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/shared/helpers/extender */ "./src/shared/helpers/extender.ts");
/* harmony import */ var src_shared_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/shared/services/firestore/firestore.service */ "./src/shared/services/firestore/firestore.service.ts");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_8__);









/**
 * crud methods to interact with firebase cloud store regarding feed posts
 */
var FeedService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](FeedService, _super);
    function FeedService(injector, authService, firestoreService) {
        var _this = _super.call(this, injector) || this;
        _this.injector = injector;
        _this.authService = authService;
        _this.firestoreService = firestoreService;
        _this.feed = [];
        return _this;
    }
    Object.defineProperty(FeedService.prototype, "views", {
        get: function () {
            return [
                {
                    id: 1,
                    icon: 'albums',
                    name: this.translate.instant('feed-component.minimal'),
                    active: true
                },
                {
                    id: 2,
                    icon: 'paper',
                    name: this.translate.instant('feed-component.timeline')
                },
                {
                    id: 3,
                    icon: 'browsers',
                    name: this.translate.instant('feed-component.showcase')
                },
                {
                    id: 4,
                    icon: 'cube',
                    name: this.translate.instant('feed-component.modern')
                }
            ];
        },
        enumerable: true,
        configurable: true
    });
    /** get feed from fire base cloud store, set default likes and comments array to empty array if not already set */
    FeedService.prototype.getFeed = function (uid) {
        var _this = this;
        return this.firestoreService
            .colWithIds$("feed", function (ref) { return ref.orderBy('createdAt', 'desc').limit(50); })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (_feed) {
            var reads = [];
            _this.feed = _feed.map(function (item) {
                item.likes = !item.likes ? [] : item.likes;
                item.comments = !item.comments ? [] : item.comments;
                return item;
            });
            _this.feed.forEach(function (item) {
                reads.push(_this.firestoreService.doc$("users/" + item.uid));
            });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])(reads);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            return (_this.feed = _this.feed.map(function (item, index) {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, item, { userLiked: item.likes && Object(util__WEBPACK_IMPORTED_MODULE_8__["isArray"])(item.likes) ? item.likes.includes(uid) : false, user: data[index] || null });
            }));
        }));
    };
    FeedService.prototype.getUserFeed = function (uid) {
        return this.firestoreService.colWithIds$("feed", function (ref) { return ref.where('uid', '==', uid); });
    };
    /** get a single post from feed collection in firestore and join its user and comments */
    FeedService.prototype.getPost = function (pid, uid) {
        var _this = this;
        var feed;
        return this.firestoreService.doc$("feed/" + pid).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (_feed) {
            _feed.likes = !_feed.likes ? [] : _feed.likes;
            _feed.comments = !_feed.comments ? [] : _feed.comments;
            feed = _feed;
            var docs = [];
            docs.push(_this.firestoreService.doc$("users/" + feed.uid));
            docs.push(_this.firestoreService.colWithIds$("feed/" + pid + "/comments", function (ref) { return ref.where('fid', '==', feed.id); }));
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])(docs);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (arr) {
            var joins = ['user', 'comments'].reduce(function (acc, cur, idx) {
                var _a;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, acc, (_a = {}, _a[cur] = arr[idx], _a));
            }, {});
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, feed, joins, { userLiked: feed.likes && Object(util__WEBPACK_IMPORTED_MODULE_8__["isArray"])(feed.likes) ? feed.likes.includes(uid) : false });
        }));
    };
    FeedService.prototype.searchFeed = function (val) {
        var feed = this.feed.slice();
        if (val && val.trim() !== '') {
            return feed.filter(function (item) {
                return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
                    item.subtitle.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
                    item.content.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
                    item.user.displayName.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
        else {
            return this.feed;
        }
    };
    FeedService.prototype.upsertPost = function (post) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.firestoreService.set("feed/" + post.id, post)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    FeedService.prototype.delete = function (post) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.firestoreService.delete("feed/" + post.id)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    FeedService.prototype.getComments = function (fid, uid) {
        var _this = this;
        return this.firestoreService
            .colWithIds$("feed/" + fid + "/comments", function (ref) { return ref.limit(20); })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (_comment) {
            var reads = [];
            _this.comments = _comment;
            if (_this.comments.length > 0) {
                _this.comments.forEach(function (item) {
                    reads.push(_this.firestoreService.doc$("users/" + item.uid));
                });
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])(reads);
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])([]);
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            return (_this.comments = _this.comments.map(function (item, index) {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, item, { user: data[index] || null });
            }));
        }));
    };
    FeedService.prototype.searchComments = function (val) {
        var comments = this.comments.slice();
        if (val && val.trim() !== '') {
            return comments.filter(function (item) {
                return (item.text.toLowerCase().indexOf(val.toLowerCase()) > -1 || item.user.displayName.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
        else {
            return this.comments;
        }
    };
    FeedService.prototype.upsertComment = function (comment) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!comment.id) {
                            comment.id = this.firestoreService.createId();
                        }
                        if (comment.user) {
                            delete comment.user;
                        }
                        return [4 /*yield*/, this.firestoreService.set("feed/" + comment.fid + "/comments/" + comment.id, comment)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this.firestoreService.update("feed/" + comment.fid, {
                                comments: firebase_app__WEBPACK_IMPORTED_MODULE_2__["firestore"].FieldValue.arrayUnion(comment.id)
                            })];
                }
            });
        });
    };
    FeedService.prototype.deleteComment = function (comment) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.firestoreService.delete("feed/" + comment.fid + "/comments/" + comment.id)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this.firestoreService.update("feed/" + comment.fid, {
                                comments: firebase_app__WEBPACK_IMPORTED_MODULE_2__["firestore"].FieldValue.arrayRemove(comment.id)
                            })];
                }
            });
        });
    };
    FeedService.prototype.like = function (feed) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var uid;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authService.getUser()];
                    case 1:
                        uid = (_a.sent()).uid;
                        if (!feed.userLiked) {
                            this.firestoreService.update("feed/" + feed.id, {
                                likes: firebase_app__WEBPACK_IMPORTED_MODULE_2__["firestore"].FieldValue.arrayUnion(uid)
                            });
                        }
                        else {
                            this.firestoreService.update("feed/" + feed.id, {
                                likes: firebase_app__WEBPACK_IMPORTED_MODULE_2__["firestore"].FieldValue.arrayRemove(uid)
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    FeedService.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
        { type: src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
        { type: src_shared_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_7__["FirestoreService"] }
    ]; };
    FeedService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], src_shared_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_7__["FirestoreService"]])
    ], FeedService);
    return FeedService;
}(src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_6__["Extender"]));



/***/ })

}]);
//# sourceMappingURL=default~pages-feed-feed-module~pages-profile-profile-module-es5.js.map