import { TestBed, inject } from '@angular/core/testing';
import { VerifyEmailGuard } from './verify-email.guard';
describe('VerifyEmailGuard', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [VerifyEmailGuard]
        });
    });
    it('should ...', inject([VerifyEmailGuard], (guard) => {
        expect(guard).toBeTruthy();
    }));
});
//# sourceMappingURL=verify-email.guard.spec.js.map