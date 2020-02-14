import * as tslib_1 from "tslib";
import { Directive, ElementRef, HostListener, Input } from '@angular/core';
let ElasticDirective = class ElasticDirective {
    constructor(el) {
        this.el = el;
        this.height = 44;
        this.target = el.nativeElement;
    }
    /** on input event, recalculate height of textarea */
    onInput(nativeElement) {
        nativeElement.style.overflow = 'hidden';
        nativeElement.style.height = nativeElement.scrollHeight > this.height ? nativeElement.scrollHeight + 'px' : this.height + 'px';
    }
    /** after view initializes, recalculate height of textarea */
    ngAfterViewInit() {
        this.onInput(this.target);
    }
};
tslib_1.__decorate([
    Input('elastic-textarea'),
    tslib_1.__metadata("design:type", Number)
], ElasticDirective.prototype, "height", void 0);
tslib_1.__decorate([
    HostListener('input', ['$event.target']),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], ElasticDirective.prototype, "onInput", null);
ElasticDirective = tslib_1.__decorate([
    Directive({
        selector: '[elastic-textarea]'
    }),
    tslib_1.__metadata("design:paramtypes", [ElementRef])
], ElasticDirective);
export { ElasticDirective };
//# sourceMappingURL=elastic.directive.js.map