import * as tslib_1 from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/shared/shared.module';
import { ProfileComponent } from './components/profile/profile.component';
import { UserPeopleComponent } from './components/user-people/user-people.component';
import { UserPostsComponent } from './components/user-posts/user-posts.component';
let ProfileModule = class ProfileModule {
};
ProfileModule = tslib_1.__decorate([
    NgModule({
        declarations: [ProfileComponent, UserPostsComponent, UserPeopleComponent],
        imports: [
            CommonModule,
            SharedModule,
            RouterModule.forChild([
                {
                    path: '',
                    component: ProfileComponent,
                },
            ]),
        ],
    })
], ProfileModule);
export { ProfileModule };
//# sourceMappingURL=profile.module.js.map