import * as tslib_1 from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
let TabMenuComponent = class TabMenuComponent {
    constructor() {
        /** stores tab data */
        this.tabs = [];
        /** emits event from tab selection */
        this.event = new EventEmitter();
    }
    ngAfterViewInit() { }
    /** @description select tab and emit selection event */
    onViewSelect(index) {
        this.tabs.map((_view) => (_view.active = false));
        this.tabs[index].active = true;
        this.event.emit(this.tabs[index].id);
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Array)
], TabMenuComponent.prototype, "tabs", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], TabMenuComponent.prototype, "event", void 0);
TabMenuComponent = tslib_1.__decorate([
    Component({
        selector: 'app-tab-menu',
        templateUrl: './tab-menu.component.html',
        styleUrls: ['./tab-menu.component.scss']
    })
], TabMenuComponent);
export { TabMenuComponent };
//# sourceMappingURL=tab-menu.component.js.map