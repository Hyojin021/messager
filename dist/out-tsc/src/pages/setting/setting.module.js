import * as tslib_1 from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/shared/shared.module';
import { SettingComponent } from './components/setting/setting.component';
let SettingModule = class SettingModule {
};
SettingModule = tslib_1.__decorate([
    NgModule({
        declarations: [SettingComponent],
        imports: [
            CommonModule,
            SharedModule,
            RouterModule.forChild([
                {
                    path: '',
                    component: SettingComponent
                }
            ])
        ]
    })
], SettingModule);
export { SettingModule };
//# sourceMappingURL=setting.module.js.map