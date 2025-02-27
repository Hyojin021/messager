import * as tslib_1 from "tslib";
import { Directive, ElementRef, forwardRef, Input } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
const DATE_VALIDATOR = {
    multi: true,
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => DateValidatorDirective)
};
function ddmmyyyy(date) {
    const mm = date.getMonth() + 1; // getMonth() is zero-based
    const dd = date.getDate();
    return [
        (dd > 9 ? '' : '0') + dd,
        (mm > 9 ? '' : '0') + mm,
        date.getFullYear()
    ].join('/');
}
const datePattern = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
let DateValidatorDirective = class DateValidatorDirective {
    constructor(el) {
        this.el = el;
        this.setting = { max: null, noFutureDates: true, minDate: null, maxDate: null };
        this.target = el.nativeElement;
    }
    /**
     * validates date of birth is older than 18
     * @method validate
     * @param {AbstractControl} control
     * @public
     * @return {[key: string]: any }
     */
    validate(control) {
        return this.validateDate(control.value);
    }
    /**
     * validates date matches DD/MM/YYY except on ios devices
     * validates date of birth is older than 18
     * @method validateDate
     * @param {string} value
     * @private
     * @return { [key: string]: any }
     */
    validateDate(value) {
        let dateValue;
        if (!value) {
            return { invalidDate: true };
        }
        if (typeof value === 'string') {
            const dateAr = value.split('/');
            if (dateAr.length !== 3) {
                return { invalidDate: true };
            }
            // convert to us format MM/DD/YYYY
            dateValue = new Date(`${dateAr[1]}/${dateAr[0]}/${dateAr[2]}`);
            if (ddmmyyyy(dateValue) !== value) {
                return { invalidDate: true };
            }
        }
        if (this.setting.max !== null && dateValue && this._calculateAge(dateValue) < this.setting.max) {
            return { young: true };
        }
        if (this.setting.noFutureDates === true && dateValue > new Date()) {
            return { future: true };
        }
        if (value < this.setting.minDate) {
            return { minDate: true };
        }
        if (value > this.setting.maxDate) {
            return { maxDate: true };
        }
        return;
    }
    /**
     * calculates age from date
     * @method _calculateAge
     * @param {Date} birthday
     * @private
     * @return {number}
     */
    _calculateAge(birthday) {
        const ageDifMs = Date.now() - birthday.getTime();
        const ageDate = new Date(ageDifMs);
        return ageDate.getUTCFullYear() - 1970;
    }
};
tslib_1.__decorate([
    Input('date'),
    tslib_1.__metadata("design:type", Object)
], DateValidatorDirective.prototype, "setting", void 0);
DateValidatorDirective = tslib_1.__decorate([
    Directive({
        providers: [DATE_VALIDATOR],
        selector: '[date][ngModel]'
    }),
    tslib_1.__metadata("design:paramtypes", [ElementRef])
], DateValidatorDirective);
export { DateValidatorDirective };
//# sourceMappingURL=date-validator.directive.js.map