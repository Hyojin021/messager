import { TestBed } from '@angular/core/testing';
import { CommonService } from './common.service';
describe('TravelService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));
    it('should be created', () => {
        const service = TestBed.get(CommonService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=common.service.spec.js.map