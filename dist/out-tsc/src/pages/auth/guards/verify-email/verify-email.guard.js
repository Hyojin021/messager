import * as tslib_1 from "tslib";
import { Injectable, Injector } from '@angular/core';
import { map, take } from 'rxjs/operators';
import { Extender } from 'src/shared/helpers/extender';
import { AuthService } from '../../services/auth/auth.service';
/**
 * check if user is verified, if they are verified, got to dashboard
 * else stay on verified page
 */
let VerifyEmailGuard = class VerifyEmailGuard extends Extender {
    constructor(injector, auth) {
        super(injector);
        this.injector = injector;
        this.auth = auth;
    }
    canActivate(next, state) {
        return this.auth.user.pipe(take(1), map((user) => {
            if (!!user && this.auth.emailVerified) {
                this.goto(this.routes.dashboard);
            }
            return true;
        }));
    }
};
VerifyEmailGuard = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [Injector, AuthService])
], VerifyEmailGuard);
export { VerifyEmailGuard };
//# sourceMappingURL=verify-email.guard.js.map