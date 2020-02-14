import * as tslib_1 from "tslib";
import { Injectable, Injector } from '@angular/core';
import { map, take, tap } from 'rxjs/operators';
import { Extender } from 'src/shared/helpers/extender';
import { AuthService } from '../../services/auth/auth.service';
/**
 * check if user is logged in or not
 * if not, route to login page. if user is logged in but account deactivated, route to deactivated account page
 */
let AuthGuard = class AuthGuard extends Extender {
    constructor(injector, auth) {
        super(injector);
        this.injector = injector;
        this.auth = auth;
    }
    /** check if user is logged in or not if not, route to login page.
     * if user is logged in but account deactivated, route to deactivated account page
     */
    canActivate(next, state) {
        return this.auth.user.pipe(take(1), map((user) => {
            this.user = user;
            return !!user;
        }), tap((loggedIn) => {
            if (!loggedIn) {
                this.goto(this.routes.login);
            }
            if (this.user.deactivated) {
                this.goto(this.routes.deactivated);
            }
            if (!this.auth.emailVerified) {
                this.goto(this.routes.verifyEmail);
            }
        }));
    }
};
AuthGuard = tslib_1.__decorate([
    Injectable({ providedIn: 'root' }),
    tslib_1.__metadata("design:paramtypes", [Injector, AuthService])
], AuthGuard);
export { AuthGuard };
//# sourceMappingURL=auth.guard.js.map