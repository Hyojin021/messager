import * as tslib_1 from "tslib";
import { Directive, ElementRef, HostListener, Injector, Input, Renderer } from '@angular/core';
import { Extender } from 'src/shared/helpers/extender';
import { ImagePreviewComponent } from 'src/shared/modals/image-preview/image-preview.component';
let ImageLoaderDirective = class ImageLoaderDirective extends Extender {
    /** gets image spinner from assets and assign to background image set css styles */
    constructor(injector, el, renderer) {
        super(injector);
        this.injector = injector;
        this.el = el;
        this.renderer = renderer;
        /** if image should have open preview modal on click */
        this.clickable = false;
        this.element = el.nativeElement;
        this.element.style.backgroundImage = 'url(./assets/images/other/placeholder.png)';
        this.renderer.setElementStyle(this.element, 'background-size', 'cover');
        this.renderer.setElementStyle(this.element, 'background-position', 'center');
        this.renderer.setElementStyle(this.element, 'background-repeat', 'no-repeat');
    }
    /** on changes call _loadImage method */
    ngOnChanges(changes) {
        if (changes.imageLoader) {
            this._loadImage();
        }
    }
    /** on click event, open preview modal */
    onClick(event) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (this.clickable) {
                const modal = yield this.openModal(ImagePreviewComponent, this.imageLoader, 'custom-modal');
                modal.present();
            }
        });
    }
    /** list on image event 'load' and append new image url to background image, if image is not defined use a placeholder */
    _loadImage() {
        const image = new Image();
        image.addEventListener('load', () => {
            this.element.style.backgroundImage = `url(${this.imageLoader ? this.imageLoader : '../assets/images/other/placeholder.png'})`;
            this.renderer.setElementStyle(this.element, 'background-size', 'cover');
            this.renderer.setElementStyle(this.element, 'background-color', 'none');
        });
        image.src = this.imageLoader ? this.imageLoader : '../assets/images/other/placeholder.png';
    }
};
tslib_1.__decorate([
    Input('image-loader'),
    tslib_1.__metadata("design:type", Object)
], ImageLoaderDirective.prototype, "imageLoader", void 0);
tslib_1.__decorate([
    Input('preview'),
    tslib_1.__metadata("design:type", Boolean)
], ImageLoaderDirective.prototype, "clickable", void 0);
tslib_1.__decorate([
    HostListener('click', ['$event']),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Event]),
    tslib_1.__metadata("design:returntype", Promise)
], ImageLoaderDirective.prototype, "onClick", null);
ImageLoaderDirective = tslib_1.__decorate([
    Directive({
        selector: '[image-loader]'
    }),
    tslib_1.__metadata("design:paramtypes", [Injector, ElementRef, Renderer])
], ImageLoaderDirective);
export { ImageLoaderDirective };
//# sourceMappingURL=image-loader.js.map