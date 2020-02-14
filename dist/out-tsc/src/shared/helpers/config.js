import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HammerGestureConfig } from '@angular/platform-browser';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
/** translate http loader functions
 * https://github.com/ngx-translate/http-loader
 */
export function createTranslateLoader(http) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
/**
 * This class overrides the default Angular gesture config and adds hammer gesture config
 * make sure hammer is imported in main.ts
 * https://medium.com/madewithply/ionic-4-long-press-gestures-96cf1e44098b
 */
let IonicGestureConfig = class IonicGestureConfig extends HammerGestureConfig {
    buildHammer(element) {
        const mc = new window.Hammer(element);
        for (const eventName in this.overrides) {
            if (eventName) {
                mc.get(eventName).set(this.overrides[eventName]);
            }
        }
        return mc;
    }
};
IonicGestureConfig = tslib_1.__decorate([
    Injectable()
], IonicGestureConfig);
export { IonicGestureConfig };
//# sourceMappingURL=config.js.map