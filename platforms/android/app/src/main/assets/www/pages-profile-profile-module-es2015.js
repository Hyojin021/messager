(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-profile-profile-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/pages/profile/components/profile/profile.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/pages/profile/components/profile/profile.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-toolbar>\n  <ion-buttons slot=\"start\">\n    <ion-menu-button size=\"small\" autoHide=\"true\"></ion-menu-button>\n  </ion-buttons>\n</ion-toolbar>\n\n<ion-content scrollX=\"false\" scrollY=\"false\">\n  <div class=\"content-wrapper\">\n    <div class=\"header no-border has-toolbar\">\n      <div class=\"title\">\n        {{ 'profile-component.title' | translate }}\n      </div>\n      <div class=\"options\">\n        <ion-button fill=\"clear\" size=\"small\" color=\"medium\" (click)=\"more()\">\n          <ion-icon mode=\"md\" name=\"more\"></ion-icon>\n        </ion-button>\n      </div>\n    </div>\n\n    <ng-container *ngIf=\"user\">\n      <div class=\"profile-header\">\n        <div class=\"image\" [image-loader]=\"user.photoURL\" preview=\"true\"></div>\n        <div class=\"detail\">\n          <div class=\"title\">{{ user.displayName }}</div>\n          <div class=\"status-msg\">{{ (user.statusMessage | slice: 0:50) || 'I am available on full starter app' }}</div>\n          <div class=\"country\" *ngIf=\"user.country\">{{ user.country }}</div>\n        </div>\n      </div>\n      <div class=\"profile-menu\">\n        <div class=\"menu-item\" [ngClass]=\"{ active: selectedView === item.id }\" *ngFor=\"let item of views\" (click)=\"selectedView = item.id\">\n          <strong>{{ item.value }}</strong>\n          <span>{{ item.name }}</span>\n        </div>\n        <ion-button size=\"small\" shape=\"round\">Logout</ion-button>\n      </div>\n      <div class=\"profile-content\">\n        <ng-container [ngSwitch]=\"selectedView\">\n          <ng-container *ngSwitchCase=\"1\">\n            <app-user-people></app-user-people>\n          </ng-container>\n          <ng-container *ngSwitchCase=\"2\">\n            <app-user-people following=\"true\"></app-user-people>\n          </ng-container>\n          <ng-container *ngSwitchDefault>\n            <app-user-posts></app-user-posts>\n          </ng-container>\n        </ng-container>\n      </div>\n    </ng-container>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/pages/profile/components/user-people/user-people.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/pages/profile/components/user-people/user-people.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-simple-item *ngFor=\"let item of friends\">\n  <div class=\"img\" prefix [image-loader]=\"item.photoURL\"></div>\n  <div class=\"detail\">\n    <div class=\"name\">{{ item.displayName }}</div>\n    <div class=\"city\" *ngIf=\"item.town\">{{ item.town }}</div>\n    <div class=\"country\" *ngIf=\"item.country\">{{ item.country }}</div>\n  </div>\n\n  <!-- show if not following -->\n  <ion-button suffix size=\"small\" *ngIf=\"following && !isFriend(item.uid)\" class=\"follow\" (click)=\"manage()\">{{\n    'person-component.follow' | translate\n  }}</ion-button>\n\n  <!-- call user with hidden a tag -->\n  <a hidden #callNumber href=\"tel:+{{ item.mobile || item.phone }}\"></a>\n</app-simple-item>\n<app-spinner *ngIf=\"loading\"></app-spinner>\n<app-no-data *ngIf=\"friends.length === 0\"></app-no-data>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/pages/profile/components/user-posts/user-posts.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/pages/profile/components/user-posts/user-posts.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <div class=\"image\" [image-loader]=\"post\" *ngFor=\"let post of posts\" (click)=\"open(post)\"></div>\n</div>\n<app-spinner *ngIf=\"loading\"></app-spinner>\n<app-no-data *ngIf=\"posts.length === 0\"></app-no-data>\n"

/***/ }),

