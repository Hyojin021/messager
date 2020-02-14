import * as tslib_1 from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
let RatingComponent = class RatingComponent {
    constructor() {
        /** changes rating color */
        this.color = 'primary';
        /** emit change event */
        this.updateRate = new EventEmitter();
        /** stores range for rating */
        this.range = [1, 2, 3, 4, 5];
    }
    /** update rate and emit updated value */
    update(value) {
        this.rate = value;
        this.updateRate.emit(value);
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Number)
], RatingComponent.prototype, "rate", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], RatingComponent.prototype, "color", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], RatingComponent.prototype, "updateRate", void 0);
RatingComponent = tslib_1.__decorate([
    Component({
        selector: 'app-rating',
        templateUrl: './rating.component.html',
        styleUrls: ['./rating.component.scss']
    })
], RatingComponent);
export { RatingComponent };
//# sourceMappingURL=rating.component.js.map