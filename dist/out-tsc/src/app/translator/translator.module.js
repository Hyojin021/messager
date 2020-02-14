import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TranslatorPage } from './translator.page';
const routes = [
    {
        path: '',
        component: TranslatorPage
    }
];
let TranslatorPageModule = class TranslatorPageModule {
};
TranslatorPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [TranslatorPage]
    })
], TranslatorPageModule);
export { TranslatorPageModule };
//# sourceMappingURL=translator.module.js.map