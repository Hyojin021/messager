import * as tslib_1 from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { AccordionComponent } from './components/accordion/accordion.component';
import { PanelComponent } from './components/panel/panel.component';
let AccordionModule = class AccordionModule {
};
AccordionModule = tslib_1.__decorate([
    NgModule({
        declarations: [AccordionComponent, PanelComponent],
        exports: [AccordionComponent, PanelComponent],
        imports: [CommonModule, IonicModule]
    })
], AccordionModule);
export { AccordionModule };
//# sourceMappingURL=accordion.module.js.map