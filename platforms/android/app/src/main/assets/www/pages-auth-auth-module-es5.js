(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-auth-auth-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/pages/auth/components/auth/auth.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/pages/auth/components/auth/auth.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"ion-padding\" scrollX=\"false\" scrollY=\"false\">\n  <div class=\"content-wrapper\">\n    <ion-button class=\"mb15\" shape=\"round\" (click)=\"goto(routes.login)\"> {{ 'auth-component.login-button' | translate }}</ion-button>\n    <ion-button class=\"mb15\" shape=\"round\" fill=\"outline\" (click)=\"goto(routes.register)\">\n      {{ 'auth-component.signup-button' | translate }}</ion-button\n    >\n\n    <p class=\"text-line-through-background\">\n      <span>{{ 'auth-component.alt-login' | translate }}</span>\n    </p>\n    <div class=\"social\">\n      <ion-button shape=\"round\" color=\"google\" [btnStatus]=\"gplusLoading\" (click)=\"socialLogin(provider.google)\">\n        {{ 'auth-component.google' | translate }}\n      </ion-button>\n      <ion-button shape=\"round\" color=\"facebook\" [btnStatus]=\"fbLoading\" (click)=\"socialLogin(provider.facebook)\">\n        {{ 'auth-component.facebook' | translate }}\n      </ion-button>\n    </div>\n    <div class=\"forgot mt15\" (click)=\"goto(routes.forgot)\">\n      {{ 'auth-component.forgot-text-1' | translate }}\n      <a class=\"reset\">{{ 'auth-component.forgot-text-2' | translate }} </a>\n    </div>\n\n    <div class=\"terms\">\n      {{ 'auth-component.i-read' | translate\n      }}<a (click)=\"openTermsAndConditions()\" class=\"strong\">{{ 'auth-component.tandc' | translate }}</a>\n    </div>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/pages/auth/components/deactivated-account/deactivated-account.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/pages/auth/components/deactivated-account/deactivated-account.component.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-toolbar>\n  <ion-buttons slot=\"start\">\n    <ion-button fill=\"clear\"\n      size=\"small\"\n      color=\"medium\"\n      (click)=\"goto(routes.login)\">\n      <ion-icon mode=\"md\"\n        src=\"assets/icons/x.svg\"></ion-icon>\n    </ion-button>\n  </ion-buttons>\n</ion-toolbar>\n\n<ion-content scrollX=\"false\"\n  scrollY=\"false\">\n  <div class=\"content-wrapper\">\n    <div class=\"header no-border has-toolbar\">\n      <div class=\"title\">\n        {{'deactivated-account-component.title' | translate}}\n      </div>\n    </div>\n\n    <div class=\"wrapper\">\n      <div class=\"content-scroll\"\n        *ngIf=\"currentUser\">\n        <div class=\"user-wrapper\">\n\n          <p class=\"subtitle\">{{'deactivated-account-component.subtitle' | translate}}\n            <br>{{currentUser.displayName}}\n          </p>\n          <div class=\"img\"\n            [image-loader]=\"currentUser.photoURL\"></div>\n        </div>\n        <p class=\"info\"> {{'deactivated-account-component.info' | translate}} </p>\n\n        <ion-button expand=\"block\"\n          shape=\"round\"\n          color=\"secondary\"\n          (click)=\"reactivate()\">\n          {{'deactivated-account-component.reactivate-button' | translate}}\n        </ion-button>\n      </div>\n    </div>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/pages/auth/components/forgot/forgot.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/pages/auth/components/forgot/forgot.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content scrollX=\"false\" scrollY=\"false\" class=\"ion-padding\">\n  <div class=\"content-wrapper center\">\n    <div class=\"title\">{{ 'forgot-component.title' | translate }}</div>\n\n    <!-- start email form -->\n    <ng-container *ngIf=\"!isPasswordReset\">\n      <form class=\"form\" *ngIf=\"!hasRequested\" #emailForm=\"ngForm\">\n        <div class=\"subtitle\">{{ 'forgot-component.subtitle-email' | translate }}</div>\n\n        <form-field fill=\"true\" color=\"medium\">\n          <ion-icon prefix src=\"assets/icons/mail.svg\"></ion-icon>\n          <ion-input\n            inputRef\n            email\n            placeholder=\"{{ 'forgot-component.email-label' | translate }}\"\n            name=\"email\"\n            [(ngModel)]=\"model.email\"\n            #email=\"ngModel\"\n            required\n          ></ion-input>\n          <div errors *ngIf=\"email.touched && email.invalid\">\n            <span *ngIf=\"email?.errors?.required\">{{ 'form-validation-messages.required' | translate }}</span>\n            <span *ngIf=\"email?.errors?.email\">{{ 'form-validation-messages.email' | translate }}</span>\n          </div>\n        </form-field>\n\n        <ion-button\n          class=\"no-shrink\"\n          expand=\"full\"\n          shape=\"round\"\n          (click)=\"requestReset()\"\n          [btnStatus]=\"loading\"\n          slot=\"end\"\n        >\n          {{ 'forgot-component.request-button' | translate }}\n          <ion-icon src=\"assets/icons/chevron-right.svg\"></ion-icon>\n        </ion-button>\n      </form>\n      <div class=\"info\" *ngIf=\"hasRequested\">{{ 'forgot-component.password-reset-info' | translate }}</div>\n    </ng-container>\n\n    <!-- end email form -->\n\n    <!-- start password form -->\n    <form class=\"form\" *ngIf=\"isPasswordReset\" #passwordForm=\"ngForm\">\n      <div class=\"subtitle\">{{ 'forgot-component.subtitle-password' | translate }}</div>\n      <form-field fill=\"true\" color=\"medium\">\n        <ion-icon prefix src=\"assets/icons/lock.svg\"></ion-icon>\n        <ion-input\n          inputRef\n          name=\"password\"\n          type=\"password\"\n          placeholder=\"{{ 'forgot-component.password-label' | translate }}\"\n          [(ngModel)]=\"model.password\"\n          #password=\"ngModel\"\n          (secure)=\"passwordStrength = $event\"\n          required\n        ></ion-input>\n        <small\n          class=\"pass-strength\"\n          suffix\n          [ngStyle]=\"{ background: 'var(--ion-color-' + passwordStrength + ')' }\"\n        ></small>\n        <div errors *ngIf=\"password.touched && password.invalid\">\n          <span *ngIf=\"password?.errors?.required\">{{ 'form-validation-messages.required' | translate }}</span>\n          <span *ngIf=\"password?.errors?.secure\">{{ 'form-validation-messages.password-no-secure' | translate }}</span>\n        </div>\n      </form-field>\n\n      <form-field fill=\"true\" color=\"medium\">\n        <ion-icon prefix src=\"assets/icons/key.svg\"></ion-icon>\n        <ion-input\n          inputRef\n          name=\"rpassword\"\n          type=\"password\"\n          placeholder=\"{{ 'forgot-component.retype-password-label' | translate }}\"\n          [(ngModel)]=\"model.rpassword\"\n          [compare-password]=\"password\"\n          #rpassword=\"ngModel\"\n          required\n        ></ion-input>\n\n        <div errors *ngIf=\"rpassword.touched && rpassword.invalid\">\n          <span *ngIf=\"rpassword?.errors?.required\">{{ 'form-validation-messages.required' | translate }}</span>\n          <span *ngIf=\"rpassword?.errors?.compareTo\">{{\n            'form-validation-messages.password-no-match' | translate\n          }}</span>\n        </div>\n      </form-field>\n\n      <ion-button\n        class=\"no-shrink\"\n        expand=\"full\"\n        shape=\"round\"\n        (click)=\"resetPassword()\"\n        [btnStatus]=\"loading\"\n        slot=\"end\"\n      >\n        {{ 'forgot-component.reset-button' | translate }}\n        <ion-icon src=\"assets/icons/chevron-right.svg\"></ion-icon>\n      </ion-button>\n    </form>\n    <!-- end password form -->\n\n    <!-- start login option -->\n    <div class=\"terms\">\n      {{ 'auth-component.login-text-1' | translate }}\n      <a (click)=\"goto(routes.login)\" class=\"strong\">\n        {{ 'auth-component.login-text-2' | translate }}\n      </a>\n    </div>\n    <!-- end login option -->\n\n    <p class=\"text-line-through-background\"><span>or</span></p>\n\n    <!-- start get an account -->\n    <div class=\"terms\">\n      {{ 'login-component.dont-have-account' | translate }}\n      <a (click)=\"goto(routes.register)\" class=\"strong\">{{ 'login-component.register' | translate }}</a>\n    </div>\n    <!-- end get an account -->\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/pages/auth/components/login/login.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/pages/auth/components/login/login.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content scrollX=\"false\" scrollY=\"false\" class=\"ion-padding\">\n  <div class=\"content-wrapper center\">\n    <!-- info section when user has verified their account -->\n    <div class=\"info\" *ngIf=\"emailVerified\">\n      <ion-icon src=\"assets/icons/info.svg\"></ion-icon><span>{{ 'login-component.email-verified' | translate }}</span>\n    </div>\n\n    <div class=\"title\">{{ 'login-component.title' | translate }}</div>\n\n    <!-- start form -->\n    <form class=\"form\" #form=\"ngForm\">\n      <form-field fill=\"true\" color=\"medium\">\n        <ion-icon prefix src=\"assets/icons/user.svg\"></ion-icon>\n        <ion-input inputRef name=\"email\" placeholder=\"Email\" [(ngModel)]=\"model.email\" required email></ion-input>\n      </form-field>\n\n      <form-field fill=\"true\" color=\"medium\">\n        <ion-icon prefix src=\"assets/icons/lock.svg\"></ion-icon>\n        <ion-input type=\"password\" name=\"password\" required inputRef placeholder=\"Password\" [(ngModel)]=\"model.password\"></ion-input>\n      </form-field>\n    </form>\n\n    <div class=\"remember-me\">\n      <ion-checkbox name=\"rememberMe\" [(ngModel)]=\"rememberMe\"></ion-checkbox>\n      <div class=\"remember-me-text\">{{ 'login-component.remember-label' | translate }}</div>\n    </div>\n    <!-- end form -->\n\n    <!-- signin button -->\n    <ion-button class=\"no-shrink\" expand=\"full\" shape=\"round\" (click)=\"login()\" [btnStatus]=\"loading\" slot=\"end\">\n      {{ 'auth-component.login-button' | translate }}\n      <ion-icon src=\"assets/icons/chevron-right.svg\"></ion-icon>\n    </ion-button>\n    <!-- end sign in button -->\n\n    <!-- start forgot password -->\n    <div class=\"terms\">\n      {{ 'auth-component.forgot-text-1' | translate }}\n      <a (click)=\"goto(routes.forgot)\" class=\"strong\">\n        {{ 'auth-component.forgot-text-2' | translate }}\n      </a>\n    </div>\n    <!-- end forgot password -->\n\n    <p class=\"text-line-through-background\"><span>or</span></p>\n\n    <!-- start social buttons -->\n    <div class=\"social-buttons\">\n      <ion-button shape=\"round\" color=\"google\" [btnStatus]=\"gplusLoading\" (click)=\"socialLoginIn(provider.google)\">\n        {{ 'auth-component.google' | translate }}</ion-button\n      >\n      <ion-button shape=\"round\" color=\"facebook\" [btnStatus]=\"fbLoading\" (click)=\"socialLoginIn(provider.facebook)\">\n        {{ 'auth-component.facebook' | translate }}</ion-button\n      >\n    </div>\n    <!-- end social buttons -->\n\n    <!-- start get an account -->\n    <div class=\"terms\">\n      {{ 'login-component.dont-have-account' | translate }}\n      <a (click)=\"goto(routes.register)\" class=\"strong\">{{ 'login-component.register' | translate }}</a>\n    </div>\n    <!-- end get an account -->\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/pages/auth/components/register/register.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/pages/auth/components/register/register.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content scrollX=\"false\" scrollY=\"false\" class=\"ion-padding\">\n  <div class=\"content-wrapper center\">\n    <!-- title -->\n    <div class=\"subtitle\">{{ 'signup-component.title' | translate }}</div>\n\n    <!-- start form -->\n    <form class=\"form\" #form=\"ngForm\">\n      <form-field fill=\"true\" color=\"medium\">\n        <ion-icon prefix src=\"assets/icons/user.svg\"></ion-icon>\n        <ion-input\n          inputRef\n          name=\"displayName\"\n          placeholder=\"Display Name\"\n          [(ngModel)]=\"model.displayName\"\n          #displayName=\"ngModel\"\n          required\n        >\n        </ion-input>\n        <div errors *ngIf=\"displayName.touched && displayName.invalid\">\n          <span *ngIf=\"displayName?.errors?.required\">{{ 'form-validation-messages.required' | translate }}</span>\n        </div>\n      </form-field>\n\n      <form-field fill=\"true\" color=\"medium\">\n        <ion-icon prefix src=\"assets/icons/mail.svg\"></ion-icon>\n        <ion-input\n          inputRef\n          name=\"email\"\n          placeholder=\"Email\"\n          [(ngModel)]=\"model.email\"\n          #email=\"ngModel\"\n          required\n        ></ion-input>\n        <div errors *ngIf=\"email.touched && email.invalid\">\n          <span *ngIf=\"email?.errors?.required\">{{ 'form-validation-messages.required' | translate }}</span>\n        </div>\n      </form-field>\n\n      <form-field fill=\"true\" color=\"medium\">\n        <ion-icon prefix src=\"assets/icons/lock.svg\"></ion-icon>\n        <ion-input\n          inputRef\n          type=\"password\"\n          name=\"password\"\n          placeholder=\"Password\"\n          [(ngModel)]=\"model.password\"\n          #password=\"ngModel\"\n          (secure)=\"passwordStrength = $event\"\n          required\n        ></ion-input>\n        <small\n          class=\"pass-strength\"\n          suffix\n          [ngStyle]=\"{ background: 'var(--ion-color-' + passwordStrength + ')' }\"\n        ></small>\n        <div errors *ngIf=\"password.touched && password.invalid\">\n          <span *ngIf=\"password?.errors?.required\">{{ 'form-validation-messages.required' | translate }}</span>\n          <span *ngIf=\"password?.errors?.secure\">{{ 'form-validation-messages.password-no-secure' | translate }}</span>\n        </div>\n      </form-field>\n\n      <form-field fill=\"true\" color=\"medium\">\n        <ion-icon prefix src=\"assets/icons/key.svg\"></ion-icon>\n        <ion-input\n          inputRef\n          name=\"rpassword\"\n          type=\"password\"\n          placeholder=\"Retype Password\"\n          [(ngModel)]=\"model.rpassword\"\n          [compare-password]=\"password\"\n          #rpassword=\"ngModel\"\n          required\n        ></ion-input>\n\n        <div errors *ngIf=\"rpassword.touched && rpassword.invalid\">\n          <span *ngIf=\"rpassword?.errors?.required\">{{ 'form-validation-messages.required' | translate }}</span>\n          <span *ngIf=\"rpassword?.errors?.compareTo\">{{\n            'form-validation-messages.password-no-match' | translate\n          }}</span>\n        </div>\n      </form-field>\n    </form>\n    <!-- end form -->\n\n    <!-- start sign up button -->\n    <ion-button class=\"no-shrink\" expand=\"full\" shape=\"round\" (click)=\"signup()\" [btnStatus]=\"loading\" slot=\"end\">\n      {{ 'auth-component.signup-button' | translate }}\n      <ion-icon src=\"assets/icons/chevron-right.svg\"></ion-icon>\n    </ion-button>\n    <!-- end sign up button -->\n\n    <!-- get an account -->\n    <div class=\"terms\">\n      {{ 'auth-component.login-text-1' | translate }}\n      <a (click)=\"goto(routes.login)\" class=\"strong\">{{ 'auth-component.login-button' | translate }}</a>\n    </div>\n    <!-- end get an account -->\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/pages/auth/components/verify-email/verify-email.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/pages/auth/components/verify-email/verify-email.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-toolbar>\n  <ion-buttons slot=\"start\">\n    <ion-button fill=\"clear\" size=\"small\" color=\"medium\" (click)=\"back()\">\n      <ion-icon mode=\"md\" src=\"assets/icons/x.svg\"></ion-icon>\n    </ion-button>\n  </ion-buttons>\n</ion-toolbar>\n\n<ion-content scrollX=\"false\" scrollY=\"false\">\n  <div class=\"content-wrapper\">\n    <div class=\"header no-border has-toolbar\">\n      <div class=\"title\">\n        {{ 'verify-email-component.title' | translate }}\n      </div>\n    </div>\n\n    <div class=\"wrapper\">\n      <div class=\"content-scroll\" *ngIf=\"currentUser\">\n        <div class=\"user-wrapper\">\n          <p class=\"subtitle\" [translate]=\"'verify-email-component.subtitle'\" [translateParams]=\"{ name: currentUser.displayName }\"></p>\n        </div>\n        <p class=\"info\" [innerHTML]=\"'verify-email-component.info' | translate: { email: currentUser.email }\"></p>\n\n        <ion-button class=\"resend-btn\" expand=\"block\" shape=\"round\" color=\"secondary\" (click)=\"resendVerificationEmail()\">\n          {{ 'verify-email-component.resend-button' | translate }}\n        </ion-button>\n\n        <ion-button expand=\"block\" shape=\"round\" color=\"danger\" (click)=\"back()\">\n          {{ 'verify-email-component.login-button' | translate }}\n        </ion-button>\n      </div>\n    </div>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/pages/auth/auth.module.ts":
/*!***************************************!*\
  !*** ./src/pages/auth/auth.module.ts ***!
  \***************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/shared/shared.module */ "./src/shared/shared.module.ts");
