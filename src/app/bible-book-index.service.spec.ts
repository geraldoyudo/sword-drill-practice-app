import { BibleBookIndexService } from './bible-book-index.service';

describe('BibleBookIndexService', () => {
  const service: BibleBookIndexService = new BibleBookIndexService ();

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return correct book', () => {
    expect(service.getBook("Gen")).toBe("Genesis");
  });

  it('should return correct verse', () => {
    expect(service.getVerseId(0)).toBe("eng-GNBDC:Gen.1.1");
  });
});


