import * as tslib_1 from "tslib";
import { Injectable, Injector } from '@angular/core';
import { Extender } from 'src/shared/helpers/extender';
/**
 * set data for tabs in dashboard
 */
let DashboardService = class DashboardService extends Extender {
    constructor(injector) {
        super(injector);
        this.injector = injector;
    }
    get views() {
        return [
            {
                id: 'schedule',
                name: this.translate.instant('dashboard-component.schedule-tab'),
                event: () => {
                    this.goto(this.routes.schedule);
                }
            },
            {
                id: 'chart',
                name: this.translate.instant('dashboard-component.charts-tab'),
                event: () => {
                    this.goto(this.routes.chart);
                }
            },
            {
                id: 'map',
                name: this.translate.instant('dashboard-component.maps-tab'),
                event: () => {
                    this.goto(this.routes.map);
                }
            }
        ];
    }
};
DashboardService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [Injector])
], DashboardService);
export { DashboardService };
//# sourceMappingURL=dashboard.service.js.map