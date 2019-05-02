import { TestBed } from '@angular/core/testing';

import { BibleBookIndexService } from './bible-book-index.service';

describe('BibleBookIndexService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
    })
  });

  it('should be created', () => {
    const service: BibleBookIndexService = TestBed.get(BibleBookIndexService);
    expect(service).toBeTruthy();
  });

  it('should return correct book', () => {
    const service: BibleBookIndexService = TestBed.get(BibleBookIndexService);
    expect(service.getBook("Gen")).toBe("Genesis");
  });
});


