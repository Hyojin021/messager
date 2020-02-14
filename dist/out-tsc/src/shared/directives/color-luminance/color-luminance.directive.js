import * as tslib_1 from "tslib";
import { Directive, ElementRef, Input } from '@angular/core';
let ColorLuminanceDirective = class ColorLuminanceDirective {
    /** if options is not null, generate a color from options and save as background color */
    constructor(el) {
        this.el = el;
        if (this.option) {
            this.el.nativeElement.style.backgroundColor = this.colorLuminance(this.option.color, this.option.percent, this.option.rgbHex);
        }
    }
    /** after view is initialized, generate a color from options and save as background color */
    ngAfterViewInit() {
        this.el.nativeElement.style.backgroundColor = this.colorLuminance(this.option.color, this.option.percent, this.option.rgbHex);
    }
    /** calculate color hex code from provided data. */
    colorLuminance(hex, lum, type) {
        if (!type) {
            hex = String(hex).replace(/[^0-9a-f]/gi, '');
            if (hex.length < 6) {
                hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
            }
            lum = lum || 0;
            let rgb = '#';
            let c;
            let i;
            for (i = 0; i < 3; i++) {
                c = parseInt(hex.substr(i * 2, 2), 16);
                c = Math.round(Math.min(Math.max(0, c + c * lum), 255)).toString(16);
                rgb += ('00' + c).substr(c.length);
            }
            return rgb;
        }
        else {
            const num = parseInt(hex.slice(1), 16);
            const amt = Math.round(2.55 * lum);
            const R = (num >> 16) + amt;
            const G = ((num >> 8) & 0x00ff) + amt;
            const B = (num & 0x0000ff) + amt;
            return ('#' +
                (0x1000000 +
                    (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
                    (G < 255 ? (G < 1 ? 0 : G) : 255) * 0x100 +
                    (B < 255 ? (B < 1 ? 0 : B) : 255))
                    .toString(16)
                    .slice(1));
        }
    }
};
tslib_1.__decorate([
    Input('colorLuminance'),
    tslib_1.__metadata("design:type", Object)
], ColorLuminanceDirective.prototype, "option", void 0);
ColorLuminanceDirective = tslib_1.__decorate([
    Directive({
        selector: '[colorLuminance]'
    }),
    tslib_1.__metadata("design:paramtypes", [ElementRef])
], ColorLuminanceDirective);
export { ColorLuminanceDirective };
//# sourceMappingURL=color-luminance.directive.js.map