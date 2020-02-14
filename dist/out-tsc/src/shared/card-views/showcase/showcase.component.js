import * as tslib_1 from "tslib";
import { Component, EventEmitter, Injector, Input, Output } from '@angular/core';
import { AuthService } from 'src/pages/auth/services/auth/auth.service';
import { Extender } from 'src/shared/helpers/extender';
let ShowcaseComponent = class ShowcaseComponent extends Extender {
    /**
     * @constructor
     * @param injector {Injector}
     */
    constructor(injector, authService) {
        super(injector);
        this.injector = injector;
        this.authService = authService;
        /**
         * @description holds current index of image
         * @property currentIndex
         * @type number
         * @public
         * @default 0
         */
        this.currentIndex = 0;
        /**
         * @description emits event with type and feed
         * @example clicking like button will emit {type: 'like', data: feed}
         * @property cardEvent
         * @type EventEmitter<{type: string, data: Feed}>
         * @public
         */
        this.event = new EventEmitter();
    }
    /**
     * @description get user on component init
     * @method ngOnInit
     * @public
     * @returns void
     */
    ngOnInit() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.me = yield this.authService.getUser();
        });
    }
    /**
     * @description onclick emit event with event name and data
     * @method clicked
     * @param {string} name
     * @public
     * @returns void
     */
    clicked(name) {
        this.event.emit({ type: name, data: this.feed });
    }
    /**
     * @description navigate to the next image
     * @method forward
     * @public
     * @returns void
     */
    forward() {
        if (this.currentIndex < this.feed.images.length - 1) {
            this.currentIndex += 1;
        }
        else {
            this.currentIndex = 0;
        }
    }
    /**
     * @description navigate to the previous image
     * @method back
     * @public
     * @returns void
     */
    back() {
        if (this.currentIndex < 1) {
            this.currentIndex = this.feed.images.length - 1;
        }
        else {
            this.currentIndex -= 1;
        }
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], ShowcaseComponent.prototype, "feed", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], ShowcaseComponent.prototype, "event", void 0);
ShowcaseComponent = tslib_1.__decorate([
    Component({
        selector: 'feed-showcase',
        templateUrl: './showcase.component.html',
        styleUrls: ['./showcase.component.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [Injector, AuthService])
], ShowcaseComponent);
export { ShowcaseComponent };
//# sourceMappingURL=showcase.component.js.map