import * as tslib_1 from "tslib";
import { Component, Injector, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { Extender } from 'src/shared/helpers/extender';
import { SocialAuthProvider } from '../../helpers/constants';
import { AuthService } from '../../services/auth/auth.service';
/**
 * handle user authentication via email and also social login
 * access forgot password and register pages
 */
let LoginComponent = class LoginComponent extends Extender {
    constructor(injector, authService, storage) {
        super(injector);
        this.injector = injector;
        this.authService = authService;
        this.storage = storage;
        this.provider = SocialAuthProvider;
        this.fbLoading = false;
        this.gplusLoading = false;
        this.model = {
            email: 'hello@ezyapps.co.uk',
            password: 'password123'
        };
        this.rememberMe = false;
        this.successPromise = () => {
            this.loading = false;
            this.fbLoading = false;
            this.gplusLoading = false;
            this.goto(this.routes.dashboard);
        };
        this.failPromise = (err) => {
            this.fbLoading = false;
            this.gplusLoading = false;
            this.loading = false;
            this.toast(err);
        };
    }
    /** get username from storage if available,
     * set remember me property is user name available,
     * set email property with username
     */
    ngOnInit() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const username = yield this.storage.get('username');
            this.rememberMe = username ? true : false;
            this.model.email = username ? username : this.model.email;
            this.activatedRoute.queryParams.subscribe((param) => {
                if (param && param.emailVerified) {
                    this.emailVerified = param.emailVerified;
                }
            });
        });
    }
    /** if remember me checkbox ticked, save username. if unticked, remove username */
    doRememberMe() {
        if (this.rememberMe && this.model.email) {
            this.storage.set('username', this.model.email);
            return;
        }
        this.storage.remove('username');
    }
    /** login user, handle remember me and route to dashboard when complete */
    login() {
        if (!this.model.email) {
            return;
        }
        if (this.form.valid) {
            this.loading = true;
            this.doRememberMe();
            this.authService
                .signIn(this.model)
                .then(this.successPromise)
                .catch((err) => this.failPromise(err));
        }
        else {
            this.toast(this.translate.instant('form-validation-messages.form-incomplete'));
        }
    }
    /** users facebook or google social to login based on provider type
     * on success, navigate to dashboard page
     */
    socialLoginIn(provider) {
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
};
tslib_1.__decorate([
    ViewChild('form', null),
    tslib_1.__metadata("design:type", NgForm)
], LoginComponent.prototype, "form", void 0);
LoginComponent = tslib_1.__decorate([
    Component({
        selector: 'app-login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [Injector, AuthService, Storage])
], LoginComponent);
export { LoginComponent };
//# sourceMappingURL=login.component.js.map