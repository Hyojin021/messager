import * as tslib_1 from "tslib";
import { Component, Injector } from '@angular/core';
import { AuthService } from 'src/pages/auth/services/auth/auth.service';
import { Extender } from 'src/shared/helpers/extender';
import { FirestoreService } from 'src/shared/services/firestore/firestore.service';
let ReviewComponent = class ReviewComponent extends Extender {
    constructor(injector, authService, firestoreService) {
        super(injector);
        this.injector = injector;
        this.authService = authService;
        this.firestoreService = firestoreService;
        this.model = { rating: 0, comment: '', uid: '' };
    }
    /** get user id and assign to model */
    ngOnInit() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const { uid } = yield this.authService.getUser();
            this.model.uid = uid;
        });
    }
    /** update rating value */
    update(val) {
        this.model.rating = val;
    }
    /** save feedback */
    save() {
        this.firestoreService.add(`feedback`, this.model).then(() => {
            this.toast(this.translate.instant('feedback-component.success-message'));
            this.closeModal();
        });
    }
};
ReviewComponent = tslib_1.__decorate([
    Component({
        selector: 'app-review',
        templateUrl: './review.component.html',
        styleUrls: ['./review.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [Injector, AuthService, FirestoreService])
], ReviewComponent);
export { ReviewComponent };
//# sourceMappingURL=review.component.js.map