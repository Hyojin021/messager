(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-setting-setting-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/pages/setting/components/setting/setting.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/pages/setting/components/setting/setting.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-toolbar>\n  <ion-buttons slot=\"start\">\n    <ion-menu-button size=\"small\"\n      autoHide=\"true\"></ion-menu-button>\n  </ion-buttons>\n</ion-toolbar>\n\n<ion-content scrollX=\"false\"\n  scrollY=\"false\">\n  <div class=\"content-wrapper\">\n    <div class=\"header no-border has-toolbar\">\n      <div class=\"title\">\n        {{'setting-component.title' | translate}}\n      </div>\n    </div>\n\n    <div class=\"wrapper\"\n      *ngIf=\"currentUser\">\n      <div class=\"content-scroll\">\n\n        <app-accordion #accordion>\n          <app-panel *ngFor=\"let settingOption of settingOptions\"\n            [open]=\"settingOption.open\"\n            title=\"{{ settingOption.title }}\"\n            color=\"dark\">\n            <app-simple-item *ngFor=\"let item of settingOption.items\"\n              (click)=\"!item.checkbox ? item.event(setting) : null\">\n              <div class=\"img\"\n                prefix\n                [image-loader]=\"item.icon\"></div>\n              <strong>{{ item.text }}</strong>\n              <p>{{item.description}}</p>\n\n              <ion-icon *ngIf=\"item.checkbox\"\n                suffix\n                [src]=\"item.selected ? 'assets/icons/check-square.svg' : 'assets/icons/square.svg'\"\n                color=\"primary\"\n                (click)=\"item.selected = !item.selected; item.event(item.selected)\">\n              </ion-icon>\n            </app-simple-item>\n          </app-panel>\n        </app-accordion>\n\n        <ion-button expand=\"block\"\n          shape=\"round\"\n          (click)=\"save()\">\n          {{'setting-component.save-button' | translate}}\n        </ion-button>\n\n        <ion-button expand=\"block\"\n          shape=\"round\"\n          color=\"danger\"\n          (click)=\"signOut()\">\n          {{'setting-component.logout-button' | translate}}\n        </ion-button>\n\n      </div>\n    </div>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/pages/setting/components/setting/setting.component.scss":
/*!*********************************************************************!*\
  !*** ./src/pages/setting/components/setting/setting.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .content-wrapper .wrapper {\n  display: -webkit-box;\n  display: flex;\n  height: 100%;\n}\n:host .content-wrapper .wrapper .content-scroll {\n  height: calc(100% - 90px) !important;\n  width: 100%;\n  padding: 0 15px;\n}\n:host .content-wrapper .wrapper .content-scroll app-panel ::ng-deep .title {\n  padding: 10px 0;\n  font-size: 18px;\n  font-weight: 500;\n}\n:host .content-wrapper .wrapper .content-scroll app-panel app-simple-item {\n  -webkit-box-align: center;\n          align-items: center;\n  margin: 10px 0;\n}\n:host .content-wrapper .wrapper .content-scroll app-panel app-simple-item .img {\n  width: 20px;\n  max-width: 20px;\n  margin: 0 10px;\n  height: 20px;\n}\n:host .content-wrapper .wrapper .content-scroll app-panel app-simple-item ion-icon {\n  padding: 0 10px;\n}\n:host .content-wrapper .wrapper .content-scroll app-panel app-simple-item strong {\n  font-size: 14px;\n}\n:host .content-wrapper .wrapper .content-scroll app-panel app-simple-item p {\n  margin: 0;\n  font-size: 11px;\n  color: var(--ion-color-medium);\n}\n:host .content-wrapper .wrapper .content-scroll ion-button {\n  margin: 10px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wYWdlcy9zZXR0aW5nL2NvbXBvbmVudHMvc2V0dGluZy9DOlxcVXNlcnNcXGRkNDI0XFxkZXNrdG9wXFxEZXZlbG9wXFxlenlhcHBzX3VrLWNvbXBsZXRlLWZpcmUtc3RhcnRlci1jNjI4ZDNmYzFmZGUvc3JjXFxwYWdlc1xcc2V0dGluZ1xcY29tcG9uZW50c1xcc2V0dGluZ1xcc2V0dGluZy5jb21wb25lbnQuc2NzcyIsInNyYy9wYWdlcy9zZXR0aW5nL2NvbXBvbmVudHMvc2V0dGluZy9zZXR0aW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsWUFBQTtBQ0ROO0FER007RUFDRSxvQ0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDRFI7QURJWTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNGZDtBRE1VO0VBQ0UseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGNBQUE7QUNKWjtBRE1ZO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQ0pkO0FET1k7RUFDRSxlQUFBO0FDTGQ7QURRWTtFQUNFLGVBQUE7QUNOZDtBRFFZO0VBQ0UsU0FBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtBQ05kO0FEVVE7RUFDRSxjQUFBO0FDUlYiLCJmaWxlIjoic3JjL3BhZ2VzL3NldHRpbmcvY29tcG9uZW50cy9zZXR0aW5nL3NldHRpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIC5jb250ZW50LXdyYXBwZXIge1xuICAgIC53cmFwcGVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICAgIC5jb250ZW50LXNjcm9sbCB7XG4gICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gOTBweCkgIWltcG9ydGFudDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmc6IDAgMTVweDtcbiAgICAgICAgYXBwLXBhbmVsIHtcbiAgICAgICAgICA6Om5nLWRlZXAge1xuICAgICAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAwO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYXBwLXNpbXBsZS1pdGVtIHtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBtYXJnaW46IDEwcHggMDtcblxuICAgICAgICAgICAgLmltZyB7XG4gICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICAgICAgICBtYXgtd2lkdGg6IDIwcHg7XG4gICAgICAgICAgICAgIG1hcmdpbjogMCAxMHB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgICAgcGFkZGluZzogMCAxMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzdHJvbmcge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIjpob3N0IC5jb250ZW50LXdyYXBwZXIgLndyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDEwMCU7XG59XG46aG9zdCAuY29udGVudC13cmFwcGVyIC53cmFwcGVyIC5jb250ZW50LXNjcm9sbCB7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gOTBweCkgIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDAgMTVweDtcbn1cbjpob3N0IC5jb250ZW50LXdyYXBwZXIgLndyYXBwZXIgLmNvbnRlbnQtc2Nyb2xsIGFwcC1wYW5lbCA6Om5nLWRlZXAgLnRpdGxlIHtcbiAgcGFkZGluZzogMTBweCAwO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG46aG9zdCAuY29udGVudC13cmFwcGVyIC53cmFwcGVyIC5jb250ZW50LXNjcm9sbCBhcHAtcGFuZWwgYXBwLXNpbXBsZS1pdGVtIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAxMHB4IDA7XG59XG46aG9zdCAuY29udGVudC13cmFwcGVyIC53cmFwcGVyIC5jb250ZW50LXNjcm9sbCBhcHAtcGFuZWwgYXBwLXNpbXBsZS1pdGVtIC5pbWcge1xuICB3aWR0aDogMjBweDtcbiAgbWF4LXdpZHRoOiAyMHB4O1xuICBtYXJnaW46IDAgMTBweDtcbiAgaGVpZ2h0OiAyMHB4O1xufVxuOmhvc3QgLmNvbnRlbnQtd3JhcHBlciAud3JhcHBlciAuY29udGVudC1zY3JvbGwgYXBwLXBhbmVsIGFwcC1zaW1wbGUtaXRlbSBpb24taWNvbiB7XG4gIHBhZGRpbmc6IDAgMTBweDtcbn1cbjpob3N0IC5jb250ZW50LXdyYXBwZXIgLndyYXBwZXIgLmNvbnRlbnQtc2Nyb2xsIGFwcC1wYW5lbCBhcHAtc2ltcGxlLWl0ZW0gc3Ryb25nIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuOmhvc3QgLmNvbnRlbnQtd3JhcHBlciAud3JhcHBlciAuY29udGVudC1zY3JvbGwgYXBwLXBhbmVsIGFwcC1zaW1wbGUtaXRlbSBwIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDExcHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbn1cbjpob3N0IC5jb250ZW50LXdyYXBwZXIgLndyYXBwZXIgLmNvbnRlbnQtc2Nyb2xsIGlvbi1idXR0b24ge1xuICBtYXJnaW46IDEwcHggMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/pages/setting/components/setting/setting.component.ts":
/*!*******************************************************************!*\
  !*** ./src/pages/setting/components/setting/setting.component.ts ***!
  \*******************************************************************/
/*! exports provided: SettingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingComponent", function() { return SettingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/pages/auth/services/auth/auth.service */ "./src/pages/auth/services/auth/auth.service.ts");
/* harmony import */ var src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/shared/helpers/extender */ "./src/shared/helpers/extender.ts");
/* harmony import */ var _services_setting_setting_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/setting/setting.service */ "./src/pages/setting/services/setting/setting.service.ts");