/* harmony import */ var _components_auth_auth_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/auth/auth.component */ "./src/pages/auth/components/auth/auth.component.ts");
/* harmony import */ var _components_deactivated_account_deactivated_account_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/deactivated-account/deactivated-account.component */ "./src/pages/auth/components/deactivated-account/deactivated-account.component.ts");
/* harmony import */ var _components_forgot_forgot_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/forgot/forgot.component */ "./src/pages/auth/components/forgot/forgot.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/login/login.component */ "./src/pages/auth/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/register/register.component */ "./src/pages/auth/components/register/register.component.ts");
/* harmony import */ var _components_verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/verify-email/verify-email.component */ "./src/pages/auth/components/verify-email/verify-email.component.ts");
/* harmony import */ var _guards_verify_email_verify_email_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./guards/verify-email/verify-email.guard */ "./src/pages/auth/guards/verify-email/verify-email.guard.ts");












var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_components_auth_auth_component__WEBPACK_IMPORTED_MODULE_5__["AuthComponent"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"], _components_register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"], _components_forgot_forgot_component__WEBPACK_IMPORTED_MODULE_7__["ForgotComponent"], _components_verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_10__["VerifyEmailComponent"], _components_deactivated_account_deactivated_account_component__WEBPACK_IMPORTED_MODULE_6__["DeactivatedAccountComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                src_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _components_auth_auth_component__WEBPACK_IMPORTED_MODULE_5__["AuthComponent"]
                    },
                    {
                        path: 'login',
                        component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"]
                    },
                    {
                        path: 'register',
                        component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"]
                    },
                    {
                        path: 'forgot',
                        component: _components_forgot_forgot_component__WEBPACK_IMPORTED_MODULE_7__["ForgotComponent"]
                    },
                    {
                        path: 'deactivated',
                        component: _components_deactivated_account_deactivated_account_component__WEBPACK_IMPORTED_MODULE_6__["DeactivatedAccountComponent"]
                    },
                    {
                        canActivate: [_guards_verify_email_verify_email_guard__WEBPACK_IMPORTED_MODULE_11__["VerifyEmailGuard"]],
                        path: 'verify-email',
                        component: _components_verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_10__["VerifyEmailComponent"]
                    }
                ])
            ]
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/pages/auth/components/auth/auth.component.scss":
/*!************************************************************!*\
  !*** ./src/pages/auth/components/auth/auth.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .content-wrapper {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  width: 100%;\n  height: 100%;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n:host .content-wrapper .social {\n  -webkit-box-pack: center;\n          justify-content: center;\n  display: -webkit-box;\n  display: flex;\n}\n:host .content-wrapper .social ion-button {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n:host .content-wrapper .forgot,\n:host .content-wrapper .terms {\n  text-align: center;\n  margin: 15px 0;\n}\n:host .content-wrapper .forgot {\n  font-size: 14px;\n}\n:host .content-wrapper .terms {\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wYWdlcy9hdXRoL2NvbXBvbmVudHMvYXV0aC9DOlxcVXNlcnNcXGRkNDI0XFxkZXNrdG9wXFxEZXZlbG9wXFxlenlhcHBzX3VrLWNvbXBsZXRlLWZpcmUtc3RhcnRlci1jNjI4ZDNmYzFmZGUvc3JjXFxwYWdlc1xcYXV0aFxcY29tcG9uZW50c1xcYXV0aFxcYXV0aC5jb21wb25lbnQuc2NzcyIsInNyYy9wYWdlcy9hdXRoL2NvbXBvbmVudHMvYXV0aC9hdXRoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FDQUo7QURFSTtFQUNFLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7QUNBTjtBREVNO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsbUJBQUE7VUFBQSxPQUFBO0FDQVI7QURJSTs7RUFFRyxrQkFBQTtFQUNDLGNBQUE7QUNGUjtBREtJO0VBQ0UsZUFBQTtBQ0hOO0FETUk7RUFDRSxlQUFBO0FDSk4iLCJmaWxlIjoic3JjL3BhZ2VzL2F1dGgvY29tcG9uZW50cy9hdXRoL2F1dGguY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIC5jb250ZW50LXdyYXBwZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAuc29jaWFsIHtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgZGlzcGxheTogZmxleDtcblxuICAgICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmZvcmdvdCxcbiAgICAudGVybXMge1xuICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luOiAxNXB4IDA7XG4gICAgfVxuXG4gICAgLmZvcmdvdCB7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuXG4gICAgLnRlcm1zIHtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB9XG4gIH1cbn1cbiIsIjpob3N0IC5jb250ZW50LXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbjpob3N0IC5jb250ZW50LXdyYXBwZXIgLnNvY2lhbCB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuOmhvc3QgLmNvbnRlbnQtd3JhcHBlciAuc29jaWFsIGlvbi1idXR0b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4OiAxO1xufVxuOmhvc3QgLmNvbnRlbnQtd3JhcHBlciAuZm9yZ290LFxuOmhvc3QgLmNvbnRlbnQtd3JhcHBlciAudGVybXMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMTVweCAwO1xufVxuOmhvc3QgLmNvbnRlbnQtd3JhcHBlciAuZm9yZ290IHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuOmhvc3QgLmNvbnRlbnQtd3JhcHBlciAudGVybXMge1xuICBmb250LXNpemU6IDEycHg7XG59Il19 */"

