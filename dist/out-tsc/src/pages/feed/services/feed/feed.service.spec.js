import { TestBed } from '@angular/core/testing';
import { FeedService } from './feed.service';
describe('FeedService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));
    it('should be created', () => {
        const service = TestBed.get(FeedService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=feed.service.spec.js.map