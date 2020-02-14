import * as tslib_1 from "tslib";
import { Injectable, Injector } from '@angular/core';
import { Extender } from 'src/shared/helpers/extender';
import { FirestoreService } from 'src/shared/services/firestore/firestore.service';
/**
 * crud methods to interact with firebase cloud store regarding calendar events
 */
let ScheduleService = class ScheduleService extends Extender {
    constructor(injector, firestoreService) {
        super(injector);
        this.injector = injector;
        this.firestoreService = firestoreService;
    }
    /** get user events by querying for user id in collection item */
    getUserEvents(uid) {
        return this.firestoreService.colWithIds$('events', (ref) => ref.where('uid', '==', uid));
    }
    /** get all events */
    getEvent(id) {
        return this.firestoreService.doc$(`events/${id}`);
    }
    /** add new calendar event, format dates appropriately */
    addEvent(data) {
        data.start = Date.parse(data.start);
        data.end = Date.parse(data.end);
        return this.firestoreService.add('events', data);
    }
    /** update calendar event, format dates appropriately */
    updateEvent(data) {
        data.start = !Number(data.start) ? Date.parse(data.start) : data.start;
        data.end = !Number(data.end) ? Date.parse(data.end) : data.end;
        return this.firestoreService.update(`events/${data.id}`, data);
    }
    /** remove calendar event */
    removeEvent(id) {
        return this.firestoreService.delete(`events/${id}`);
    }
};
ScheduleService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [Injector, FirestoreService])
], ScheduleService);
export { ScheduleService };
//# sourceMappingURL=schedule.service.js.map