/***/ "./src/pages/profile/components/profile/profile.component.scss":
/*!*********************************************************************!*\
  !*** ./src/pages/profile/components/profile/profile.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .content-wrapper .profile-header {\n  display: -webkit-box;\n  display: flex;\n  padding: 10px 20px;\n}\n:host .content-wrapper .profile-header .image {\n  width: 80px;\n  height: 80px;\n  border-radius: 4px;\n  box-shadow: 1px 2px 12px 2px var(--ion-color-light-shade);\n}\n:host .content-wrapper .profile-header .detail {\n  margin-left: 15px;\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n:host .content-wrapper .profile-header .detail .title {\n  font-size: 16px;\n  margin: 5px 0;\n}\n:host .content-wrapper .profile-header .detail .status-msg,\n:host .content-wrapper .profile-header .detail .country {\n  font-size: 13px;\n  color: var(--ion-color-medium);\n  margin: 5px 0;\n}\n:host .content-wrapper .profile-menu {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  padding: 10px 20px;\n  margin: 5px 0;\n  border-top: 1px solid var(--ion-color-light-shade);\n  border-bottom: 1px solid var(--ion-color-light-shade);\n}\n:host .content-wrapper .profile-menu .menu-item {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n:host .content-wrapper .profile-menu .menu-item.active {\n  color: var(--ion-color-primary);\n}\n:host .content-wrapper .profile-menu .menu-item.active span {\n  color: var(--ion-color-primary);\n}\n:host .content-wrapper .profile-menu .menu-item strong {\n  font-size: 16px;\n}\n:host .content-wrapper .profile-menu .menu-item span {\n  color: var(--ion-color-medium);\n  font-size: 12px;\n}\n:host .content-wrapper .profile-content {\n  padding: 5px 15px;\n  overflow: auto;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  height: calc(60% - 0px);\n}\n:host .content-wrapper .profile-content .title {\n  font-size: 16px;\n  font-weight: 700;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wYWdlcy9wcm9maWxlL2NvbXBvbmVudHMvcHJvZmlsZS9DOlxcVXNlcnNcXGRkNDI0XFxkZXNrdG9wXFxEZXZlbG9wXFxlenlhcHBzX3VrLWNvbXBsZXRlLWZpcmUtc3RhcnRlci1jNjI4ZDNmYzFmZGUvc3JjXFxwYWdlc1xccHJvZmlsZVxcY29tcG9uZW50c1xccHJvZmlsZVxccHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNyYy9wYWdlcy9wcm9maWxlL2NvbXBvbmVudHMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0Esa0JBQUE7QUNETjtBREVNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlEQUFBO0FDQVI7QURFTTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7VUFBQSxPQUFBO0FDQVI7QURDUTtFQUNFLGVBQUE7RUFDQSxhQUFBO0FDQ1Y7QURDUTs7RUFFRSxlQUFBO0VBQ0EsOEJBQUE7RUFDQSxhQUFBO0FDQ1Y7QURHSTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxrREFBQTtFQUNBLHFEQUFBO0FDRE47QURFTTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtBQ0FSO0FEQ1E7RUFDRSwrQkFBQTtBQ0NWO0FEQVU7RUFDRSwrQkFBQTtBQ0VaO0FEQ1E7RUFDRSxlQUFBO0FDQ1Y7QURDUTtFQUNFLDhCQUFBO0VBQ0EsZUFBQTtBQ0NWO0FER0k7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSx1QkFBQTtBQ0ROO0FERU07RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUNBUiIsImZpbGUiOiJzcmMvcGFnZXMvcHJvZmlsZS9jb21wb25lbnRzL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgLmNvbnRlbnQtd3JhcHBlciB7XG4gICAgLnByb2ZpbGUtaGVhZGVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgICAuaW1hZ2Uge1xuICAgICAgICB3aWR0aDogODBweDtcbiAgICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgIGJveC1zaGFkb3c6IDFweCAycHggMTJweCAycHggdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcbiAgICAgIH1cbiAgICAgIC5kZXRhaWwge1xuICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICAgICAgZmxleDogMTtcbiAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgbWFyZ2luOiA1cHggMDtcbiAgICAgICAgfVxuICAgICAgICAuc3RhdHVzLW1zZyxcbiAgICAgICAgLmNvdW50cnkge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgICAgICAgbWFyZ2luOiA1cHggMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAucHJvZmlsZS1tZW51IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgICBtYXJnaW46IDVweCAwO1xuICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcbiAgICAgIC5tZW51LWl0ZW0ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAmLmFjdGl2ZSB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHN0cm9uZyB7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICB9XG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLnByb2ZpbGUtY29udGVudCB7XG4gICAgICBwYWRkaW5nOiA1cHggMTVweDtcbiAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBoZWlnaHQ6IGNhbGMoNjAlIC0gMHB4KTtcbiAgICAgIC50aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIjpob3N0IC5jb250ZW50LXdyYXBwZXIgLnByb2ZpbGUtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xufVxuOmhvc3QgLmNvbnRlbnQtd3JhcHBlciAucHJvZmlsZS1oZWFkZXIgLmltYWdlIHtcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogODBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2hhZG93OiAxcHggMnB4IDEycHggMnB4IHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XG59XG46aG9zdCAuY29udGVudC13cmFwcGVyIC5wcm9maWxlLWhlYWRlciAuZGV0YWlsIHtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIGZsZXg6IDE7XG59XG46aG9zdCAuY29udGVudC13cmFwcGVyIC5wcm9maWxlLWhlYWRlciAuZGV0YWlsIC50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luOiA1cHggMDtcbn1cbjpob3N0IC5jb250ZW50LXdyYXBwZXIgLnByb2ZpbGUtaGVhZGVyIC5kZXRhaWwgLnN0YXR1cy1tc2csXG46aG9zdCAuY29udGVudC13cmFwcGVyIC5wcm9maWxlLWhlYWRlciAuZGV0YWlsIC5jb3VudHJ5IHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gIG1hcmdpbjogNXB4IDA7XG59XG46aG9zdCAuY29udGVudC13cmFwcGVyIC5wcm9maWxlLW1lbnUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgbWFyZ2luOiA1cHggMDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xufVxuOmhvc3QgLmNvbnRlbnQtd3JhcHBlciAucHJvZmlsZS1tZW51IC5tZW51LWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuOmhvc3QgLmNvbnRlbnQtd3JhcHBlciAucHJvZmlsZS1tZW51IC5tZW51LWl0ZW0uYWN0aXZlIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cbjpob3N0IC5jb250ZW50LXdyYXBwZXIgLnByb2ZpbGUtbWVudSAubWVudS1pdGVtLmFjdGl2ZSBzcGFuIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cbjpob3N0IC5jb250ZW50LXdyYXBwZXIgLnByb2ZpbGUtbWVudSAubWVudS1pdGVtIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbjpob3N0IC5jb250ZW50LXdyYXBwZXIgLnByb2ZpbGUtbWVudSAubWVudS1pdGVtIHNwYW4ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbjpob3N0IC5jb250ZW50LXdyYXBwZXIgLnByb2ZpbGUtY29udGVudCB7XG4gIHBhZGRpbmc6IDVweCAxNXB4O1xuICBvdmVyZmxvdzogYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiBjYWxjKDYwJSAtIDBweCk7XG59XG46aG9zdCAuY29udGVudC13cmFwcGVyIC5wcm9maWxlLWNvbnRlbnQgLnRpdGxlIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNzAwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/pages/profile/components/profile/profile.component.ts":
/*!*******************************************************************!*\
  !*** ./src/pages/profile/components/profile/profile.component.ts ***!
  \*******************************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/pages/auth/services/auth/auth.service */ "./src/pages/auth/services/auth/auth.service.ts");
