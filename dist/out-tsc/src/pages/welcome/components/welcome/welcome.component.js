import * as tslib_1 from "tslib";
import { Component, Injector, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { AppService } from 'src/app/services/app/app.service';
import { Extender } from 'src/shared/helpers/extender';
import { WelcomeService } from '../../services/welcome/welcome.service';
/**
 * welcome screen with walkthrough on using the app and access to auth module
 */
let WelcomeComponent = class WelcomeComponent extends Extender {
    constructor(injector, storage, appService, welcomeService) {
        super(injector);
        this.injector = injector;
        this.storage = storage;
        this.appService = appService;
        this.welcomeService = welcomeService;
        /** stores slides array from service */
        this.slides = [];
        /** save active index of slides */
        this.currentIndex = 0;
        /** stores language data */
        this.language = null;
    }
    /** get slides and languages data from services
     * set selected language from device local storage or default to gb
     */
    ngOnInit() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.slides = this.welcomeService.slides;
            this.languages = this.welcomeService.languages;
            const lang = yield this.storage.get('language');
            if (lang) {
                this.language = this.languages.find((item) => item.code === lang);
            }
            else {
                this.language = this.languages[0];
            }
        });
    }
    /** on slide changes, update currentIndex property, this will update our custom navigation bullets */
    slideChanged() {
        this.slider.getActiveIndex().then((index) => {
            this.currentIndex = index;
        });
    }
    /** open an action sheet with language options */
    openLanguage() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const actionSheetCtrl = yield this.actionSheetCtrl.create({
                header: this.translate.instant('welcome-component.select-lang'),
                buttons: [
                    {
                        text: this.translate.instant('welcome-component.english'),
                        handler: () => {
                            this.changeLanguage('gb');
                        }
                    },
                    {
                        text: this.translate.instant('welcome-component.spanish'),
                        handler: () => {
                            this.changeLanguage('es');
                        }
                    },
                    {
                        text: this.translate.instant('welcome-component.french'),
                        handler: () => {
                            this.changeLanguage('fr');
                        }
                    },
                    {
                        text: this.translate.instant('other.close'),
                        role: 'cancel'
                    }
                ]
            });
            yield actionSheetCtrl.present();
        });
    }
    /**
     * change language based on actionsheet selection
     */
    changeLanguage(lang) {
        this.appService.langConfig(lang);
        this.language = this.languages.find((data) => data.code === lang);
    }
};
tslib_1.__decorate([
    ViewChild(IonSlides, null),
    tslib_1.__metadata("design:type", IonSlides)
], WelcomeComponent.prototype, "slider", void 0);
WelcomeComponent = tslib_1.__decorate([
    Component({
        selector: 'app-welcome',
        templateUrl: './welcome.component.html',
        styleUrls: ['./welcome.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [Injector,
        Storage,
        AppService,
        WelcomeService])
], WelcomeComponent);
export { WelcomeComponent };
//# sourceMappingURL=welcome.component.js.map