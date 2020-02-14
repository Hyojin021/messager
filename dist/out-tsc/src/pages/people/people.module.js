import * as tslib_1 from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/shared/shared.module';
import { PeopleComponent } from './components/people/people.component';
import { PersonComponent } from './components/person/person.component';
let PeopleModule = class PeopleModule {
};
PeopleModule = tslib_1.__decorate([
    NgModule({
        declarations: [PeopleComponent, PersonComponent],
        imports: [
            CommonModule,
            SharedModule,
            RouterModule.forChild([
                {
                    path: '',
                    component: PeopleComponent,
                },
                {
                    path: ':id',
                    component: PersonComponent,
                },
            ]),
        ],
    })
], PeopleModule);
export { PeopleModule };
//# sourceMappingURL=people.module.js.map