import * as tslib_1 from "tslib";
import { Component, Injector, Input } from '@angular/core';
import { Extender } from 'src/shared/helpers/extender';
let NoDataComponent = class NoDataComponent extends Extender {
    constructor(injector) {
        super(injector);
        this.injector = injector;
        this.config = {};
    }
    /** defaults */
    ngOnInit() {
        this.config = Object.assign({
            image: { show: true, url: 'assets/images/other/no-data.png' },
            content: { title: this.translate.instant('misc.no-data'), description: null }
        }, this.config);
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], NoDataComponent.prototype, "config", void 0);
NoDataComponent = tslib_1.__decorate([
    Component({
        selector: 'app-no-data',
        templateUrl: './no-data.component.html',
        styleUrls: ['./no-data.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [Injector])
], NoDataComponent);
export { NoDataComponent };
//# sourceMappingURL=no-data.component.js.map