/***/ }),

/***/ "./src/pages/auth/components/auth/auth.component.ts":
/*!**********************************************************!*\
  !*** ./src/pages/auth/components/auth/auth.component.ts ***!
  \**********************************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/shared/helpers/extender */ "./src/shared/helpers/extender.ts");
/* harmony import */ var src_shared_modals_terms_and_conditions_terms_and_conditions_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/shared/modals/terms-and-conditions/terms-and-conditions.component */ "./src/shared/modals/terms-and-conditions/terms-and-conditions.component.ts");
/* harmony import */ var _helpers_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/constants */ "./src/pages/auth/helpers/constants.ts");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/auth/auth.service */ "./src/pages/auth/services/auth/auth.service.ts");






/**
 * navigate to login or use social login, access to terms and conditions modal
 */
var AuthComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AuthComponent, _super);
    function AuthComponent(injector, authService) {
        var _this = _super.call(this, injector) || this;
        _this.injector = injector;
        _this.authService = authService;
        /** stores enum of social providers */
        _this.provider = _helpers_constants__WEBPACK_IMPORTED_MODULE_4__["SocialAuthProvider"];
        /** loader for facebook button in template */
        _this.fbLoading = false;
        /** loader for facebook button in template */
        _this.gplusLoading = false;
        /** common success promise callback */
        _this.successPromise = function () {
            _this.loading = false;
            _this.fbLoading = false;
            _this.gplusLoading = false;
            _this.goto(_this.routes.dashboard);
        };
        /** common failed promise callback */
        _this.failPromise = function (err) {
            _this.fbLoading = false;
            _this.gplusLoading = false;
            _this.loading = false;
            _this.toast(err);
        };
        return _this;
    }
    /** users facebook or google social to login based on provider type
     * on success, navigate to dashboard page
     */
    AuthComponent.prototype.socialLogin = function (provider) {
        var _this = this;
        if (provider === this.provider.google) {
            this.gplusLoading = true;
        }
        else {
            this.fbLoading = true;
        }
        this.authService
            .socialogin(provider)
            .then(this.successPromise)
            .catch(function (err) { return _this.failPromise(err); });
    };
    /** open terms and conditions modal */
    AuthComponent.prototype.openTermsAndConditions = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.openModal(src_shared_modals_terms_and_conditions_terms_and_conditions_component__WEBPACK_IMPORTED_MODULE_3__["TermsAndConditionsComponent"])];
                    case 1:
                        modal = _a.sent();
                        modal.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    AuthComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
        { type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }
    ]; };
    AuthComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-auth',
            template: __webpack_require__(/*! raw-loader!./auth.component.html */ "./node_modules/raw-loader/index.js!./src/pages/auth/components/auth/auth.component.html"),
            styles: [__webpack_require__(/*! ./auth.component.scss */ "./src/pages/auth/components/auth/auth.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], AuthComponent);
    return AuthComponent;
}(src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_2__["Extender"]));