/* harmony import */ var src_pages_feed_services_feed_feed_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/pages/feed/services/feed/feed.service */ "./src/pages/feed/services/feed/feed.service.ts");
/* harmony import */ var src_pages_people_services_people_people_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/pages/people/services/people/people.service */ "./src/pages/people/services/people/people.service.ts");
/* harmony import */ var src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/shared/helpers/extender */ "./src/shared/helpers/extender.ts");
/* harmony import */ var src_shared_modals_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/shared/modals/edit-profile/edit-profile.component */ "./src/shared/modals/edit-profile/edit-profile.component.ts");







/**
 * view users details and their posts, followers and friends
 */
let ProfileComponent = class ProfileComponent extends src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_5__["Extender"] {
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
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.user = yield this.authService.getUser();
        });
    }
    /** get user and user details such as feed, friends and followers */
    ionViewDidEnter() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
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
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
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
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.openModal(src_shared_modals_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_6__["EditProfileComponent"], this.user);
            modal.present();
        });
    }
};
ProfileComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: src_pages_feed_services_feed_feed_service__WEBPACK_IMPORTED_MODULE_3__["FeedService"] },
    { type: src_pages_people_services_people_people_service__WEBPACK_IMPORTED_MODULE_4__["PeopleService"] }
];
ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/index.js!./src/pages/profile/components/profile/profile.component.html"),
        styles: [__webpack_require__(/*! ./profile.component.scss */ "./src/pages/profile/components/profile/profile.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
        src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
        src_pages_feed_services_feed_feed_service__WEBPACK_IMPORTED_MODULE_3__["FeedService"],
        src_pages_people_services_people_people_service__WEBPACK_IMPORTED_MODULE_4__["PeopleService"]])
], ProfileComponent);



