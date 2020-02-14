import * as tslib_1 from "tslib";
import { Component, Injector } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { AppService } from 'src/app/services/app/app.service';
import { Extender } from 'src/shared/helpers/extender';
import { CommonService } from 'src/shared/services/common/common.service';
import { FirestoreService } from 'src/shared/services/firestore/firestore.service';
let LangSelectComponent = class LangSelectComponent extends Extender {
    constructor(injector, navParams, commonService, appService, firestoreService) {
        super(injector);
        this.injector = injector;
        this.navParams = navParams;
        this.commonService = commonService;
        this.appService = appService;
        this.firestoreService = firestoreService;
    }
    /** get settings from nav params */
    ngOnInit() {
        this.setting = this.navParams.get('data');
        this.subscriptions.push(this.commonService.getCountries().subscribe((countries) => (this.countries = countries)));
    }
    /** select a country, update lang preference and set translation with new lang data */
    select(lang) {
        if (!(lang === 'gb' || lang === 'es' || lang === 'fr')) {
            lang = 'gb';
        }
        this.setting.language = lang;
        this.firestoreService.upsert(`preferences/${this.setting.uid}`, this.setting);
        this.appService.langConfig(lang);
        this.closeModal();
    }
};
LangSelectComponent = tslib_1.__decorate([
    Component({
        selector: 'app-lang-select',
        templateUrl: './lang-select.component.html',
        styleUrls: ['./lang-select.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [Injector,
        NavParams,
        CommonService,
        AppService,
        FirestoreService])
], LangSelectComponent);
export { LangSelectComponent };
//# sourceMappingURL=lang-select.component.js.map