/***/ }),

/***/ "./src/pages/auth/components/deactivated-account/deactivated-account.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/pages/auth/components/deactivated-account/deactivated-account.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .content-wrapper .wrapper {\n  display: -webkit-box;\n  display: flex;\n  height: 100%;\n}\n:host .content-wrapper .wrapper .content-scroll {\n  height: calc(100% - 90px) !important;\n  width: 100%;\n  padding: 0 20px;\n}\n:host .content-wrapper .wrapper .content-scroll .user-wrapper {\n  display: -webkit-box;\n  display: flex;\n  margin: 10px 0 30px;\n}\n:host .content-wrapper .wrapper .content-scroll .user-wrapper .img {\n  width: 80px;\n  height: 80px;\n  border-radius: 4px;\n  box-shadow: 1px 2px 2px var(--ion-color-medium);\n}\n:host .content-wrapper .wrapper .content-scroll .user-wrapper .subtitle {\n  margin-top: 0;\n  font-size: 18px;\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n:host .content-wrapper .wrapper .content-scroll .info {\n  margin-top: 0;\n  color: var(--ion-color-medium);\n  font-size: 13px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wYWdlcy9hdXRoL2NvbXBvbmVudHMvZGVhY3RpdmF0ZWQtYWNjb3VudC9DOlxcVXNlcnNcXGRkNDI0XFxkZXNrdG9wXFxEZXZlbG9wXFxlenlhcHBzX3VrLWNvbXBsZXRlLWZpcmUtc3RhcnRlci1jNjI4ZDNmYzFmZGUvc3JjXFxwYWdlc1xcYXV0aFxcY29tcG9uZW50c1xcZGVhY3RpdmF0ZWQtYWNjb3VudFxcZGVhY3RpdmF0ZWQtYWNjb3VudC5jb21wb25lbnQuc2NzcyIsInNyYy9wYWdlcy9hdXRoL2NvbXBvbmVudHMvZGVhY3RpdmF0ZWQtYWNjb3VudC9kZWFjdGl2YXRlZC1hY2NvdW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsWUFBQTtBQ0ROO0FER007RUFDRSxvQ0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDRFI7QURHUTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLG1CQUFBO0FDRFY7QURFVTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQ0FBQTtBQ0FaO0FERVU7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO1VBQUEsT0FBQTtBQ0FaO0FESVE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0FDRlYiLCJmaWxlIjoic3JjL3BhZ2VzL2F1dGgvY29tcG9uZW50cy9kZWFjdGl2YXRlZC1hY2NvdW50L2RlYWN0aXZhdGVkLWFjY291bnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIC5jb250ZW50LXdyYXBwZXIge1xuICAgIC53cmFwcGVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICAgIC5jb250ZW50LXNjcm9sbCB7XG4gICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gOTBweCkgIWltcG9ydGFudDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmc6IDAgMjBweDtcblxuICAgICAgICAudXNlci13cmFwcGVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIG1hcmdpbjogMTBweCAwIDMwcHg7XG4gICAgICAgICAgLmltZyB7XG4gICAgICAgICAgICB3aWR0aDogODBweDtcbiAgICAgICAgICAgIGhlaWdodDogODBweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDFweCAycHggMnB4IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc3VidGl0bGUge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmluZm8ge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiOmhvc3QgLmNvbnRlbnQtd3JhcHBlciAud3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMTAwJTtcbn1cbjpob3N0IC5jb250ZW50LXdyYXBwZXIgLndyYXBwZXIgLmNvbnRlbnQtc2Nyb2xsIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA5MHB4KSAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMCAyMHB4O1xufVxuOmhvc3QgLmNvbnRlbnQtd3JhcHBlciAud3JhcHBlciAuY29udGVudC1zY3JvbGwgLnVzZXItd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogMTBweCAwIDMwcHg7XG59XG46aG9zdCAuY29udGVudC13cmFwcGVyIC53cmFwcGVyIC5jb250ZW50LXNjcm9sbCAudXNlci13cmFwcGVyIC5pbWcge1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiA4MHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaGFkb3c6IDFweCAycHggMnB4IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xufVxuOmhvc3QgLmNvbnRlbnQtd3JhcHBlciAud3JhcHBlciAuY29udGVudC1zY3JvbGwgLnVzZXItd3JhcHBlciAuc3VidGl0bGUge1xuICBtYXJnaW4tdG9wOiAwO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZsZXg6IDE7XG59XG46aG9zdCAuY29udGVudC13cmFwcGVyIC53cmFwcGVyIC5jb250ZW50LXNjcm9sbCAuaW5mbyB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgZm9udC1zaXplOiAxM3B4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/pages/auth/components/deactivated-account/deactivated-account.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/pages/auth/components/deactivated-account/deactivated-account.component.ts ***!
  \****************************************************************************************/
/*! exports provided: DeactivatedAccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeactivatedAccountComponent", function() { return DeactivatedAccountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/shared/helpers/extender */ "./src/shared/helpers/extender.ts");
/* harmony import */ var src_shared_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/shared/services/firestore/firestore.service */ "./src/shared/services/firestore/firestore.service.ts");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth/auth.service */ "./src/pages/auth/services/auth/auth.service.ts");





/**
 * this page is shown when a user deactivate their account.
 * user account deactivation is just a boolean in user document that can be toggled in settings
 * every time a user logs in the user is redirected to this page using the auth guard
 * if they have deactivated their account
 */
var DeactivatedAccountComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](DeactivatedAccountComponent, _super);
    function DeactivatedAccountComponent(injector, authService, firestoreService) {
        var _this = _super.call(this, injector) || this;
        _this.injector = injector;
        _this.authService = authService;
        _this.firestoreService = firestoreService;
        return _this;
    }
    /** get current user */
    DeactivatedAccountComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.authService.getUser()];
                    case 1:
                        _a.currentUser = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /** reactivate a user account, sign out user and navigate to login page */
    DeactivatedAccountComponent.prototype.reactivate = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var user;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authService.getUser()];
                    case 1:
                        user = _a.sent();
                        this.loading = true;
                        user.deactivated = false;
                        this.firestoreService
                            .update("users/" + user.uid, user)
                            .then(function () {
                            _this.loading = false;
                            _this.authService.signOut();
                            _this.goto(_this.routes.login);
                            _this.toast(_this.translate.instant('deactivated-account-component.reactivated-success-message'));
                        })
                            .catch(function (err) { return _this.toast(err); });
                        return [2 /*return*/];
                }
            });
        });
    };
    DeactivatedAccountComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
        { type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
        { type: src_shared_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_3__["FirestoreService"] }
    ]; };
    DeactivatedAccountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-deactivated-account',
            template: __webpack_require__(/*! raw-loader!./deactivated-account.component.html */ "./node_modules/raw-loader/index.js!./src/pages/auth/components/deactivated-account/deactivated-account.component.html"),
            styles: [__webpack_require__(/*! ./deactivated-account.component.scss */ "./src/pages/auth/components/deactivated-account/deactivated-account.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], src_shared_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_3__["FirestoreService"]])
    ], DeactivatedAccountComponent);
    return DeactivatedAccountComponent;
}(src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_2__["Extender"]));



/***/ }),

/***/ "./src/pages/auth/components/forgot/forgot.component.scss":
/*!****************************************************************!*\
  !*** ./src/pages/auth/components/forgot/forgot.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ion-content {\n  --background: var(--ion-color-light);\n}\n:host ion-content .content-wrapper {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: 0 -40px;\n  padding-top: 50px;\n}\n:host ion-content .content-wrapper.center {\n  -webkit-box-pack: center;\n          justify-content: center;\n  align-self: center;\n}\n:host ion-content .content-wrapper .title {\n  font-size: 24px;\n  margin-bottom: 10px;\n}\n:host ion-content .content-wrapper .subtitle {\n  font-size: 14px;\n  color: var(--ion-color-medium);\n}\n:host ion-content .content-wrapper .info {\n  text-align: center;\n  margin: 10px;\n  border-top: 1px solid var(--ion-color-primary-tint);\n  border-bottom: 1px solid var(--ion-color-primary-tint);\n  font-size: 15px;\n  padding: 20px;\n}\n:host ion-content .content-wrapper .terms {\n  text-align: center;\n  margin: 10px 0 0;\n  font-size: 13px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wYWdlcy9hdXRoL2NvbXBvbmVudHMvZm9yZ290L0M6XFxVc2Vyc1xcZGQ0MjRcXGRlc2t0b3BcXERldmVsb3BcXGV6eWFwcHNfdWstY29tcGxldGUtZmlyZS1zdGFydGVyLWM2MjhkM2ZjMWZkZS9zcmNcXHBhZ2VzXFxhdXRoXFxjb21wb25lbnRzXFxmb3Jnb3RcXGZvcmdvdC5jb21wb25lbnQuc2NzcyIsInNyYy9wYWdlcy9hdXRoL2NvbXBvbmVudHMvZm9yZ290L2ZvcmdvdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLG9DQUFBO0FDQUo7QURFSTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esd0JBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0VBQ0EsaUJBQUE7QUNBTjtBREVNO0VBQ0Usd0JBQUE7VUFBQSx1QkFBQTtFQUNBLGtCQUFBO0FDQVI7QURHTTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtBQ0RSO0FER007RUFDRSxlQUFBO0VBQ0EsOEJBQUE7QUNEUjtBREdNO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsbURBQUE7RUFDQSxzREFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FDRFI7QURJTTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDRlIiLCJmaWxlIjoic3JjL3BhZ2VzL2F1dGgvY29tcG9uZW50cy9mb3Jnb3QvZm9yZ290LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBpb24tY29udGVudCB7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuXG4gICAgLmNvbnRlbnQtd3JhcHBlciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgLTQwcHg7XG4gICAgICBwYWRkaW5nLXRvcDogNTBweDtcblxuICAgICAgJi5jZW50ZXIge1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICAudGl0bGUge1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICB9XG4gICAgICAuc3VidGl0bGUge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICAgIH1cbiAgICAgIC5pbmZvIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS10aW50KTtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXRpbnQpO1xuICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICB9XG5cbiAgICAgIC50ZXJtcyB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luOiAxMHB4IDAgMDtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiOmhvc3QgaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG59XG46aG9zdCBpb24tY29udGVudCAuY29udGVudC13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIC00MHB4O1xuICBwYWRkaW5nLXRvcDogNTBweDtcbn1cbjpob3N0IGlvbi1jb250ZW50IC5jb250ZW50LXdyYXBwZXIuY2VudGVyIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cbjpob3N0IGlvbi1jb250ZW50IC5jb250ZW50LXdyYXBwZXIgLnRpdGxlIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuOmhvc3QgaW9uLWNvbnRlbnQgLmNvbnRlbnQtd3JhcHBlciAuc3VidGl0bGUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbn1cbjpob3N0IGlvbi1jb250ZW50IC5jb250ZW50LXdyYXBwZXIgLmluZm8ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMTBweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXRpbnQpO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnktdGludCk7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgcGFkZGluZzogMjBweDtcbn1cbjpob3N0IGlvbi1jb250ZW50IC5jb250ZW50LXdyYXBwZXIgLnRlcm1zIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDEwcHggMCAwO1xuICBmb250LXNpemU6IDEzcHg7XG59Il19 */"

/***/ }),

/***/ "./src/pages/auth/components/forgot/forgot.component.ts":
/*!**************************************************************!*\
  !*** ./src/pages/auth/components/forgot/forgot.component.ts ***!
  \**************************************************************/
/*! exports provided: ForgotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotComponent", function() { return ForgotComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/shared/helpers/extender */ "./src/shared/helpers/extender.ts");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth/auth.service */ "./src/pages/auth/services/auth/auth.service.ts");





/**
 * allows user to update their password
 * send a one time token to users email so that they can reset their password using firebase auth,
 * when user clicks the link in their email, they are redirected to this component with code in query params
 * check query-params and send code as well as new user password to change user password
 */
var ForgotComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ForgotComponent, _super);
    function ForgotComponent(injector, authService) {
        var _this = _super.call(this, injector) || this;
        _this.injector = injector;
        _this.authService = authService;
        _this.isPasswordReset = false;
        _this.hasRequested = false;
        _this.model = { code: null, email: null, password: null, rpassword: null };
        _this.failPromise = function (err) {
            _this.loading = false;
            _this.toast(err);
        };
        return _this;
    }
    /** subscribe to query param changes,
     * if the param oobCode, provided by firebase is included set isPassword reset property to true
     * store oobCode value in model property. the email route configurations are done in
     * https://console.firebase.google.com/u/1/project/complete-fire-starter/authentication/emails
     */
    ForgotComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscriptions.push(this.activatedRoute.queryParams.subscribe(function (param) {
            if (param && param.mode === 'resetPassword' && param.oobCode) {
                _this.model.code = param.oobCode;
                _this.isPasswordReset = true;
            }
        }));
    };
    /** allow firebase to send a password reset token to the users provided email */
    ForgotComponent.prototype.requestReset = function () {
        var _this = this;
        this.loading = true;
        if (this.emailForm.valid) {
            this.authService
                .sendPasswordReset(this.model.email)
                .then(function () {
                _this.loading = false;
                _this.hasRequested = true;
            })
                .catch(function (err) { return _this.failPromise(err); });
        }
    };
    /** allow firebase to handle password change by providing new and retype new password */
    ForgotComponent.prototype.resetPassword = function () {
        var _this = this;
        this.loading = true;
        if (this.passwordForm.valid) {
            this.authService
                .confirmPasswordReset(this.model.code, this.model.password)
                .then(function () {
                _this.loading = false;
                _this.toast(_this.translate.instant('forgot-component.reset-success'));
                _this.goto(_this.routes.login);
            })
                .catch(function (err) { return _this.failPromise(err); });
        }
    };
    ForgotComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
        { type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('emailForm', null),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], ForgotComponent.prototype, "emailForm", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('passwordForm', null),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], ForgotComponent.prototype, "passwordForm", void 0);
    ForgotComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forgot',
            template: __webpack_require__(/*! raw-loader!./forgot.component.html */ "./node_modules/raw-loader/index.js!./src/pages/auth/components/forgot/forgot.component.html"),
            styles: [__webpack_require__(/*! ./forgot.component.scss */ "./src/pages/auth/components/forgot/forgot.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], ForgotComponent);
    return ForgotComponent;
}(src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_3__["Extender"]));



