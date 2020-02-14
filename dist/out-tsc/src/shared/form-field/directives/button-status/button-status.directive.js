import * as tslib_1 from "tslib";
import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
const SVG_LOADING = `
    <svg class="spinner" viewBox="0 0 50 50">
      <circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle>
    </svg>`;
let ButtonStatusDirective = class ButtonStatusDirective {
    constructor(_el, _renderer) {
        this._el = _el;
        this._renderer = _renderer;
        this.loadingText = true;
        this.divElement = null;
    }
    ngOnChanges(changes) {
        this.loadingState(changes.status.currentValue);
    }
    ngOnInit() {
        this.target = this._el.nativeElement;
    }
    /** toggle loader state of button */
    loadingState(status) {
        if (status) {
            this.innerText = this.target.innerText;
            this.target.innerText = '';
            this.createLoader(this.target);
        }
        else {
            this.removeLoader();
        }
        if (this.target) {
            this.target.disabled = this.target ? status : null;
        }
    }
    /** creates a loading for button */
    createLoader(wrapperElement) {
        this.divElement = this._renderer.createElement('div');
        this._renderer.addClass(this.divElement, 'btn-loader');
        this.divElement.innerHTML = (this.loadingText ? 'Loading' : '') + SVG_LOADING;
        this._renderer.insertBefore(wrapperElement, this.divElement, null);
    }
    /** removes loading from button */
    removeLoader() {
        if (this.divElement) {
            this._renderer.removeChild(this.target, this.divElement);
            this.target.innerText = this.innerText;
        }
    }
};
tslib_1.__decorate([
    Input('btnStatus'),
    tslib_1.__metadata("design:type", Boolean)
], ButtonStatusDirective.prototype, "status", void 0);
tslib_1.__decorate([
    Input('loadingText'),
    tslib_1.__metadata("design:type", Boolean)
], ButtonStatusDirective.prototype, "loadingText", void 0);
ButtonStatusDirective = tslib_1.__decorate([
    Directive({
        selector: '[btnStatus]'
    }),
    tslib_1.__metadata("design:paramtypes", [ElementRef, Renderer2])
], ButtonStatusDirective);
export { ButtonStatusDirective };
//# sourceMappingURL=button-status.directive.js.map