/***/ }),

/***/ "./src/pages/profile/components/user-people/user-people.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/pages/profile/components/user-people/user-people.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  height: 100%;\n}\n:host app-simple-item {\n  padding: 5px 10px;\n  margin: 10px 0;\n  -webkit-box-align: center;\n          align-items: center;\n}\n:host app-simple-item .img {\n  width: 60px;\n  height: 60px;\n  border-radius: 4px;\n  box-shadow: 1px 2px 12px var(--ion-color-light-shade);\n}\n:host app-simple-item .detail .name {\n  font-size: 14px;\n  font-weight: 500;\n  padding: 0 0 4px 0;\n}\n:host app-simple-item .detail .job {\n  font-size: 11px;\n  font-weight: 400;\n  color: var(--ion-color-medium-shade);\n  margin-bottom: 2px;\n}\n:host app-simple-item .detail .city,\n:host app-simple-item .detail .country {\n  font-size: 11px;\n  font-weight: 400;\n  color: var(--ion-color-medium-shade);\n}\n:host app-simple-item .detail .country {\n  color: var(--ion-color-primary-shade);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wYWdlcy9wcm9maWxlL2NvbXBvbmVudHMvdXNlci1wZW9wbGUvQzpcXFVzZXJzXFxkZDQyNFxcZGVza3RvcFxcRGV2ZWxvcFxcZXp5YXBwc191ay1jb21wbGV0ZS1maXJlLXN0YXJ0ZXItYzYyOGQzZmMxZmRlL3NyY1xccGFnZXNcXHByb2ZpbGVcXGNvbXBvbmVudHNcXHVzZXItcGVvcGxlXFx1c2VyLXBlb3BsZS5jb21wb25lbnQuc2NzcyIsInNyYy9wYWdlcy9wcm9maWxlL2NvbXBvbmVudHMvdXNlci1wZW9wbGUvdXNlci1wZW9wbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FDQ0Y7QURBRTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNFSjtBRERJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHFEQUFBO0FDR047QURBTTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDRVI7QURDTTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7QUNDUjtBREVNOztFQUVFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG9DQUFBO0FDQVI7QURHTTtFQUNFLHFDQUFBO0FDRFIiLCJmaWxlIjoic3JjL3BhZ2VzL3Byb2ZpbGUvY29tcG9uZW50cy91c2VyLXBlb3BsZS91c2VyLXBlb3BsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBhcHAtc2ltcGxlLWl0ZW0ge1xuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgIG1hcmdpbjogMTBweCAwO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLmltZyB7XG4gICAgICB3aWR0aDogNjBweDtcbiAgICAgIGhlaWdodDogNjBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgIGJveC1zaGFkb3c6IDFweCAycHggMTJweCB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xuICAgIH1cbiAgICAuZGV0YWlsIHtcbiAgICAgIC5uYW1lIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBwYWRkaW5nOiAwIDAgNHB4IDA7XG4gICAgICB9XG5cbiAgICAgIC5qb2Ige1xuICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICAgICAgfVxuXG4gICAgICAuY2l0eSxcbiAgICAgIC5jb3VudHJ5IHtcbiAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG4gICAgICB9XG5cbiAgICAgIC5jb3VudHJ5IHtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXNoYWRlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIjpob3N0IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuOmhvc3QgYXBwLXNpbXBsZS1pdGVtIHtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIG1hcmdpbjogMTBweCAwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuOmhvc3QgYXBwLXNpbXBsZS1pdGVtIC5pbWcge1xuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaGFkb3c6IDFweCAycHggMTJweCB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xufVxuOmhvc3QgYXBwLXNpbXBsZS1pdGVtIC5kZXRhaWwgLm5hbWUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHBhZGRpbmc6IDAgMCA0cHggMDtcbn1cbjpob3N0IGFwcC1zaW1wbGUtaXRlbSAuZGV0YWlsIC5qb2Ige1xuICBmb250LXNpemU6IDExcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xufVxuOmhvc3QgYXBwLXNpbXBsZS1pdGVtIC5kZXRhaWwgLmNpdHksXG46aG9zdCBhcHAtc2ltcGxlLWl0ZW0gLmRldGFpbCAuY291bnRyeSB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xufVxuOmhvc3QgYXBwLXNpbXBsZS1pdGVtIC5kZXRhaWwgLmNvdW50cnkge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktc2hhZGUpO1xufSJdfQ== */"