/***/ }),

/***/ "./src/pages/auth/components/login/login.component.scss":
/*!**************************************************************!*\
  !*** ./src/pages/auth/components/login/login.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ion-content {\n  --background: var(--ion-color-light);\n}\n:host ion-content .content-wrapper {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: 0 -40px;\n}\n:host ion-content .content-wrapper.center {\n  -webkit-box-pack: center;\n          justify-content: center;\n  align-self: center;\n}\n:host ion-content .content-wrapper .title {\n  font-size: 24px;\n  margin-bottom: 10px;\n}\n:host ion-content .content-wrapper .info {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  margin: 10px 0;\n  font-size: 13px;\n  font-weight: bold;\n  color: var(--ion-color-primary);\n}\n:host ion-content .content-wrapper .info ion-icon {\n  font-size: 45px;\n  margin-right: 10px;\n}\n:host ion-content .content-wrapper .social-buttons {\n  display: -webkit-box;\n  display: flex;\n}\n:host ion-content .content-wrapper .social-buttons ion-button {\n  width: 100%;\n}\n:host ion-content .content-wrapper .terms {\n  text-align: center;\n  margin: 10px 0 0;\n  font-size: 13px;\n}\n:host ion-content .content-wrapper .remember-me {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  margin-bottom: 15px;\n  font-size: 13px;\n}\n:host ion-content .content-wrapper .remember-me .remember-me-text {\n  margin-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wYWdlcy9hdXRoL2NvbXBvbmVudHMvbG9naW4vQzpcXFVzZXJzXFxkZDQyNFxcZGVza3RvcFxcRGV2ZWxvcFxcZXp5YXBwc191ay1jb21wbGV0ZS1maXJlLXN0YXJ0ZXItYzYyOGQzZmMxZmRlL3NyY1xccGFnZXNcXGF1dGhcXGNvbXBvbmVudHNcXGxvZ2luXFxsb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9wYWdlcy9hdXRoL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxvQ0FBQTtBQ0FKO0FERUk7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHdCQUFBO0VBQ0EsNEJBQUE7RUFDQSw0QkFBQTtBQ0FOO0FERU07RUFDRSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0Esa0JBQUE7QUNBUjtBREdNO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0FDRFI7QURJTTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsK0JBQUE7QUNGUjtBREdRO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FDRFY7QURLTTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtBQ0hSO0FES1E7RUFDRSxXQUFBO0FDSFY7QURPTTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDTFI7QURRTTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUNOUjtBRE9RO0VBQ0UsaUJBQUE7QUNMViIsImZpbGUiOiJzcmMvcGFnZXMvYXV0aC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBpb24tY29udGVudCB7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuXG4gICAgLmNvbnRlbnQtd3JhcHBlciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgLTQwcHg7XG5cbiAgICAgICYuY2VudGVyIHtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgLnRpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgfVxuXG4gICAgICAuaW5mbyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbjogMTBweCAwO1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgZm9udC1zaXplOiA0NXB4O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuc29jaWFsLWJ1dHRvbnMge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgICAgIGlvbi1idXR0b24ge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC50ZXJtcyB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luOiAxMHB4IDAgMDtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgfVxuXG4gICAgICAucmVtZW1iZXItbWUge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgIC5yZW1lbWJlci1tZS10ZXh0IHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiOmhvc3QgaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG59XG46aG9zdCBpb24tY29udGVudCAuY29udGVudC13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIC00MHB4O1xufVxuOmhvc3QgaW9uLWNvbnRlbnQgLmNvbnRlbnQtd3JhcHBlci5jZW50ZXIge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuOmhvc3QgaW9uLWNvbnRlbnQgLmNvbnRlbnQtd3JhcHBlciAudGl0bGUge1xuICBmb250LXNpemU6IDI0cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG46aG9zdCBpb24tY29udGVudCAuY29udGVudC13cmFwcGVyIC5pbmZvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAxMHB4IDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG46aG9zdCBpb24tY29udGVudCAuY29udGVudC13cmFwcGVyIC5pbmZvIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiA0NXB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG46aG9zdCBpb24tY29udGVudCAuY29udGVudC13cmFwcGVyIC5zb2NpYWwtYnV0dG9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG46aG9zdCBpb24tY29udGVudCAuY29udGVudC13cmFwcGVyIC5zb2NpYWwtYnV0dG9ucyBpb24tYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG59XG46aG9zdCBpb24tY29udGVudCAuY29udGVudC13cmFwcGVyIC50ZXJtcyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAxMHB4IDAgMDtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuOmhvc3QgaW9uLWNvbnRlbnQgLmNvbnRlbnQtd3JhcHBlciAucmVtZW1iZXItbWUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBmb250LXNpemU6IDEzcHg7XG59XG46aG9zdCBpb24tY29udGVudCAuY29udGVudC13cmFwcGVyIC5yZW1lbWJlci1tZSAucmVtZW1iZXItbWUtdGV4dCB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/pages/auth/components/login/login.component.ts":
/*!************************************************************!*\
  !*** ./src/pages/auth/components/login/login.component.ts ***!
  \************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/shared/helpers/extender */ "./src/shared/helpers/extender.ts");
/* harmony import */ var _helpers_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helpers/constants */ "./src/pages/auth/helpers/constants.ts");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/auth/auth.service */ "./src/pages/auth/services/auth/auth.service.ts");







/**
 * handle user authentication via email and also social login
 * access forgot password and register pages
 */
var LoginComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](LoginComponent, _super);
    function LoginComponent(injector, authService, storage) {
        var _this = _super.call(this, injector) || this;
        _this.injector = injector;
        _this.authService = authService;
        _this.storage = storage;
        _this.provider = _helpers_constants__WEBPACK_IMPORTED_MODULE_5__["SocialAuthProvider"];
        _this.fbLoading = false;
        _this.gplusLoading = false;
        _this.model = {
            email: 'hello@ezyapps.co.uk',
            password: 'password123'
        };
        _this.rememberMe = false;
        _this.successPromise = function () {
            _this.loading = false;
            _this.fbLoading = false;
            _this.gplusLoading = false;
            _this.goto(_this.routes.dashboard);
        };
        _this.failPromise = function (err) {
            _this.fbLoading = false;
            _this.gplusLoading = false;
            _this.loading = false;
            _this.toast(err);
        };
        return _this;
    }
    /** get username from storage if available,
     * set remember me property is user name available,
     * set email property with username
     */
    LoginComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var username;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.get('username')];
                    case 1:
                        username = _a.sent();
                        this.rememberMe = username ? true : false;
                        this.model.email = username ? username : this.model.email;
                        this.activatedRoute.queryParams.subscribe(function (param) {
                            if (param && param.emailVerified) {
                                _this.emailVerified = param.emailVerified;
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    /** if remember me checkbox ticked, save username. if unticked, remove username */
    LoginComponent.prototype.doRememberMe = function () {
        if (this.rememberMe && this.model.email) {
            this.storage.set('username', this.model.email);
            return;
        }
        this.storage.remove('username');
    };
    /** login user, handle remember me and route to dashboard when complete */
    LoginComponent.prototype.login = function () {
        var _this = this;
        if (!this.model.email) {
            return;
        }
        if (this.form.valid) {
            this.loading = true;
            this.doRememberMe();
            this.authService
                .signIn(this.model)
                .then(this.successPromise)
                .catch(function (err) { return _this.failPromise(err); });
        }
        else {
            this.toast(this.translate.instant('form-validation-messages.form-incomplete'));
        }
    };
    /** users facebook or google social to login based on provider type
     * on success, navigate to dashboard page
     */
    LoginComponent.prototype.socialLoginIn = function (provider) {
        var _this = this;
        if (provider === this.provider.google) {
            this.gplusLoading = true;
        }
        else {
            this.fbLoading = true;
        }
        this.authService
            .socialogin(provider)
            .then(this.successPromise)
            .catch(function (err) { return _this.failPromise(err); });
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
        { type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('form', null),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], LoginComponent.prototype, "form", void 0);
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/pages/auth/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/pages/auth/components/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]])
    ], LoginComponent);
    return LoginComponent;
}(src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_4__["Extender"]));



/***/ }),

/***/ "./src/pages/auth/components/register/register.component.scss":
/*!********************************************************************!*\
  !*** ./src/pages/auth/components/register/register.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ion-content {\n  --background: var(--ion-color-light);\n}\n:host ion-content .content-wrapper {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: 0 -40px;\n  -webkit-box-flex: 1;\n          flex: 1;\n  flex-shrink: 0;\n}\n:host ion-content .content-wrapper.center {\n  -webkit-box-pack: center;\n          justify-content: center;\n  align-self: center;\n}\n:host ion-content .content-wrapper .title {\n  font-size: 24px;\n  margin-bottom: 10px;\n}\n:host ion-content .content-wrapper .subtitle {\n  margin: 20px 0;\n  text-align: center;\n  color: var(--ion-color-medium-shade);\n}\n:host ion-content .content-wrapper .social-buttons {\n  display: -webkit-box;\n  display: flex;\n}\n:host ion-content .content-wrapper .social-buttons ion-button {\n  width: 100%;\n}\n:host ion-content .content-wrapper .terms {\n  text-align: center;\n  margin: 10px 0 0;\n  font-size: 13px;\n}\n:host ion-content .content-wrapper .remember-me {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  margin-bottom: 15px;\n  font-size: 13px;\n}\n:host ion-content .content-wrapper .remember-me .remember-me-text {\n  margin-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wYWdlcy9hdXRoL2NvbXBvbmVudHMvcmVnaXN0ZXIvQzpcXFVzZXJzXFxkZDQyNFxcZGVza3RvcFxcRGV2ZWxvcFxcZXp5YXBwc191ay1jb21wbGV0ZS1maXJlLXN0YXJ0ZXItYzYyOGQzZmMxZmRlL3NyY1xccGFnZXNcXGF1dGhcXGNvbXBvbmVudHNcXHJlZ2lzdGVyXFxyZWdpc3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9wYWdlcy9hdXRoL2NvbXBvbmVudHMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxvQ0FBQTtBQ0FKO0FERUk7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHdCQUFBO0VBQ0EsNEJBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO1VBQUEsT0FBQTtFQUNBLGNBQUE7QUNBTjtBRENNO0VBQ0Usd0JBQUE7VUFBQSx1QkFBQTtFQUNBLGtCQUFBO0FDQ1I7QURFTTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtBQ0FSO0FER007RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQ0FBQTtBQ0RSO0FESU07RUFDRSxvQkFBQTtFQUFBLGFBQUE7QUNGUjtBRElRO0VBQ0UsV0FBQTtBQ0ZWO0FETU07RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0pSO0FET007RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDTFI7QURNUTtFQUNFLGlCQUFBO0FDSlYiLCJmaWxlIjoic3JjL3BhZ2VzL2F1dGgvY29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgaW9uLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcblxuICAgIC5jb250ZW50LXdyYXBwZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIC00MHB4O1xuICAgICAgZmxleDogMTtcbiAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgICAgJi5jZW50ZXIge1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICAudGl0bGUge1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICB9XG5cbiAgICAgIC5zdWJ0aXRsZSB7XG4gICAgICAgIG1hcmdpbjogMjBweCAwO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbiAgICAgIH1cblxuICAgICAgLnNvY2lhbC1idXR0b25zIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcblxuICAgICAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAudGVybXMge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbjogMTBweCAwIDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgIH1cblxuICAgICAgLnJlbWVtYmVyLW1lIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAucmVtZW1iZXItbWUtdGV4dCB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIjpob3N0IGlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xufVxuOmhvc3QgaW9uLWNvbnRlbnQgLmNvbnRlbnQtd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAtNDBweDtcbiAgZmxleDogMTtcbiAgZmxleC1zaHJpbms6IDA7XG59XG46aG9zdCBpb24tY29udGVudCAuY29udGVudC13cmFwcGVyLmNlbnRlciB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG46aG9zdCBpb24tY29udGVudCAuY29udGVudC13cmFwcGVyIC50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbjpob3N0IGlvbi1jb250ZW50IC5jb250ZW50LXdyYXBwZXIgLnN1YnRpdGxlIHtcbiAgbWFyZ2luOiAyMHB4IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xufVxuOmhvc3QgaW9uLWNvbnRlbnQgLmNvbnRlbnQtd3JhcHBlciAuc29jaWFsLWJ1dHRvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuOmhvc3QgaW9uLWNvbnRlbnQgLmNvbnRlbnQtd3JhcHBlciAuc29jaWFsLWJ1dHRvbnMgaW9uLWJ1dHRvbiB7XG4gIHdpZHRoOiAxMDAlO1xufVxuOmhvc3QgaW9uLWNvbnRlbnQgLmNvbnRlbnQtd3JhcHBlciAudGVybXMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMTBweCAwIDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cbjpob3N0IGlvbi1jb250ZW50IC5jb250ZW50LXdyYXBwZXIgLnJlbWVtYmVyLW1lIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuOmhvc3QgaW9uLWNvbnRlbnQgLmNvbnRlbnQtd3JhcHBlciAucmVtZW1iZXItbWUgLnJlbWVtYmVyLW1lLXRleHQge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/pages/auth/components/register/register.component.ts":
/*!******************************************************************!*\
  !*** ./src/pages/auth/components/register/register.component.ts ***!
  \******************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/shared/helpers/extender */ "./src/shared/helpers/extender.ts");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth/auth.service */ "./src/pages/auth/services/auth/auth.service.ts");





/**
 * get user details from user and sign them up to firebase.
 * once signed up, send verification email to the users email.
 */
var RegisterComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](RegisterComponent, _super);
    function RegisterComponent(injector, authService) {
        var _this = _super.call(this, injector) || this;
        _this.injector = injector;
        _this.authService = authService;
        _this.model = {
            displayName: null,
            email: '',
            password: '',
            rpassword: null
        };
        /** send verification email to the users email and navigate to verify page */
        _this.successPromise = function () {
            _this.loading = false;
            _this.authService.sendEmailVerification();
            _this.goto(_this.routes.verifyEmail);
        };
        _this.failPromise = function (err) {
            _this.loading = false;
            _this.toast(err);
        };
        return _this;
    }
    /** collect user basic info and sign up user to app using firebase auth */
    RegisterComponent.prototype.signup = function () {
        var _this = this;
        if (this.form.valid) {
            this.loading = true;
            this.authService
                .signUp(this.model)
                .then(this.successPromise)
                .catch(function (err) { return _this.failPromise(err); });
        }
        else {
            this.toast(this.translate.instant('form-validation-messages.form-incomplete'));
        }
    };
    RegisterComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
        { type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('form', null),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], RegisterComponent.prototype, "form", void 0);
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/index.js!./src/pages/auth/components/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/pages/auth/components/register/register.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], RegisterComponent);
    return RegisterComponent;
}(src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_3__["Extender"]));



