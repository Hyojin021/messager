import * as tslib_1 from "tslib";
var InputMaskDirective_1;
import { Directive, ElementRef, forwardRef, HostListener, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as _ from 'lodash';
import { maskDigitValidators, neverValidator } from './helpers/digit-validators';
import { BACKSPACE, DELETE, LEFT_ARROW, overwriteCharAtPosition, RIGHT_ARROW, SPECIAL_CHARACTERS, TAB } from './helpers/utils';
let InputMaskDirective = InputMaskDirective_1 = class InputMaskDirective {
    constructor(el) {
        this.el = el;
        this.mask = '';
        this.fullFieldSelected = false;
        this._placeholder = '';
        this.onChange = (_data) => { };
        this.onTouch = () => { };
        this.input = this.el.nativeElement;
    }
    onSelect() {
        this.fullFieldSelected = this.input.selectionStart === 0 && this.input.selectionEnd === this.input.value.length;
    }
    onClick() {
        setTimeout(() => {
            if (this.input.value === this._placeholder) {
                this.input.setSelectionRange(0, 0);
            }
        }, 0);
    }
    /** overwrite particular character of the input on keypress */
    onKeyDown($event, keyCode) {
        // get control for cases for copy and paste keyboard shortcut
        if ($event.metaKey || $event.ctrlKey) {
            return;
        }
        if (keyCode !== TAB) {
            $event.preventDefault();
        }
        const key = String.fromCharCode(keyCode);
        const cursorPos = this.input.selectionStart;
        // if true, clear field and select first position
        if (this.fullFieldSelected) {
            this.input.value = this._placeholder;
            const firstPlaceholderPos = _.findIndex(this.input.value, (char) => char === '_');
            this.input.setSelectionRange(firstPlaceholderPos, firstPlaceholderPos);
        }
        switch (keyCode) {
            case LEFT_ARROW:
                this.handleLeftArrow(cursorPos);
                return;
            case RIGHT_ARROW:
                this.handleRightArrow(cursorPos);
                return;
            case BACKSPACE:
                this.handleBackspace(cursorPos);
                return;
            case DELETE:
                this.handleDelete(cursorPos);
                return;
        }
        const maskDigit = this.mask.charAt(cursorPos);
        const digitValidator = maskDigitValidators[maskDigit] || neverValidator;
        if (digitValidator(key)) {
            overwriteCharAtPosition(this.input, cursorPos, key);
            this.handleRightArrow(cursorPos);
        }
        this.onChange(this.input.value);
        this.onTouch();
    }
    handleDelete(cursorPos) {
        overwriteCharAtPosition(this.input, cursorPos, '_');
        this.input.setSelectionRange(cursorPos, cursorPos);
    }
    handleBackspace(cursorPos) {
        const previousPos = this.calculatePreviousCursorPos(cursorPos);
        if (previousPos >= 0) {
            overwriteCharAtPosition(this.input, previousPos, '_');
            this.input.setSelectionRange(previousPos, previousPos);
        }
    }
    handleLeftArrow(cursorPos) {
        const previousPos = this.calculatePreviousCursorPos(cursorPos);
        if (previousPos >= 0) {
            this.input.setSelectionRange(previousPos, previousPos);
        }
    }
    handleRightArrow(cursorPos) {
        const valueAfterCursor = this.input.value.slice(cursorPos + 1);
        const nextPos = _.findIndex(valueAfterCursor, (char) => !_.includes(SPECIAL_CHARACTERS, char));
        if (nextPos >= 0) {
            const newCursorPos = cursorPos + nextPos + 1;
            this.input.setSelectionRange(newCursorPos, newCursorPos);
        }
    }
    ngOnInit() {
        this._placeholder = this.buildPlaceholder();
        if (!this.input.value) {
            this.input.value = this._placeholder;
        }
    }
    buildPlaceholder() {
        const chars = this.mask.split('');
        return chars.reduce((result, char) => {
            return (result += _.includes(SPECIAL_CHARACTERS, char) ? char : '_');
        }, '');
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouch = fn;
    }
    writeValue(obj) { }
    calculatePreviousCursorPos(cursorPos) {
        const valueBeforeCursor = this.input.value.slice(0, cursorPos);
        return _.findLastIndex(valueBeforeCursor, (char) => !_.includes(SPECIAL_CHARACTERS, char));
    }
};
tslib_1.__decorate([
    Input('input-mask'),
    tslib_1.__metadata("design:type", String)
], InputMaskDirective.prototype, "mask", void 0);
tslib_1.__decorate([
    HostListener('select', ['$event']),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], InputMaskDirective.prototype, "onSelect", null);
tslib_1.__decorate([
    HostListener('focus', ['$event']),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], InputMaskDirective.prototype, "onClick", null);
tslib_1.__decorate([
    HostListener('keydown', ['$event', '$event.keyCode']),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [KeyboardEvent, Number]),
    tslib_1.__metadata("design:returntype", void 0)
], InputMaskDirective.prototype, "onKeyDown", null);
InputMaskDirective = InputMaskDirective_1 = tslib_1.__decorate([
    Directive({
        providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => InputMaskDirective_1),
                multi: true
            }
        ],
        selector: '[input-mask]'
    }),
    tslib_1.__metadata("design:paramtypes", [ElementRef])
], InputMaskDirective);
export { InputMaskDirective };
//# sourceMappingURL=input-mask.directive.js.map