/***/ }),

/***/ "./src/pages/profile/components/user-people/user-people.component.ts":
/*!***************************************************************************!*\
  !*** ./src/pages/profile/components/user-people/user-people.component.ts ***!
  \***************************************************************************/
/*! exports provided: UserPeopleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPeopleComponent", function() { return UserPeopleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/pages/auth/services/auth/auth.service */ "./src/pages/auth/services/auth/auth.service.ts");
/* harmony import */ var src_pages_messages_services_messages_messages_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/pages/messages/services/messages/messages.service */ "./src/pages/messages/services/messages/messages.service.ts");
/* harmony import */ var src_pages_people_services_people_people_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/pages/people/services/people/people.service */ "./src/pages/people/services/people/people.service.ts");
/* harmony import */ var src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/shared/helpers/extender */ "./src/shared/helpers/extender.ts");
/* harmony import */ var src_shared_services_common_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/shared/services/common/common.service */ "./src/shared/services/common/common.service.ts");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_7__);








/**
 * toggle to get either users followers or friends by toggling following input property
 * list users
 */
let UserPeopleComponent = class UserPeopleComponent extends src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_5__["Extender"] {
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
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
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
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.commonService.callUser(this.user.mobile || this.user.phone, this.callNumber);
            this.closeModal();
        });
    }
    /** start chat with user */
    chat() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.messageService.startChat(this.user);
            this.closeModal();
        });
    }
    /** share user */
    share() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const url = `people?id=${this.user.uid}`;
            yield this.commonService.share(this.user.displayName, this.user.email, this.user.photoURL, url);
            this.closeModal();
        });
    }
    /** check if user is a friends  */
    isFriend(fid) {
        return Object(util__WEBPACK_IMPORTED_MODULE_7__["isArray"])(this.friends) && this.friendsIds.includes(fid);
    }
    /** check if user is a friend and follow or unfollow depending on if they are already your friend or not */
    manage() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.peopleService.friends.includes(this.user.uid)) {
                yield this.peopleService.unfollow(this.user.uid);
            }
            else {
                yield this.peopleService.follow(this.user.uid);
            }
        });
    }
};
UserPeopleComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: src_shared_services_common_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"] },
    { type: src_pages_messages_services_messages_messages_service__WEBPACK_IMPORTED_MODULE_3__["MessagesService"] },
    { type: src_pages_people_services_people_people_service__WEBPACK_IMPORTED_MODULE_4__["PeopleService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], UserPeopleComponent.prototype, "following", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('callNumber', null),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], UserPeopleComponent.prototype, "callNumber", void 0);
UserPeopleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-people',
        template: __webpack_require__(/*! raw-loader!./user-people.component.html */ "./node_modules/raw-loader/index.js!./src/pages/profile/components/user-people/user-people.component.html"),
        styles: [__webpack_require__(/*! ./user-people.component.scss */ "./src/pages/profile/components/user-people/user-people.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
        src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
        src_shared_services_common_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"],
        src_pages_messages_services_messages_messages_service__WEBPACK_IMPORTED_MODULE_3__["MessagesService"],
        src_pages_people_services_people_people_service__WEBPACK_IMPORTED_MODULE_4__["PeopleService"]])
], UserPeopleComponent);



/***/ }),

/***/ "./src/pages/profile/components/user-posts/user-posts.component.scss":
/*!***************************************************************************!*\
  !*** ./src/pages/profile/components/user-posts/user-posts.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  height: 100%;\n}\n:host .wrapper {\n  display: grid;\n  grid-template-columns: auto auto auto;\n  grid-gap: 10px;\n}\n:host .image {\n  background-color: var(--ion-color-medium);\n  border-radius: 5px;\n  padding: 20px;\n  height: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wYWdlcy9wcm9maWxlL2NvbXBvbmVudHMvdXNlci1wb3N0cy9DOlxcVXNlcnNcXGRkNDI0XFxkZXNrdG9wXFxEZXZlbG9wXFxlenlhcHBzX3VrLWNvbXBsZXRlLWZpcmUtc3RhcnRlci1jNjI4ZDNmYzFmZGUvc3JjXFxwYWdlc1xccHJvZmlsZVxcY29tcG9uZW50c1xcdXNlci1wb3N0c1xcdXNlci1wb3N0cy5jb21wb25lbnQuc2NzcyIsInNyYy9wYWdlcy9wcm9maWxlL2NvbXBvbmVudHMvdXNlci1wb3N0cy91c2VyLXBvc3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQ0NGO0FEQUU7RUFDRSxhQUFBO0VBQ0EscUNBQUE7RUFDQSxjQUFBO0FDRUo7QURDRTtFQUNFLHlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9wYWdlcy9wcm9maWxlL2NvbXBvbmVudHMvdXNlci1wb3N0cy91c2VyLXBvc3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBoZWlnaHQ6IDEwMCU7XG4gIC53cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvIGF1dG87XG4gICAgZ3JpZC1nYXA6IDEwcHg7XG4gIH1cblxuICAuaW1hZ2Uge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGhlaWdodDogMTAwcHg7XG4gIH1cbn1cbiIsIjpob3N0IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuOmhvc3QgLndyYXBwZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0byBhdXRvO1xuICBncmlkLWdhcDogMTBweDtcbn1cbjpob3N0IC5pbWFnZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGhlaWdodDogMTAwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/pages/profile/components/user-posts/user-posts.component.ts":
/*!*************************************************************************!*\
  !*** ./src/pages/profile/components/user-posts/user-posts.component.ts ***!
  \*************************************************************************/
