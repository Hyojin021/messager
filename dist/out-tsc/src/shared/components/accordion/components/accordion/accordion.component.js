import * as tslib_1 from "tslib";
import { Component, ContentChildren, QueryList } from '@angular/core';
import { Subscription } from 'rxjs';
import { Extender } from 'src/shared/helpers/extender';
import { PanelComponent } from '../panel/panel.component';
let AccordionComponent = class AccordionComponent extends Extender {
    constructor() {
        super(...arguments);
        this._subscriptions = new Subscription();
    }
    /** for each panel add subscription to panel to listen for toggle events */
    ngAfterViewInit() {
        if (this.panels) {
            this.panels.forEach((panel) => {
                this._subscriptions.add(this._subscribeToPanel(panel));
            });
        }
    }
    /** unsubscribe from panel subscription */
    ngOnDestroy() {
        this._subscriptions.unsubscribe();
    }
    /** subscribe to panel toggle event and update isBodyVisible accordingly */
    _subscribeToPanel(currentPanel) {
        return currentPanel.toggle.subscribe((show) => {
            if (show) {
                this.panels.forEach((panel) => {
                    panel.isBodyVisible = false;
                });
                currentPanel.isBodyVisible = true;
            }
        });
    }
};
tslib_1.__decorate([
    ContentChildren(PanelComponent),
    tslib_1.__metadata("design:type", QueryList)
], AccordionComponent.prototype, "panels", void 0);
AccordionComponent = tslib_1.__decorate([
    Component({
        selector: 'app-accordion',
        templateUrl: './accordion.component.html',
        styleUrls: ['./accordion.component.scss']
    })
], AccordionComponent);
export { AccordionComponent };
//# sourceMappingURL=accordion.component.js.map