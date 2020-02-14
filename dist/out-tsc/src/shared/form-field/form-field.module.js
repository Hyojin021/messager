import * as tslib_1 from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormFieldComponent } from './components/form-field/form-field.component';
import { ButtonStatusDirective, InputMaskDirective, InputRefDirective } from './directives';
import { ComparePasswordDirective, DateValidatorDirective, PhoneInputValidatorDirective, RestrictCharValidatorDirective, SecurePasswordDirective, } from './validators';
let FormFieldModule = class FormFieldModule {
};
FormFieldModule = tslib_1.__decorate([
    NgModule({
        declarations: [
            FormFieldComponent,
            InputRefDirective,
            ButtonStatusDirective,
            InputMaskDirective,
            SecurePasswordDirective,
            DateValidatorDirective,
            PhoneInputValidatorDirective,
            RestrictCharValidatorDirective,
            ComparePasswordDirective,
        ],
        exports: [
            FormFieldComponent,
            InputRefDirective,
            ButtonStatusDirective,
            InputMaskDirective,
            FormsModule,
            SecurePasswordDirective,
            DateValidatorDirective,
            PhoneInputValidatorDirective,
            RestrictCharValidatorDirective,
            ComparePasswordDirective,
        ],
        imports: [CommonModule, FormsModule],
    })
], FormFieldModule);
export { FormFieldModule };
//# sourceMappingURL=form-field.module.js.map