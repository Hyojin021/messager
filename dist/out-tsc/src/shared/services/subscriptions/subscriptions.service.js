import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
/**
 * @class SubscriptionsService
 * handle subscriptions https://github.com/angular/angularfire/issues/1459
 */
let SubscriptionsService = class SubscriptionsService {
    constructor() {
        this.subscriptions = [];
    }
    forceSubscriptionDestroy() {
        for (const sub of this.subscriptions) {
            sub.unsubscribe();
        }
    }
};
SubscriptionsService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [])
], SubscriptionsService);
export { SubscriptionsService };
//# sourceMappingURL=subscriptions.service.js.map