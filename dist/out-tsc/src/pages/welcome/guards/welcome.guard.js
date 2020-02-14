import * as tslib_1 from "tslib";
import { Injectable, Injector } from '@angular/core';
import { map, take } from 'rxjs/operators';
import { AuthService } from 'src/pages/auth/services/auth/auth.service';
import { SettingService } from 'src/pages/setting/services/setting/setting.service';
import { Extender } from 'src/shared/helpers/extender';
/**
 * @class WelcomeGuard
 * @extends Extender
 * @implements CanActivate
 * guard against access to welcome page if user is already logged in
 */
let WelcomeGuard = class WelcomeGuard extends Extender {
    constructor(injector, authService, settingService) {
        super(injector);
        this.injector = injector;
        this.authService = authService;
        this.settingService = settingService;
    }
    /** pipe into firebase authService state. if user logged in route to dashboard, otherwise open welcome page
     * if user has set hideWalkthrough settings, redirect to login.
     * is rout has query params, run manageRoutesFromFirebaseEmail with query param data
     */
    canActivate(next, state) {
        return this.authService.user.pipe(take(1), map((user) => {
            this.manageRoutesFromFirebaseEmail(next);
            if (!!user) {
                this.goto(this.routes.dashboard);
            }
            if (this.settingService.setting && this.settingService.setting.hideWalkthrough) {
                this.goto(this.routes.login);
            }
            else {
                return true;
            }
        }));
    }
    /** manage where to redirect based query params. used in instances such as email verification.
     * where user verifies their email by clicking on an external like that routes to the site with verification code
     */
    manageRoutesFromFirebaseEmail(next) {
        const param = next.queryParams;
        switch (param.mode) {
            case 'resetPassword':
                this.goto(this.routes.forgot, { queryParams: param });
                break;
            case 'verifyEmail':
                this.authService.applyActionCode(param.oobCode).then(() => {
                    this.authService.signOut().then(() => {
                        this.goto(this.routes.login, { queryParams: { emailVerified: true } });
                    });
                });
                break;
        }
    }
};
WelcomeGuard = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [Injector, AuthService, SettingService])
], WelcomeGuard);
export { WelcomeGuard };
//# sourceMappingURL=welcome.guard.js.map