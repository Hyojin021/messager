import * as tslib_1 from "tslib";
import { Component, EventEmitter, Injector, Input, Output } from '@angular/core';
import * as moment from 'moment';
import { AuthService } from 'src/pages/auth/services/auth/auth.service';
import { Extender } from 'src/shared/helpers/extender';
import { CalendarEventListComponent } from 'src/shared/modals/calendar-event-list/calendar-event-list.component';
import { ICalendar } from '../../models/calendar';
import { ScheduleService } from '../../services/schedule/schedule.service';
/**
 * scheduling and calendar events are managed by this component.
 * users can navigate calendar and view events of a day
 */
let ScheduleComponent = class ScheduleComponent extends Extender {
    constructor(injector, authService, calendarService) {
        super(injector);
        this.injector = injector;
        this.authService = authService;
        this.calendarService = calendarService;
        this.months = moment.months();
        this.selectedMonth = new Date().getMonth();
        this.selectedYear = new Date().getFullYear();
        this.weekDays = moment.weekdays();
        this.currentCalendar = new ICalendar(this.selectedYear, this.selectedMonth, []);
        this.loading = false;
        this.items = null;
        this.event = new EventEmitter();
    }
    /** get all years between 20 years in future and start from 2009 */
    get years() {
        const currentYear = moment(new Date())
            .add(20, 'years')
            .year();
        const years = [];
        let startYear = 2009;
        while (startYear <= currentYear) {
            years.push(startYear++);
        }
        return years;
    }
    /** get user, get user calendar events and build calendar */
    ngOnInit() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.loading = true;
            this.user = yield this.authService.getUser();
            this.subscriptions.push(this.calendarService.getUserEvents(this.user.uid).subscribe((events) => {
                this.items = events;
                this.buildCalendar(this.items, true);
                this.loading = false;
            }, (err) => {
                this.toast(err);
                this.loading = false;
            }));
        });
    }
    /** check if date is a settable date. used in template to disable older dates */
    getIsSettable(day) {
        if (day && day.date) {
            return (day.date.getTime() <
                new Date(moment()
                    .subtract(1, 'day')
                    .toDate()).getTime());
        }
        return false;
    }
    /** configure rows for the calendar */
    getRow(index, day) {
        const startRow = 2;
        const weekRow = Math.floor(index / 7);
        const firstWeekDayOfMonth = new Date(this.selectedYear, this.selectedMonth, 1).getDay();
        const irregularRow = day.dayInWeek < firstWeekDayOfMonth ? 1 : 0;
        return startRow + weekRow + irregularRow;
    }
    /** on day change, if user selects another day, open view day to see list of events for that day */
    onChangeStatus(day) {
        if (this.getIsSettable(day)) {
            return;
        }
        this.selectedDay = day;
        this.event.next(this.selectedDay);
        this.view(this.selectedDay);
    }
    /** change month drop with get intended month and build calendar.
     * manage month index value to make sure month only falls between 0-11
     */
    changeMonth(value) {
        if (value > 11) {
            value = 0;
            this.selectedYear = this.selectedYear + 1;
        }
        else if (value < 0) {
            value = 11;
            this.selectedYear = this.selectedYear - 1;
        }
        this.selectedMonth = value;
        this.buildCalendar(this.items);
    }
    /** get selected year and build calendar */
    changeYear(value) {
        this.selectedYear = value;
        this.buildCalendar(this.items);
    }
    /** open list of calendar events for selected day */
    view(day) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const modal = yield this.openModal(CalendarEventListComponent, { data: day });
            yield modal.present();
        });
    }
    /** build calendar using ICalendar class */
    buildCalendar(items, selectDay = false) {
        this.currentCalendar = new ICalendar(this.selectedYear, this.selectedMonth, items || []);
        if (selectDay) {
            this.selectedDay = this.currentCalendar.currentDay;
        }
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], ScheduleComponent.prototype, "items", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], ScheduleComponent.prototype, "event", void 0);
ScheduleComponent = tslib_1.__decorate([
    Component({
        selector: 'app-schedule',
        templateUrl: './schedule.component.html',
        styleUrls: ['./schedule.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [Injector, AuthService, ScheduleService])
], ScheduleComponent);
export { ScheduleComponent };
//# sourceMappingURL=schedule.component.js.map