/**
 * manage users preferences
 */
var SettingComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SettingComponent, _super);
    function SettingComponent(injector, authService, settingService) {
        var _this = _super.call(this, injector) || this;
        _this.injector = injector;
        _this.authService = authService;
        _this.settingService = settingService;
        return _this;
    }
    /** get settings and setting options from settings service. set uid to current user id.
     *  this is necessary if no settings has been saved previously
     */
    SettingComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.authService.getUser()];
                    case 1:
                        _a.currentUser = _b.sent();
                        this.subscriptions.push(this.settingService.getUserSettings(this.currentUser.uid).subscribe(function (data) {
                            _this.setting = data;
                            _this.setting.uid = _this.currentUser.uid;
                        }));
                        this.subscriptions.push(this.settingService.settingsOptions.subscribe(function (data) { return (_this.settingOptions = data); }));
                        return [2 /*return*/];
                }
            });
        });
    };
    /** save or update user preferences  */
    SettingComponent.prototype.save = function () {
        this.settingService.upsertPreferences(this.settingService.setting);
    };
    /** logout and return to welcome or auth screen */
    SettingComponent.prototype.signOut = function () {
        var _this = this;
        var hideWalkthrough = this.setting.hideWalkthrough;
        this.authService.signOut().then(function () {
            if (hideWalkthrough) {
                _this.goto(_this.routes.auth);
            }
            else {
                _this.goto(_this.routes.welcome);
            }
        });
    };
    SettingComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
        { type: src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _services_setting_setting_service__WEBPACK_IMPORTED_MODULE_4__["SettingService"] }
    ]; };
    SettingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-setting',
            template: __webpack_require__(/*! raw-loader!./setting.component.html */ "./node_modules/raw-loader/index.js!./src/pages/setting/components/setting/setting.component.html"),
            styles: [__webpack_require__(/*! ./setting.component.scss */ "./src/pages/setting/components/setting/setting.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _services_setting_setting_service__WEBPACK_IMPORTED_MODULE_4__["SettingService"]])
    ], SettingComponent);
    return SettingComponent;
}(src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_3__["Extender"]));



/***/ }),

/***/ "./src/pages/setting/setting.module.ts":
/*!*********************************************!*\
  !*** ./src/pages/setting/setting.module.ts ***!
  \*********************************************/
/*! exports provided: SettingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingModule", function() { return SettingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/shared/shared.module */ "./src/shared/shared.module.ts");
/* harmony import */ var _components_setting_setting_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/setting/setting.component */ "./src/pages/setting/components/setting/setting.component.ts");






var SettingModule = /** @class */ (function () {
    function SettingModule() {
    }
    SettingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_components_setting_setting_component__WEBPACK_IMPORTED_MODULE_5__["SettingComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                src_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _components_setting_setting_component__WEBPACK_IMPORTED_MODULE_5__["SettingComponent"]
                    }
                ])
            ]
        })
    ], SettingModule);
    return SettingModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-setting-setting-module-es5.js.map