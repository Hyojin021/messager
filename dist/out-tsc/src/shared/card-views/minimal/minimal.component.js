import * as tslib_1 from "tslib";
import { Component, EventEmitter, Injector, Input, Output } from '@angular/core';
import { AuthService } from 'src/pages/auth/services/auth/auth.service';
import { Extender } from 'src/shared/helpers/extender';
let MinimalComponent = class MinimalComponent extends Extender {
    constructor(injector, authService) {
        super(injector);
        this.injector = injector;
        this.authService = authService;
        /** emits event with type and feed */
        this.event = new EventEmitter();
    }
    /** get user on component init */
    ngOnInit() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.me = yield this.authService.getUser();
        });
    }
    /** onclick emit event with event name and data */
    clicked(name) {
        this.event.emit({ type: name, data: this.feed });
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], MinimalComponent.prototype, "feed", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], MinimalComponent.prototype, "event", void 0);
MinimalComponent = tslib_1.__decorate([
    Component({
        selector: 'feed-minimal',
        templateUrl: './minimal.component.html',
        styleUrls: ['./minimal.component.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [Injector, AuthService])
], MinimalComponent);
export { MinimalComponent };
//# sourceMappingURL=minimal.component.js.map