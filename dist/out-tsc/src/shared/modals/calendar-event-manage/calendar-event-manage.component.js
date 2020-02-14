import * as tslib_1 from "tslib";
import { Component, Injector } from '@angular/core';
import { NavParams } from '@ionic/angular';
import * as moment from 'moment';
import { AuthService } from 'src/pages/auth/services/auth/auth.service';
import { ScheduleService } from 'src/pages/dashboard/services/schedule/schedule.service';
import { Extender } from 'src/shared/helpers/extender';
/** add or edit calendar event */
let CalendarEventManageComponent = class CalendarEventManageComponent extends Extender {
    constructor(injector, navParams, authService, scheduleService) {
        super(injector);
        this.injector = injector;
        this.navParams = navParams;
        this.authService = authService;
        this.scheduleService = scheduleService;
        this.event = null;
        this.remindTimes = [10, 30, 60, 120, 160, 1440];
        this.locations = [];
        this.showRemind = false;
        this.showNotes = false;
    }
    /** get user and get calendar event data. format date to work with the date picker  */
    ngOnInit() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.user = yield this.authService.getUser();
            const calData = this.navParams.get('data');
            if (calData.data) {
                this.event = calData.data;
                this.event.start = new Date(+this.event.start).toISOString();
                this.event.end = new Date(+this.event.end).toISOString();
            }
            else {
                this.event = {
                    recurrence: [{}],
                    start: new Date(calData.day.date).toISOString(),
                    end: new Date(calData.day.date).toISOString(),
                    title: '',
                    uid: this.user.uid
                };
            }
        });
    }
    /** humanize date using moment */
    getHumanize(time) {
        return moment.duration(time, 'minutes').humanize(true);
    }
    /** add a reminder to calendar event object */
    addReminder() {
        this.event.recurrence.push({});
    }
    /** remove a reminder from calendar event object */
    removeReminder(i) {
        this.event.recurrence.splice(i, 1);
    }
    /** format event dates and reminders and save or update event */
    save() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.event.recurrence =
                this.event.recurrence && this.event.recurrence.length > 0
                    ? this.event.recurrence.map((reminder) => moment(this.event.start)
                        .subtract(reminder, 'minutes')
                        .toISOString())
                    : [];
            if (this.event.id) {
                this.scheduleService.updateEvent(this.event).then();
            }
            else {
                this.scheduleService.addEvent(this.event).then();
            }
            this.closeModal(this.event);
        });
    }
};
CalendarEventManageComponent = tslib_1.__decorate([
    Component({
        selector: 'app-calendar-event-manage',
        templateUrl: './calendar-event-manage.component.html',
        styleUrls: ['./calendar-event-manage.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [Injector,
        NavParams,
        AuthService,
        ScheduleService])
], CalendarEventManageComponent);
export { CalendarEventManageComponent };
//# sourceMappingURL=calendar-event-manage.component.js.map