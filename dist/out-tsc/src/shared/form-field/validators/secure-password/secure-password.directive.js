import * as tslib_1 from "tslib";
import { Directive, EventEmitter, forwardRef, Output } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
const PASSWORD_VALIDATOR = {
    multi: true,
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => SecurePasswordDirective)
};
const strongRegex = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})');
const mediumRegex = new RegExp('^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})');
let SecurePasswordDirective = class SecurePasswordDirective {
    constructor() {
        this.output = new EventEmitter();
    }
    validate(control) {
        return this.checkSecure(control.value);
    }
    /**
     * validates password length, strength and invalid characters
     * @method validatePassword
     * @return { [key: string]: any }
     */
    checkSecure(value) {
        if (value && value.length < 4) {
            this.output.emit('danger');
            return { length: true };
        }
        else {
            if (value) {
                if (strongRegex.test(value)) {
                    this.output.emit('success');
                }
                else if (mediumRegex.test(value)) {
                    this.output.emit('warning');
                }
                else {
                    this.output.emit('danger');
                    return { secure: true };
                }
            }
            if (/\s/.test(value)) {
                return { invalid: true };
            }
        }
    }
};
tslib_1.__decorate([
    Output('secure'),
    tslib_1.__metadata("design:type", EventEmitter)
], SecurePasswordDirective.prototype, "output", void 0);
SecurePasswordDirective = tslib_1.__decorate([
    Directive({
        providers: [PASSWORD_VALIDATOR],
        selector: '[secure]'
    }),
    tslib_1.__metadata("design:paramtypes", [])
], SecurePasswordDirective);
export { SecurePasswordDirective };
//# sourceMappingURL=secure-password.directive.js.map