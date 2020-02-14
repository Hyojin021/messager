import { inject, TestBed } from '@angular/core/testing';
import { WelcomeGuard } from './welcome.guard';
describe('WelcomeGuard', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [WelcomeGuard]
        });
    });
    it('should ...', inject([WelcomeGuard], (guard) => {
        expect(guard).toBeTruthy();
    }));
});
//# sourceMappingURL=welcome.guard.spec.js.map