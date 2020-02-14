import * as tslib_1 from "tslib";
import { Component, Injector } from '@angular/core';
import { Extender } from 'src/shared/helpers/extender';
import { TermsAndConditionsComponent } from 'src/shared/modals/terms-and-conditions/terms-and-conditions.component';
import { SocialAuthProvider } from '../../helpers/constants';
import { AuthService } from '../../services/auth/auth.service';
/**
 * navigate to login or use social login, access to terms and conditions modal
 */
let AuthComponent = class AuthComponent extends Extender {
    constructor(injector, authService) {
        super(injector);
        this.injector = injector;
        this.authService = authService;
        /** stores enum of social providers */
        this.provider = SocialAuthProvider;
        /** loader for facebook button in template */
        this.fbLoading = false;
        /** loader for facebook button in template */
        this.gplusLoading = false;
        /** common success promise callback */
        this.successPromise = () => {
            this.loading = false;
            this.fbLoading = false;
            this.gplusLoading = false;
            this.goto(this.routes.dashboard);
        };
        /** common failed promise callback */
        this.failPromise = (err) => {
            this.fbLoading = false;
            this.gplusLoading = false;
            this.loading = false;
            this.toast(err);
        };
    }
    /** users facebook or google social to login based on provider type
     * on success, navigate to dashboard page
     */
    socialLogin(provider) {
        if (provider === this.provider.google) {
            this.gplusLoading = true;
        }
        else {
            this.fbLoading = true;
        }
        this.authService
            .socialogin(provider)
            .then(this.successPromise)
            .catch((err) => this.failPromise(err));
    }
    /** open terms and conditions modal */
    openTermsAndConditions() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const modal = yield this.openModal(TermsAndConditionsComponent);
            modal.present();
        });
    }
};
AuthComponent = tslib_1.__decorate([
    Component({
        selector: 'app-auth',
        templateUrl: './auth.component.html',
        styleUrls: ['./auth.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [Injector, AuthService])
], AuthComponent);
export { AuthComponent };
//# sourceMappingURL=auth.component.js.map