/***/ }),

/***/ "./src/pages/auth/components/verify-email/verify-email.component.scss":
/*!****************************************************************************!*\
  !*** ./src/pages/auth/components/verify-email/verify-email.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .content-wrapper .wrapper {\n  display: -webkit-box;\n  display: flex;\n  height: 100%;\n}\n:host .content-wrapper .wrapper .content-scroll {\n  height: calc(100% - 90px) !important;\n  width: 100%;\n  padding: 0 20px;\n}\n:host .content-wrapper .wrapper .content-scroll .subtitle {\n  margin: 10px 0 0;\n  font-size: 18px;\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n:host .content-wrapper .wrapper .content-scroll .info {\n  margin: 0 5px 30px;\n  color: var(--ion-color-medium-shade);\n  font-size: 14px;\n}\n:host .content-wrapper .wrapper .content-scroll .info a {\n  color: var(--ion-color-primary);\n}\n:host .content-wrapper .wrapper .content-scroll .resend-btn {\n  margin-bottom: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wYWdlcy9hdXRoL2NvbXBvbmVudHMvdmVyaWZ5LWVtYWlsL0M6XFxVc2Vyc1xcZGQ0MjRcXGRlc2t0b3BcXERldmVsb3BcXGV6eWFwcHNfdWstY29tcGxldGUtZmlyZS1zdGFydGVyLWM2MjhkM2ZjMWZkZS9zcmNcXHBhZ2VzXFxhdXRoXFxjb21wb25lbnRzXFx2ZXJpZnktZW1haWxcXHZlcmlmeS1lbWFpbC5jb21wb25lbnQuc2NzcyIsInNyYy9wYWdlcy9hdXRoL2NvbXBvbmVudHMvdmVyaWZ5LWVtYWlsL3ZlcmlmeS1lbWFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLFlBQUE7QUNETjtBREdNO0VBQ0Usb0NBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ0RSO0FER1E7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtVQUFBLE9BQUE7QUNEVjtBRElRO0VBQ0Usa0JBQUE7RUFDQSxvQ0FBQTtFQUNBLGVBQUE7QUNGVjtBREdVO0VBQ0UsK0JBQUE7QUNEWjtBRElRO0VBQ0UsbUJBQUE7QUNGViIsImZpbGUiOiJzcmMvcGFnZXMvYXV0aC9jb21wb25lbnRzL3ZlcmlmeS1lbWFpbC92ZXJpZnktZW1haWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIC5jb250ZW50LXdyYXBwZXIge1xuICAgIC53cmFwcGVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICAgIC5jb250ZW50LXNjcm9sbCB7XG4gICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gOTBweCkgIWltcG9ydGFudDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmc6IDAgMjBweDtcblxuICAgICAgICAuc3VidGl0bGUge1xuICAgICAgICAgIG1hcmdpbjogMTBweCAwIDA7XG4gICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgIH1cblxuICAgICAgICAuaW5mbyB7XG4gICAgICAgICAgbWFyZ2luOiAwIDVweCAzMHB4O1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgYSB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAucmVzZW5kLWJ0biB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiOmhvc3QgLmNvbnRlbnQtd3JhcHBlciAud3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMTAwJTtcbn1cbjpob3N0IC5jb250ZW50LXdyYXBwZXIgLndyYXBwZXIgLmNvbnRlbnQtc2Nyb2xsIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA5MHB4KSAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMCAyMHB4O1xufVxuOmhvc3QgLmNvbnRlbnQtd3JhcHBlciAud3JhcHBlciAuY29udGVudC1zY3JvbGwgLnN1YnRpdGxlIHtcbiAgbWFyZ2luOiAxMHB4IDAgMDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmbGV4OiAxO1xufVxuOmhvc3QgLmNvbnRlbnQtd3JhcHBlciAud3JhcHBlciAuY29udGVudC1zY3JvbGwgLmluZm8ge1xuICBtYXJnaW46IDAgNXB4IDMwcHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuOmhvc3QgLmNvbnRlbnQtd3JhcHBlciAud3JhcHBlciAuY29udGVudC1zY3JvbGwgLmluZm8gYSB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG46aG9zdCAuY29udGVudC13cmFwcGVyIC53cmFwcGVyIC5jb250ZW50LXNjcm9sbCAucmVzZW5kLWJ0biB7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/pages/auth/components/verify-email/verify-email.component.ts":
/*!**************************************************************************!*\
  !*** ./src/pages/auth/components/verify-email/verify-email.component.ts ***!
  \**************************************************************************/
/*! exports provided: VerifyEmailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyEmailComponent", function() { return VerifyEmailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/shared/helpers/extender */ "./src/shared/helpers/extender.ts");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth/auth.service */ "./src/pages/auth/services/auth/auth.service.ts");




/**
 * users are redirected to verify page if they do not have their emails verified
 * here they can resend a verification code or go back to login page
 */
var VerifyEmailComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](VerifyEmailComponent, _super);
    function VerifyEmailComponent(injector, authService) {
        var _this = _super.call(this, injector) || this;
        _this.injector = injector;
        _this.authService = authService;
        return _this;
    }
    /** get current user on component init */
    VerifyEmailComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.authService.getUser()];
                    case 1:
                        _a.currentUser = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /** send verification email to users email address */
    VerifyEmailComponent.prototype.resendVerificationEmail = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authService.sendEmailVerification()];
                    case 1:
                        _a.sent();
                        this.toast(this.translate.instant('verify-email-component.verification-email-sent'));
                        return [2 /*return*/];
                }
            });
        });
    };
    /** go back to login page and sign out the user from the app */
    VerifyEmailComponent.prototype.back = function () {
        var _this = this;
        this.authService.signOut().then(function () {
            _this.goto(_this.routes.login);
        });
    };
    VerifyEmailComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
        { type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
    ]; };
    VerifyEmailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-verify-email',
            template: __webpack_require__(/*! raw-loader!./verify-email.component.html */ "./node_modules/raw-loader/index.js!./src/pages/auth/components/verify-email/verify-email.component.html"),
            styles: [__webpack_require__(/*! ./verify-email.component.scss */ "./src/pages/auth/components/verify-email/verify-email.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], VerifyEmailComponent);
    return VerifyEmailComponent;
}(src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_2__["Extender"]));



/***/ }),

/***/ "./src/pages/auth/guards/verify-email/verify-email.guard.ts":
/*!******************************************************************!*\
  !*** ./src/pages/auth/guards/verify-email/verify-email.guard.ts ***!
  \******************************************************************/
/*! exports provided: VerifyEmailGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyEmailGuard", function() { return VerifyEmailGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/shared/helpers/extender */ "./src/shared/helpers/extender.ts");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth/auth.service */ "./src/pages/auth/services/auth/auth.service.ts");





/**
 * check if user is verified, if they are verified, got to dashboard
 * else stay on verified page
 */
var VerifyEmailGuard = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](VerifyEmailGuard, _super);
    function VerifyEmailGuard(injector, auth) {
        var _this = _super.call(this, injector) || this;
        _this.injector = injector;
        _this.auth = auth;
        return _this;
    }
    VerifyEmailGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return this.auth.user.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (user) {
            if (!!user && _this.auth.emailVerified) {
                _this.goto(_this.routes.dashboard);
            }
            return true;
        }));
    };
    VerifyEmailGuard.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
        { type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
    ]; };
    VerifyEmailGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], VerifyEmailGuard);
    return VerifyEmailGuard;
}(src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_3__["Extender"]));



/***/ })

}]);
//# sourceMappingURL=pages-auth-auth-module-es5.js.map