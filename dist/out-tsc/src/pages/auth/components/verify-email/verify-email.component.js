import * as tslib_1 from "tslib";
import { Component, Injector } from '@angular/core';
import { Extender } from 'src/shared/helpers/extender';
import { AuthService } from '../../services/auth/auth.service';
/**
 * users are redirected to verify page if they do not have their emails verified
 * here they can resend a verification code or go back to login page
 */
let VerifyEmailComponent = class VerifyEmailComponent extends Extender {
    constructor(injector, authService) {
        super(injector);
        this.injector = injector;
        this.authService = authService;
    }
    /** get current user on component init */
    ngOnInit() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.currentUser = yield this.authService.getUser();
        });
    }
    /** send verification email to users email address */
    resendVerificationEmail() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.authService.sendEmailVerification();
            this.toast(this.translate.instant('verify-email-component.verification-email-sent'));
        });
    }
    /** go back to login page and sign out the user from the app */
    back() {
        this.authService.signOut().then(() => {
            this.goto(this.routes.login);
        });
    }
};
VerifyEmailComponent = tslib_1.__decorate([
    Component({
        selector: 'app-verify-email',
        templateUrl: './verify-email.component.html',
        styleUrls: ['./verify-email.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [Injector, AuthService])
], VerifyEmailComponent);
export { VerifyEmailComponent };
//# sourceMappingURL=verify-email.component.js.map