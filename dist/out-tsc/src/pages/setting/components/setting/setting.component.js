import * as tslib_1 from "tslib";
import { Component, Injector } from '@angular/core';
import { AuthService } from 'src/pages/auth/services/auth/auth.service';
import { Extender } from 'src/shared/helpers/extender';
import { SettingService } from '../../services/setting/setting.service';
/**
 * manage users preferences
 */
let SettingComponent = class SettingComponent extends Extender {
    constructor(injector, authService, settingService) {
        super(injector);
        this.injector = injector;
        this.authService = authService;
        this.settingService = settingService;
    }
    /** get settings and setting options from settings service. set uid to current user id.
     *  this is necessary if no settings has been saved previously
     */
    ngOnInit() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.currentUser = yield this.authService.getUser();
            this.subscriptions.push(this.settingService.getUserSettings(this.currentUser.uid).subscribe((data) => {
                this.setting = data;
                this.setting.uid = this.currentUser.uid;
            }));
            this.subscriptions.push(this.settingService.settingsOptions.subscribe((data) => (this.settingOptions = data)));
        });
    }
    /** save or update user preferences  */
    save() {
        this.settingService.upsertPreferences(this.settingService.setting);
    }
    /** logout and return to welcome or auth screen */
    signOut() {
        const { hideWalkthrough } = this.setting;
        this.authService.signOut().then(() => {
            if (hideWalkthrough) {
                this.goto(this.routes.auth);
            }
            else {
                this.goto(this.routes.welcome);
            }
        });
    }
};
SettingComponent = tslib_1.__decorate([
    Component({
        selector: 'app-setting',
        templateUrl: './setting.component.html',
        styleUrls: ['./setting.component.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [Injector, AuthService, SettingService])
], SettingComponent);
export { SettingComponent };
//# sourceMappingURL=setting.component.js.map