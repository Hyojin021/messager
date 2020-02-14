import * as tslib_1 from "tslib";
import { Injectable, Injector } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Extender } from 'src/shared/helpers/extender';
import { FirestoreService } from 'src/shared/services/firestore/firestore.service';
/**
 * @class AppService
 * @extends Extender
 * initialize status bar and splash screen (used at start up in app.components)
 * set language and/or get default language
 * page setup array when user is logged in
 */
let AppService = class AppService extends Extender {
    constructor(injector, platform, splashScreen, statusBar, storage, firestoreService) {
        super(injector);
        this.injector = injector;
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.storage = storage;
        this.firestoreService = firestoreService;
    }
    /**
     * set up pages with use details when use is logged in. Profile page button has an image of user.
     * define component routes, icons and title for each side-menu button
     * @param user
     */
    setUpPages(user) {
        return [
            {
                title: this.translate.instant('page-title.profile'),
                component: this.routes.profile,
                icon: user.photoURL || null,
                image: true
            },
            {
                title: this.translate.instant('page-title.dashboard'),
                component: this.routes.dashboard,
                icon: 'calendar',
                image: false
            },
            {
                title: this.translate.instant('page-title.news'),
                component: this.routes.feed,
                icon: 'rss',
                image: false
            },
            {
                title: this.translate.instant('page-title.people'),
                component: this.routes.people,
                icon: 'users',
                image: false
            },
            {
                title: this.translate.instant('page-title.chat'),
                component: this.routes.messages,
                icon: 'message-square',
                image: false
            },
            {
                title: this.translate.instant('page-title.setting'),
                component: this.routes.setting,
                icon: 'settings',
                image: false
            },
            {
                title: this.translate.instant('page-title.logout'),
                component: 'logout',
                icon: 'lock',
                image: false
            }
        ];
    }
    /** setup splash screen and status bar */
    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }
    /** set or default language for translations
     * @param lang
     */
    langConfig(lang) {
        if (lang) {
            this.storage.set('language', lang);
            this.translate.setDefaultLang(lang);
            this.translate.use(lang);
        }
        else {
            this.translate.setDefaultLang('gb');
            this.translate.use('gb');
        }
    }
};
AppService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [Injector,
        Platform,
        SplashScreen,
        StatusBar,
        Storage,
        FirestoreService])
], AppService);
export { AppService };
//# sourceMappingURL=app.service.js.map