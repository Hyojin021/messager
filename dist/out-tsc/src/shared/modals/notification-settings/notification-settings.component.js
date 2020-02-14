import * as tslib_1 from "tslib";
import { Component, Injector } from '@angular/core';
import { AuthService } from 'src/pages/auth/services/auth/auth.service';
import { Extender } from 'src/shared/helpers/extender';
import { FirestoreService } from 'src/shared/services/firestore/firestore.service';
let NotificationSettingsComponent = class NotificationSettingsComponent extends Extender {
    constructor(injector, authService, firestoreService) {
        super(injector);
        this.injector = injector;
        this.authService = authService;
        this.firestoreService = firestoreService;
        this.model = null;
    }
    /** get settings and current user */
    ngOnInit() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const { uid } = yield this.authService.getUser();
            this.firestoreService.doc$(`preferences/${uid}`).subscribe((setting) => (this.model = setting));
        });
    }
    /** save preference */
    savePreference(setting) {
        this.firestoreService.set(`preferences/${this.model.uid}`, setting);
    }
};
NotificationSettingsComponent = tslib_1.__decorate([
    Component({
        selector: 'app-notification-settings',
        templateUrl: './notification-settings.component.html',
        styleUrls: ['./notification-settings.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [Injector, AuthService, FirestoreService])
], NotificationSettingsComponent);
export { NotificationSettingsComponent };
//# sourceMappingURL=notification-settings.component.js.map