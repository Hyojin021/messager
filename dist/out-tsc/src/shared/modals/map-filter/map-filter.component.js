import * as tslib_1 from "tslib";
import { Component, Injector } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { Extender } from 'src/shared/helpers/extender';
let MapFilterComponent = class MapFilterComponent extends Extender {
    constructor(injector, navParams) {
        super(injector);
        this.injector = injector;
        this.navParams = navParams;
        this.typeSelectOptions = {
            header: 'Select Type',
            data: ['gym', 'hospital', 'spa', 'doctor', 'store', 'supermarket']
        };
    }
    ngOnInit() {
        this.filter = this.navParams.get('data');
        if (!this.filter) {
            this.filter = {
                radius: 0,
                openNow: false,
                type: null,
                zoom: 0
            };
        }
    }
    save() {
        this.closeModal(this.filter);
    }
};
MapFilterComponent = tslib_1.__decorate([
    Component({
        selector: 'app-map-filter',
        templateUrl: './map-filter.component.html',
        styleUrls: ['./map-filter.component.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [Injector, NavParams])
], MapFilterComponent);
export { MapFilterComponent };
//# sourceMappingURL=map-filter.component.js.map