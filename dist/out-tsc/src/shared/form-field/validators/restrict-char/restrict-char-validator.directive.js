import * as tslib_1 from "tslib";
import { Directive, forwardRef, HostListener, Input } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import { maskDigitValidators, neverValidator } from '../../directives/input-mask/helpers/digit-validators';
const numRegex = /\d/;
const textRegex = /^[a-zA-Z ]*$/;
const CHAR_VALIDATOR = {
    multi: true,
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => RestrictCharValidatorDirective)
};
let RestrictCharValidatorDirective = class RestrictCharValidatorDirective {
    validate(control) {
        let returnVal;
        if (this.restrict === 'text') {
            returnVal = numRegex.test(control.value) ? { textOnly: true } : null;
        }
        else {
            returnVal = textRegex.test(control.value) ? { numberOnly: true } : null;
        }
        return returnVal;
    }
    /**
     * on keypress validate input is numeric, is a card number and format card number
     * @method onKeypress
     * @return {void}
     */
    onKeypress(event, keyCode) {
        const key = String.fromCharCode(keyCode);
        const digitValidator = maskDigitValidators['T'] || neverValidator;
        if (this.restrict === 'number') {
            if (digitValidator(key)) {
                event.preventDefault();
            }
        }
        else if (this.restrict === 'text') {
            if (!digitValidator(key)) {
                event.preventDefault();
            }
        }
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], RestrictCharValidatorDirective.prototype, "restrict", void 0);
tslib_1.__decorate([
    HostListener('keypress', ['$event', '$event.keyCode']),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Number]),
    tslib_1.__metadata("design:returntype", void 0)
], RestrictCharValidatorDirective.prototype, "onKeypress", null);
RestrictCharValidatorDirective = tslib_1.__decorate([
    Directive({
        providers: [CHAR_VALIDATOR],
        selector: '[restrict][ngModel]'
    })
], RestrictCharValidatorDirective);
export { RestrictCharValidatorDirective };
//# sourceMappingURL=restrict-char-validator.directive.js.map