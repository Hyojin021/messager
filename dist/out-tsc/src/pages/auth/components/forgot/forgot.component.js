import * as tslib_1 from "tslib";
import { Component, Injector, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Extender } from 'src/shared/helpers/extender';
import { AuthService } from '../../services/auth/auth.service';
/**
 * allows user to update their password
 * send a one time token to users email so that they can reset their password using firebase auth,
 * when user clicks the link in their email, they are redirected to this component with code in query params
 * check query-params and send code as well as new user password to change user password
 */
let ForgotComponent = class ForgotComponent extends Extender {
    constructor(injector, authService) {
        super(injector);
        this.injector = injector;
        this.authService = authService;
        this.isPasswordReset = false;
        this.hasRequested = false;
        this.model = { code: null, email: null, password: null, rpassword: null };
        this.failPromise = (err) => {
            this.loading = false;
            this.toast(err);
        };
    }
    /** subscribe to query param changes,
     * if the param oobCode, provided by firebase is included set isPassword reset property to true
     * store oobCode value in model property. the email route configurations are done in
     * https://console.firebase.google.com/u/1/project/complete-fire-starter/authentication/emails
     */
    ngOnInit() {
        this.subscriptions.push(this.activatedRoute.queryParams.subscribe((param) => {
            if (param && param.mode === 'resetPassword' && param.oobCode) {
                this.model.code = param.oobCode;
                this.isPasswordReset = true;
            }
        }));
    }
    /** allow firebase to send a password reset token to the users provided email */
    requestReset() {
        this.loading = true;
        if (this.emailForm.valid) {
            this.authService
                .sendPasswordReset(this.model.email)
                .then(() => {
                this.loading = false;
                this.hasRequested = true;
            })
                .catch((err) => this.failPromise(err));
        }
    }
    /** allow firebase to handle password change by providing new and retype new password */
    resetPassword() {
        this.loading = true;
        if (this.passwordForm.valid) {
            this.authService
                .confirmPasswordReset(this.model.code, this.model.password)
                .then(() => {
                this.loading = false;
                this.toast(this.translate.instant('forgot-component.reset-success'));
                this.goto(this.routes.login);
            })
                .catch((err) => this.failPromise(err));
        }
    }
};
tslib_1.__decorate([
    ViewChild('emailForm', null),
    tslib_1.__metadata("design:type", NgForm)
], ForgotComponent.prototype, "emailForm", void 0);
tslib_1.__decorate([
    ViewChild('passwordForm', null),
    tslib_1.__metadata("design:type", NgForm)
], ForgotComponent.prototype, "passwordForm", void 0);
ForgotComponent = tslib_1.__decorate([
    Component({
        selector: 'app-forgot',
        templateUrl: './forgot.component.html',
        styleUrls: ['./forgot.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [Injector, AuthService])
], ForgotComponent);
export { ForgotComponent };
//# sourceMappingURL=forgot.component.js.map