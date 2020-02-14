import * as tslib_1 from "tslib";
import { Component, Injector } from '@angular/core';
import { AuthService } from 'src/pages/auth/services/auth/auth.service';
import { Extender } from 'src/shared/helpers/extender';
import { FirestoreService } from 'src/shared/services/firestore/firestore.service';
let FeedbackComponent = class FeedbackComponent extends Extender {
    constructor(injector, authService, firestoreService) {
        super(injector);
        this.injector = injector;
        this.authService = authService;
        this.firestoreService = firestoreService;
        this.model = { uid: null, comment: '' };
    }
    /** save current user */
    ngOnInit() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const { uid } = yield this.authService.getUser();
            this.model.uid = uid;
        });
    }
    /** save feedback to feedback collection */
    save() {
        this.firestoreService.add(`feedback`, this.model).then(() => {
            this.toast(this.translate.instant('feedback-component.success-message'));
            this.closeModal();
        });
    }
};
FeedbackComponent = tslib_1.__decorate([
    Component({
        selector: 'app-feedback',
        templateUrl: './feedback.component.html',
        styleUrls: ['./feedback.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [Injector, AuthService, FirestoreService])
], FeedbackComponent);
export { FeedbackComponent };
//# sourceMappingURL=feedback.component.js.map