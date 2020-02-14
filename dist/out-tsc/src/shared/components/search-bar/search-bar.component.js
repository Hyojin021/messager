import * as tslib_1 from "tslib";
import { Component, EventEmitter, Injector, Output } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { Extender } from 'src/shared/helpers/extender';
let SearchBarComponent = class SearchBarComponent extends Extender {
    constructor(injector) {
        super(injector);
        this.injector = injector;
        /** capture user search data */
        this.search = new Subject();
        /** emit event */
        this.event = new EventEmitter();
    }
    /** subscribe to search events */
    ngOnInit() {
        this._searchSubscription();
    }
    /** clear search input and send empty string */
    clearSearch(input) {
        this.search.next('');
        input.value = '';
    }
    /** subscribe to search input changes */
    _searchSubscription() {
        this.subscriptions.push(this.search
            .pipe(map((value) => value), debounceTime(600), distinctUntilChanged())
            .subscribe((searchPhrase) => {
            if (searchPhrase && searchPhrase.trim() !== '') {
                this.hasValue = true;
            }
            else {
                this.hasValue = false;
            }
            this.event.next(searchPhrase);
        }));
    }
};
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], SearchBarComponent.prototype, "event", void 0);
SearchBarComponent = tslib_1.__decorate([
    Component({
        selector: 'app-search-bar',
        templateUrl: './search-bar.component.html',
        styleUrls: ['./search-bar.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [Injector])
], SearchBarComponent);
export { SearchBarComponent };
//# sourceMappingURL=search-bar.component.js.map