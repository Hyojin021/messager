import * as tslib_1 from "tslib";
import { Directive, ElementRef, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';
let InputRefDirective = class InputRefDirective {
    constructor(_el, _control) {
        this._el = _el;
        this._control = _control;
        this.focus = false;
        this.element = this._el.nativeElement;
        this.control = this._control;
    }
    onFocus() {
        this.focus = true;
    }
    onBlur() {
        this.focus = false;
    }
};
tslib_1.__decorate([
    HostListener('focus'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], InputRefDirective.prototype, "onFocus", null);
tslib_1.__decorate([
    HostListener('blur'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], InputRefDirective.prototype, "onBlur", null);
InputRefDirective = tslib_1.__decorate([
    Directive({
        selector: '[inputRef]'
    }),
    tslib_1.__metadata("design:paramtypes", [ElementRef,
        NgControl])
], InputRefDirective);
export { InputRefDirective };
//# sourceMappingURL=input-ref.directive.js.map