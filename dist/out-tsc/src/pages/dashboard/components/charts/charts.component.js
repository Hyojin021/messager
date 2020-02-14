import * as tslib_1 from "tslib";
import { Component, ElementRef, ViewChild } from '@angular/core';
import { ChartsService } from '../../services/charts/charts.service';
/**
 * get all charts data to display on charts page from the charts service
 */
let ChartsComponent = class ChartsComponent {
    constructor(chartsService) {
        this.chartsService = chartsService;
    }
    /** get all charts data to display on charts page from the charts service */
    ngOnInit() {
        this.barChart = this.chartsService.createBarChart(this.barCanvas.nativeElement);
        this.doughnutChart = this.chartsService.createDoughnutChart(this.doughnutCanvas.nativeElement);
        this.lineChart = this.chartsService.createLineChart(this.lineCanvas.nativeElement);
        this.pieChart = this.chartsService.createPieChart(this.pieCanvas.nativeElement);
    }
};
tslib_1.__decorate([
    ViewChild('bar', null),
    tslib_1.__metadata("design:type", ElementRef)
], ChartsComponent.prototype, "barCanvas", void 0);
tslib_1.__decorate([
    ViewChild('line', null),
    tslib_1.__metadata("design:type", ElementRef)
], ChartsComponent.prototype, "lineCanvas", void 0);
tslib_1.__decorate([
    ViewChild('pie', null),
    tslib_1.__metadata("design:type", ElementRef)
], ChartsComponent.prototype, "pieCanvas", void 0);
tslib_1.__decorate([
    ViewChild('doughnut', null),
    tslib_1.__metadata("design:type", ElementRef)
], ChartsComponent.prototype, "doughnutCanvas", void 0);
ChartsComponent = tslib_1.__decorate([
    Component({
        selector: 'app-charts',
        templateUrl: './charts.component.html',
        styleUrls: ['./charts.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [ChartsService])
], ChartsComponent);
export { ChartsComponent };
//# sourceMappingURL=charts.component.js.map