import * as tslib_1 from "tslib";
import { Component, Injector } from '@angular/core';
import { Extender } from 'src/shared/helpers/extender';
import { FirestoreService } from 'src/shared/services/firestore/firestore.service';
import { AuthService } from '../../services/auth/auth.service';
/**
 * this page is shown when a user deactivate their account.
 * user account deactivation is just a boolean in user document that can be toggled in settings
 * every time a user logs in the user is redirected to this page using the auth guard
 * if they have deactivated their account
 */
let DeactivatedAccountComponent = class DeactivatedAccountComponent extends Extender {
    constructor(injector, authService, firestoreService) {
        super(injector);
        this.injector = injector;
        this.authService = authService;
        this.firestoreService = firestoreService;
    }
    /** get current user */
    ngOnInit() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.currentUser = yield this.authService.getUser();
        });
    }
    /** reactivate a user account, sign out user and navigate to login page */
    reactivate() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const user = yield this.authService.getUser();
            this.loading = true;
            user.deactivated = false;
            this.firestoreService
                .update(`users/${user.uid}`, user)
                .then(() => {
                this.loading = false;
                this.authService.signOut();
                this.goto(this.routes.login);
                this.toast(this.translate.instant('deactivated-account-component.reactivated-success-message'));
            })
                .catch((err) => this.toast(err));
        });
    }
};
DeactivatedAccountComponent = tslib_1.__decorate([
    Component({
        selector: 'app-deactivated-account',
        templateUrl: './deactivated-account.component.html',
        styleUrls: ['./deactivated-account.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [Injector, AuthService, FirestoreService])
], DeactivatedAccountComponent);
export { DeactivatedAccountComponent };
//# sourceMappingURL=deactivated-account.component.js.map