/*! exports provided: UserPostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPostsComponent", function() { return UserPostsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/pages/auth/services/auth/auth.service */ "./src/pages/auth/services/auth/auth.service.ts");
/* harmony import */ var src_pages_feed_services_feed_feed_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/pages/feed/services/feed/feed.service */ "./src/pages/feed/services/feed/feed.service.ts");
/* harmony import */ var src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/shared/helpers/extender */ "./src/shared/helpers/extender.ts");
/* harmony import */ var src_shared_modals_image_preview_image_preview_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/shared/modals/image-preview/image-preview.component */ "./src/shared/modals/image-preview/image-preview.component.ts");






/**
 * get users posts images and list them in a gallery format
 */
let UserPostsComponent = class UserPostsComponent extends src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_4__["Extender"] {
    constructor(injector, authService, feedService) {
        super(injector);
        this.injector = injector;
        this.authService = authService;
        this.feedService = feedService;
        this.posts = [];
    }
    /** get user feed and extract images into one array */
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const { uid } = yield this.authService.getUser();
            this.loading = true;
            this.subscriptions.push(this.feedService.getUserFeed(uid).subscribe((feed) => {
                this.loading = false;
                this.posts = [].concat.apply([], feed.map((post) => post.images));
            }));
        });
    }
    /** open image preview */
    open(image) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.openModal(src_shared_modals_image_preview_image_preview_component__WEBPACK_IMPORTED_MODULE_5__["ImagePreviewComponent"], image, 'custom-modal');
            modal.present();
        });
    }
};
UserPostsComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: src_pages_feed_services_feed_feed_service__WEBPACK_IMPORTED_MODULE_3__["FeedService"] }
];
UserPostsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-posts',
        template: __webpack_require__(/*! raw-loader!./user-posts.component.html */ "./node_modules/raw-loader/index.js!./src/pages/profile/components/user-posts/user-posts.component.html"),
        styles: [__webpack_require__(/*! ./user-posts.component.scss */ "./src/pages/profile/components/user-posts/user-posts.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], src_pages_feed_services_feed_feed_service__WEBPACK_IMPORTED_MODULE_3__["FeedService"]])
], UserPostsComponent);



/***/ }),

/***/ "./src/pages/profile/profile.module.ts":
/*!*********************************************!*\
  !*** ./src/pages/profile/profile.module.ts ***!
  \*********************************************/
/*! exports provided: ProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileModule", function() { return ProfileModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/shared/shared.module */ "./src/shared/shared.module.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/pages/profile/components/profile/profile.component.ts");
/* harmony import */ var _components_user_people_user_people_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/user-people/user-people.component */ "./src/pages/profile/components/user-people/user-people.component.ts");
/* harmony import */ var _components_user_posts_user_posts_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/user-posts/user-posts.component */ "./src/pages/profile/components/user-posts/user-posts.component.ts");








let ProfileModule = class ProfileModule {
};
ProfileModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_components_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"], _components_user_posts_user_posts_component__WEBPACK_IMPORTED_MODULE_7__["UserPostsComponent"], _components_user_people_user_people_component__WEBPACK_IMPORTED_MODULE_6__["UserPeopleComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            src_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                {
                    path: '',
                    component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"],
                },
            ]),
        ],
    })
], ProfileModule);



/***/ })

}]);
//# sourceMappingURL=pages-profile-profile-module-es2015.js.map