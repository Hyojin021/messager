import * as tslib_1 from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/shared/shared.module';
import { WelcomeComponent } from './components/welcome/welcome.component';
let WelcomeModule = class WelcomeModule {
};
WelcomeModule = tslib_1.__decorate([
    NgModule({
        declarations: [WelcomeComponent],
        imports: [
            CommonModule,
            SharedModule,
            RouterModule.forChild([
                {
                    path: '',
                    component: WelcomeComponent,
                },
            ]),
        ],
    })
], WelcomeModule);
export { WelcomeModule };
//# sourceMappingURL=welcome.module.js.map