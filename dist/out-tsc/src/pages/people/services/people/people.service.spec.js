import { TestBed } from '@angular/core/testing';
import { PeopleService } from './people.service';
describe('PeopleService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));
    it('should be created', () => {
        const service = TestBed.get(PeopleService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=people.service.spec.js.map