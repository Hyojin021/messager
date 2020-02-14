import { TestBed } from '@angular/core/testing';
import { FirestoreService } from './firestore.service';
describe('FirestoreService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));
    it('should be created', () => {
        const service = TestBed.get(FirestoreService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=firestore.service.spec.js.map