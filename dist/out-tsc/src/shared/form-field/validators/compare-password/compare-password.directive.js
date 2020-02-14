import * as tslib_1 from "tslib";
import { Directive, forwardRef, Input } from '@angular/core';
import { FormControl, NG_VALIDATORS } from '@angular/forms';
const COMPARE_TO_VALIDATOR = {
    multi: true,
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => ComparePasswordDirective)
};
let ComparePasswordDirective = class ComparePasswordDirective {
    validate(control) {
        return control.value === this.comparedControl.value ? null : { compareTo: true };
    }
};
tslib_1.__decorate([
    Input('compare-password'),
    tslib_1.__metadata("design:type", FormControl)
], ComparePasswordDirective.prototype, "comparedControl", void 0);
ComparePasswordDirective = tslib_1.__decorate([
    Directive({
        providers: [COMPARE_TO_VALIDATOR],
        selector: '[compare-password]'
    })
], ComparePasswordDirective);
export { ComparePasswordDirective };
//# sourceMappingURL=compare-password.directive.js.map