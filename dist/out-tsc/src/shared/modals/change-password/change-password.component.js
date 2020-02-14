import * as tslib_1 from "tslib";
import { Component, Injector } from '@angular/core';
import { AuthService } from 'src/pages/auth/services/auth/auth.service';
import { Extender } from 'src/shared/helpers/extender';
import { FirestoreService } from 'src/shared/services/firestore/firestore.service';
/** present screen to allow user to change password */
let ChangePasswordComponent = class ChangePasswordComponent extends Extender {
    constructor(injector, authService, firestoreService) {
        super(injector);
        this.injector = injector;
        this.authService = authService;
        this.firestoreService = firestoreService;
        this.model = {
            oldPassword: null,
            password: null,
            rpassword: null
        };
        this.failPromise = (err) => {
            this.loading = false;
            this.toast(err);
        };
    }
    /** get current user */
    ngOnInit() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.currentUser = yield this.authService.getUser();
        });
    }
    /**
     * update user password and close modal
     */
    changePassword() {
        this.loading = true;
        this.authService
            .updatePassword(this.model.oldPassword, this.model.password)
            .then(() => {
            this.loading = false;
            this.closeModal();
            this.toast('Password Changed');
        })
            .catch((err) => this.failPromise(err));
    }
};
ChangePasswordComponent = tslib_1.__decorate([
    Component({
        selector: 'app-change-password',
        templateUrl: './change-password.component.html',
        styleUrls: ['./change-password.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [Injector, AuthService, FirestoreService])
], ChangePasswordComponent);
export { ChangePasswordComponent };
//# sourceMappingURL=change-password.component.js.map