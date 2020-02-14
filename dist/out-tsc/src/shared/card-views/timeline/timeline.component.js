import * as tslib_1 from "tslib";
import { Component, EventEmitter, Injector, Input, Output } from '@angular/core';
import { AuthService } from 'src/pages/auth/services/auth/auth.service';
import { Extender } from 'src/shared/helpers/extender';
let TimelineComponent = class TimelineComponent extends Extender {
    /**
     * @constructor
     * @param injector {Injector}
     */
    constructor(injector, authService) {
        super(injector);
        this.injector = injector;
        this.authService = authService;
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
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], TimelineComponent.prototype, "feed", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], TimelineComponent.prototype, "event", void 0);
TimelineComponent = tslib_1.__decorate([
    Component({
        selector: 'feed-timeline',
        templateUrl: './timeline.component.html',
        styleUrls: ['./timeline.component.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [Injector, AuthService])
], TimelineComponent);
export { TimelineComponent };
//# sourceMappingURL=timeline.component.js.map