import * as tslib_1 from "tslib";
import { Component, Injector } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { ScheduleService } from 'src/pages/dashboard/services/schedule/schedule.service';
import { Extender } from 'src/shared/helpers/extender';
import { CalendarEventManageComponent } from '../calendar-event-manage/calendar-event-manage.component';
/**
 * get events for a selected day from calendar component
 */
let CalendarEventListComponent = class CalendarEventListComponent extends Extender {
    constructor(injector, navParam, scheduleService) {
        super(injector);
        this.injector = injector;
        this.navParam = navParam;
        this.scheduleService = scheduleService;
        this.events = [];
    }
    /** get events from nav params */
    ngOnInit() {
        this.day = this.navParam.get('data');
        this.events = this.day.data.events;
    }
    /** open calendar event manage to edit event and on dismiss, add or replace event in events list */
    open(day, data = null, index) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const modal = yield this.openModal(CalendarEventManageComponent, { day, data });
            modal.present();
            modal.onDidDismiss().then((item) => {
                if (item.data && !item.data.id) {
                    this.events.push(item.data);
                }
                else if (item.data && !item.data.id) {
                    this.events.splice(index, 1, item.data);
                }
            });
        });
    }
    /** update event as completed */
    updateAsCompleted(event, index) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.scheduleService.updateEvent(event);
            this.events.splice(index, 1, event);
        });
    }
    /** delete event */
    delete(item, index) {
        this.scheduleService.removeEvent(item.id);
        this.events.splice(index, 1);
    }
};
CalendarEventListComponent = tslib_1.__decorate([
    Component({
        selector: 'app-calendar-event-list',
        templateUrl: './calendar-event-list.component.html',
        styleUrls: ['./calendar-event-list.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [Injector, NavParams, ScheduleService])
], CalendarEventListComponent);
export { CalendarEventListComponent };
//# sourceMappingURL=calendar-event-list.component.js.map