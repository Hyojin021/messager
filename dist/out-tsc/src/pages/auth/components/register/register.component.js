import * as tslib_1 from "tslib";
import { Component, Injector, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Extender } from 'src/shared/helpers/extender';
import { AuthService } from '../../services/auth/auth.service';
/**
 * get user details from user and sign them up to firebase.
 * once signed up, send verification email to the users email.
 */
let RegisterComponent = class RegisterComponent extends Extender {
    constructor(injector, authService) {
        super(injector);
        this.injector = injector;
        this.authService = authService;
        this.model = {
            displayName: null,
            email: '',
            password: '',
            rpassword: null
        };
        /** send verification email to the users email and navigate to verify page */
        this.successPromise = () => {
            this.loading = false;
            this.authService.sendEmailVerification();
            this.goto(this.routes.verifyEmail);
        };
        this.failPromise = (err) => {
            this.loading = false;
            this.toast(err);
        };
    }
    /** collect user basic info and sign up user to app using firebase auth */
    signup() {
        if (this.form.valid) {
            this.loading = true;
            this.authService
                .signUp(this.model)
                .then(this.successPromise)
                .catch((err) => this.failPromise(err));
        }
        else {
            this.toast(this.translate.instant('form-validation-messages.form-incomplete'));
        }
    }
};
tslib_1.__decorate([
    ViewChild('form', null),
    tslib_1.__metadata("design:type", NgForm)
], RegisterComponent.prototype, "form", void 0);
RegisterComponent = tslib_1.__decorate([
    Component({
        selector: 'app-register',
        templateUrl: './register.component.html',
        styleUrls: ['./register.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [Injector, AuthService])
], RegisterComponent);
export { RegisterComponent };
//# sourceMappingURL=register.component.js.map