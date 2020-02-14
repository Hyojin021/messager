import * as tslib_1 from "tslib";
import { Component, Injector } from '@angular/core';
import { Extender } from 'src/shared/helpers/extender';
let PrivacyComponent = class PrivacyComponent extends Extender {
    constructor(injector) {
        super(injector);
        this.injector = injector;
    }
    ngOnInit() { }
};
PrivacyComponent = tslib_1.__decorate([
    Component({
        selector: 'app-privacy',
        templateUrl: './privacy.component.html',
        styleUrls: ['./privacy.component.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [Injector])
], PrivacyComponent);
export { PrivacyComponent };
//# sourceMappingURL=privacy.component.js.map