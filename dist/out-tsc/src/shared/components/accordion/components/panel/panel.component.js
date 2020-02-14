import * as tslib_1 from "tslib";
import { Component, HostBinding, Input } from '@angular/core';
import { Subject } from 'rxjs';
let PanelComponent = class PanelComponent {
    constructor() {
        this.isBodyVisible = false;
        this.toggle = new Subject();
        this.open = false;
        this.title = 'Panel';
        this.color = 'primary';
    }
    ngOnInit() {
        this.isBodyVisible = this.open;
    }
    onClick() {
        this.isBodyVisible = !this.isBodyVisible;
        this.toggle.next(this.isBodyVisible);
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean)
], PanelComponent.prototype, "open", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], PanelComponent.prototype, "title", void 0);
tslib_1.__decorate([
    HostBinding('class'), Input(),
    tslib_1.__metadata("design:type", String)
], PanelComponent.prototype, "color", void 0);
PanelComponent = tslib_1.__decorate([
    Component({
        selector: 'app-panel',
        templateUrl: './panel.component.html',
        styleUrls: ['./panel.component.scss']
    })
], PanelComponent);
export { PanelComponent };
//# sourceMappingURL=panel.component.js.map