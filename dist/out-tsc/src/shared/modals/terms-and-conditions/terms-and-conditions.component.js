import * as tslib_1 from "tslib";
import { Component, Injector } from '@angular/core';
import { Extender } from 'src/shared/helpers/extender';
let TermsAndConditionsComponent = class TermsAndConditionsComponent extends Extender {
    constructor(injector) {
        super(injector);
        this.injector = injector;
    }
    ngOnInit() { }
};
TermsAndConditionsComponent = tslib_1.__decorate([
    Component({
        selector: 'app-terms-and-conditions',
        templateUrl: './terms-and-conditions.component.html',
        styleUrls: ['./terms-and-conditions.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [Injector])
], TermsAndConditionsComponent);
export { TermsAndConditionsComponent };
//# sourceMappingURL=terms-and-conditions.component.js.map