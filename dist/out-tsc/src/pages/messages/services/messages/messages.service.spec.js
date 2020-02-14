import { TestBed } from '@angular/core/testing';
import { MessagesService } from './messages.service';
describe('MessagesService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));
    it('should be created', () => {
        const service = TestBed.get(MessagesService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=messages.service.spec.js.map