import * as tslib_1 from "tslib";
import { Component, Injector } from '@angular/core';
import { Extender } from 'src/shared/helpers/extender';
import { DashboardService } from '../../services/dashboard/dashboard.service';
/**
 * get dashboard tabs information
 * set appropriate tab based on if page data param match tab id
 */
let DashboardComponent = class DashboardComponent extends Extender {
    constructor(injector, dashboardService) {
        super(injector);
        this.injector = injector;
        this.dashboardService = dashboardService;
        this.views = this.dashboardService.views;
    }
    /** get dashboard tabs information set appropriate tab based on if page data param match tab id */
    ionViewDidEnter() {
        this.views = this.dashboardService.views;
        this.views.map((view) => {
            if (view.id === this.activatedRoute.snapshot.firstChild.data.page) {
                view.active = true;
            }
            return view;
        });
    }
};
DashboardComponent = tslib_1.__decorate([
    Component({
        selector: 'app-dashboard',
        templateUrl: './dashboard.component.html',
        styleUrls: ['./dashboard.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [Injector, DashboardService])
], DashboardComponent);
export { DashboardComponent };
//# sourceMappingURL=dashboard.component.js.map