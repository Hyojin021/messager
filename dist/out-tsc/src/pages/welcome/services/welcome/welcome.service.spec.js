import { TestBed } from '@angular/core/testing';
import { WelcomeService } from './welcome.service';
describe('WelcomeService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));
    it('should be created', () => {
        const service = TestBed.get(WelcomeService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=welcome.service.spec.js.map