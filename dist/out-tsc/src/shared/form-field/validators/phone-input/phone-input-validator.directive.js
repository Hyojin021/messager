import * as tslib_1 from "tslib";
import { Directive, ElementRef, forwardRef, HostListener, Input } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import { isValidNumber, parsePhoneNumber } from 'libphonenumber-js';
import { maskDigitValidators, neverValidator } from '../../directives/input-mask/helpers/digit-validators';
const PHONE_VALIDATOR = {
    multi: true,
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => PhoneInputValidatorDirective),
};
let PhoneInputValidatorDirective = 
/**
 * phone number is validated by an external library google-libphonenumber.
 * the library validates the number input and the country code to make sure the phone number is valid.
 * country code is either set by siteconfiguration or by user detail country code
 * @todo chnage how default country code is set for when user is logged out
 * on blur, the phone number value is formatted with prepended country code if not already added
 * also restricts key input to numbers only
 *
 * @example <input name="mobile" [(ngModel)]="mobile" [phone]="GB">
 * @class PhoneInputValidatorDirective
 * @implements Validator
 * @author Spencer Anum
 * @updated 12/06/2018
 * @version 1.0.0
 */
class PhoneInputValidatorDirective {
    constructor(el) {
        this.el = el;
        this.country = 'GB';
        this.target = el.nativeElement;
    }
    /** on input blur format phone number */
    formatPhone() {
        if (!this.target.value) {
            return;
        }
        const phone = parsePhoneNumber(this.target.value, this.country.toUpperCase());
        if (isValidNumber(phone.number)) {
            this.target.value = phone.number;
        }
    }
    /** keypress validate input is numeric */
    onKeypress($event, keyCode) {
        const key = String.fromCharCode(keyCode);
        const digitValidator = maskDigitValidators[9] || neverValidator;
        if (!digitValidator(key)) {
            $event.preventDefault();
        }
    }
    /** validates the input value by first checking and replacing the preceeding value
     * then validating the number with isValidNumber method in libphonenumber-js library
     */
    validate(control) {
        if (control.value && control.value.length > 3) {
            this.phoneNumber = parsePhoneNumber(control.value, this.country.toUpperCase());
            if (this.phoneNumber) {
                if (!isValidNumber(this.phoneNumber.number)) {
                    return { phone: true };
                }
                else {
                    return;
                }
            }
        }
        return;
    }
};
tslib_1.__decorate([
    Input('phone'),
    tslib_1.__metadata("design:type", String)
], PhoneInputValidatorDirective.prototype, "country", void 0);
tslib_1.__decorate([
    HostListener('blur', ['$event']),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], PhoneInputValidatorDirective.prototype, "formatPhone", null);
tslib_1.__decorate([
    HostListener('keypress', ['$event', '$event.keyCode']),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [KeyboardEvent, Number]),
    tslib_1.__metadata("design:returntype", void 0)
], PhoneInputValidatorDirective.prototype, "onKeypress", null);
PhoneInputValidatorDirective = tslib_1.__decorate([
    Directive({
        providers: [PHONE_VALIDATOR],
        selector: '[phone][ngModel]',
    })
    /**
     * phone number is validated by an external library google-libphonenumber.
     * the library validates the number input and the country code to make sure the phone number is valid.
     * country code is either set by siteconfiguration or by user detail country code
     * @todo chnage how default country code is set for when user is logged out
     * on blur, the phone number value is formatted with prepended country code if not already added
     * also restricts key input to numbers only
     *
     * @example <input name="mobile" [(ngModel)]="mobile" [phone]="GB">
     * @class PhoneInputValidatorDirective
     * @implements Validator
     * @author Spencer Anum
     * @updated 12/06/2018
     * @version 1.0.0
     */
    ,
    tslib_1.__metadata("design:paramtypes", [ElementRef])
], PhoneInputValidatorDirective);
export { PhoneInputValidatorDirective };
//# sourceMappingURL=phone-input-validator.directive.js.map