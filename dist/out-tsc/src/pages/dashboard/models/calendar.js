import * as moment from 'moment';
import { DayStatus } from './day.model';
export class ICalendar {
    constructor(year, month, events = [], _days = []) {
        this.year = year;
        this.month = month;
        this.events = events;
        this._days = _days;
        if (_days.length > 0) {
            return;
        }
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        for (let i = 1; i < daysInMonth + 1; i++) {
            const calEvents = [];
            const date = new Date(year, month, i);
            const dayInWeek = date.getDay();
            if (events && events.length > 0) {
                events.forEach((eventItem) => {
                    const _eventItem = Object.assign({}, eventItem);
                    const start = moment(eventItem.start).startOf('day');
                    const end = moment(eventItem.start).endOf('day');
                    if (moment(date).isBetween(start, end, null, '[]')) {
                        calEvents.push(_eventItem);
                    }
                });
            }
            this._days.push({
                dayInMonth: i,
                dayInWeek,
                date,
                status: DayStatus.Open,
                events: calEvents.length > 0 ? calEvents : []
            });
        }
    }
    get currentDay() {
        return this._days.find((d) => d.dayInMonth === new Date().getDate());
    }
    get days() {
        return [...this._days];
    }
}
//# sourceMappingURL=calendar.js.map