import * as tslib_1 from "tslib";
import { Component, ContentChild, HostBinding, Input } from '@angular/core';
import { InputRefDirective } from '../../directives';
let FormFieldComponent = class FormFieldComponent {
    constructor() {
        this.color = 'primary';
        this.fill = false;
        this.outline = false;
        this.shape = true;
        this.border = false;
        this.prefix = false;
        this.suffix = false;
        this.label = '';
        this.size = '';
        this.expand = '';
    }
    /** add has-value class if input has value */
    get gethasValueState() {
        return this.input && this.input.element.value && this.input.element.value.trim() !== '' ? true : false;
    }
    /** add readonly class if input is in readonly state */
    get getReadOnlyState() {
        return this.input && this.readonly;
    }
    /** add is-dirty class if input is in dirty state */
    get getDirtyState() {
        return this.input ? this.input.control.dirty : false;
    }
    /** add is-pristine class if input is in pristine state */
    get getPristineState() {
        return this.input ? this.input.control.pristine : false;
    }
    /** add is-valid class if input is in valid state */
    get getValidState() {
        return this.input ? this.input.control.valid : false;
    }
    /** add is-invalid class if input is in invalid state */
    get getInvalidState() {
        const state = this.input ? this.input.control.invalid : false;
        state && this.input.control.touched
            ? this.input.element.classList.add('is-invalid')
            : this.input.element.classList.remove('is-invalid');
        return state;
    }
    /** add is-touched class if input has been touched */
    get getTouchedState() {
        return this.input ? this.input.control.touched : false;
    }
    /** add focus class if input is in focus is specified */
    get isInputFocus() {
        return this.input && !this.readonly ? this.input.focus : false;
    }
    /** add class if prefix is specified */
    get hasPrefix() {
        return this.prefix ? true : false;
    }
    /** add class if suffix is specified */
    get hasSuffix() {
        return this.suffix ? true : false;
    }
    /** if required add * to label */
    isRequired() {
        return this.input && this.input.element.required && this.label ? this.label + ' *' : this.label;
    }
    ngAfterContentInit() {
        if (!this.input) {
            console.error('form field needs an input element');
            return;
        }
        this.label = this.isRequired();
        this.readonly = this.input.element.readOnly;
        this.input.element.id = this.input.element.name;
        this.input.element.classList.add('form-control');
        this.input.element.classList.add(`form-control-${this.size}`);
    }
    focusInput() {
        this.input.element.focus();
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], FormFieldComponent.prototype, "color", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean)
], FormFieldComponent.prototype, "fill", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean)
], FormFieldComponent.prototype, "outline", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean)
], FormFieldComponent.prototype, "shape", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean)
], FormFieldComponent.prototype, "border", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean)
], FormFieldComponent.prototype, "prefix", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean)
], FormFieldComponent.prototype, "suffix", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], FormFieldComponent.prototype, "label", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], FormFieldComponent.prototype, "size", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], FormFieldComponent.prototype, "expand", void 0);
tslib_1.__decorate([
    ContentChild(InputRefDirective, { static: true }),
    tslib_1.__metadata("design:type", InputRefDirective)
], FormFieldComponent.prototype, "input", void 0);
tslib_1.__decorate([
    HostBinding('class.has-value'),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [])
], FormFieldComponent.prototype, "gethasValueState", null);
tslib_1.__decorate([
    HostBinding('class.readonly'),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [])
], FormFieldComponent.prototype, "getReadOnlyState", null);
tslib_1.__decorate([
    HostBinding('class.is-dirty'),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [])
], FormFieldComponent.prototype, "getDirtyState", null);
tslib_1.__decorate([
    HostBinding('class.is-pristine'),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [])
], FormFieldComponent.prototype, "getPristineState", null);
tslib_1.__decorate([
    HostBinding('class.is-valid'),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [])
], FormFieldComponent.prototype, "getValidState", null);
tslib_1.__decorate([
    HostBinding('class.is-invalid'),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [])
], FormFieldComponent.prototype, "getInvalidState", null);
tslib_1.__decorate([
    HostBinding('class.is-touched'),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [])
], FormFieldComponent.prototype, "getTouchedState", null);
tslib_1.__decorate([
    HostBinding('class.has-focus'),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [])
], FormFieldComponent.prototype, "isInputFocus", null);
tslib_1.__decorate([
    HostBinding('class.has-prefix'),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [])
], FormFieldComponent.prototype, "hasPrefix", null);
tslib_1.__decorate([
    HostBinding('class.has-suffix'),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [])
], FormFieldComponent.prototype, "hasSuffix", null);
FormFieldComponent = tslib_1.__decorate([
    Component({
        selector: 'form-field',
        templateUrl: './form-field.component.html',
        styleUrls: ['./form-field.component.scss']
    })
], FormFieldComponent);
export { FormFieldComponent };
//# sourceMappingURL=form-field.component.js.map