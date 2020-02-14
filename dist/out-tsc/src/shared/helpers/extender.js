import * as tslib_1 from "tslib";
import { Location } from '@angular/common';
import { Injector, Optional } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActionSheetController, AlertController, ModalController, ToastController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { SubscriptionsService } from '../services/subscriptions/subscriptions.service';
import { Routes } from './routes';
/**
 * @class Extender
 */
let Extender = class Extender {
    constructor(_injector) {
        this._injector = _injector;
        // implements OnDestroy {
        this.status = '';
        this.loading = false;
    }
    /** get access to subscriptions in SubscriptionService, this makes it accessible to all components that extend this class */
    get subscriptions() {
        return this._injector.get(SubscriptionsService).subscriptions;
    }
    /** uncomment and add onDestroy implementation to unsubscribe from subscriptions in all components */
    /** unsubscribe to all subscriptions saved in SubscriptionsService */
    // public forceSubscriptionDestroy(): void {
    //   for (const sub of this.subscriptions) {
    //     sub.unsubscribe();
    //   }
    // }
    /** unsubscribe to all subscriptions saved in SubscriptionsService on component destroy */
    // public ngOnDestroy(): void {
    //   for (const sub of this.subscriptions) {
    //     sub.unsubscribe();
    //   }
    // }
    /** get access to routes and make them available app wide in any class that extends this class */
    get routes() {
        return Routes._routes;
    }
    /** inject angular Router class, saves us having to add this in several component constructors */
    get router() {
        return this._injector.get(Router);
    }
    /** navigate back */
    back() {
        return this._injector.get(Location).back();
    }
    /** inject angular ActivatedRoute class, saves us having to add this in several component constructors */
    get activatedRoute() {
        return this._injector.get(ActivatedRoute);
    }
    /** inject TranslateService class, saves us having to add this in several component constructors */
    get translate() {
        return this._injector.get(TranslateService);
    }
    /** handles routing to pages allows to include route params */
    goto(page, params = null) {
        if (!params) {
            return this.router.navigate([page]);
        }
        else {
            return this.router.navigate([page], params);
        }
    }
    /** inject ionic ToastController class, saves us having to add this in several component constructors */
    get toastCtrl() {
        return this._injector.get(ToastController);
    }
    /**
     * methods with default toast settings and handling message input into toast for errors
     * error messages tend to have the format error.message
     * @param msg
     */
    toast(msg) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            let val;
            val = typeof msg === 'string' ? msg : msg.message;
            const toast = yield this.toastCtrl.create({
                message: val,
                duration: 2000
            });
            toast.present();
        });
    }
    /** inject ionic ActionSheetController class, saves us having to add this in several component constructors */
    get actionSheetCtrl() {
        return this._injector.get(ActionSheetController);
    }
    /** inject ionic AlertController class, saves us having to add this in several component constructors */
    get alertCtrl() {
        return this._injector.get(AlertController);
    }
    /** inject ionic ModalController class, saves us having to add this in several component constructors */
    get modalCtrl() {
        return this._injector.get(ModalController);
    }
    /** open modal for various components, add component properties and class */
    openModal(component, componentProps = {}, cssClass = '') {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component,
                componentProps: { data: componentProps },
                cssClass
            });
            return modal;
        });
    }
    /**
     * closes modal, can close with data and/or close and force a back navigation if you specify goBack to be true
     * @param data
     * @param goBack
     */
    closeModal(data = null, route = false) {
        this.modalCtrl.dismiss(data);
        if (route) {
            this.goto(route);
        }
    }
    /** convert timestamp from firebase to date */
    toDate(item) {
        return new Date(item);
    }
    /** get random integer between two values */
    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
};
Extender = tslib_1.__decorate([
    tslib_1.__param(0, Optional()),
    tslib_1.__metadata("design:paramtypes", [Injector])
], Extender);
export { Extender };
//# sourceMappingURL=extender.js.map