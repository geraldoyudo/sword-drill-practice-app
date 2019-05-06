import { TestBed } from '@angular/core/testing';

import { RandomVerseGeneratorService } from './random-verse-generator.service';
import { Verse } from './verse';
import { Observable, of } from 'rxjs';
import { VerseService } from './verse.service';

class MockVerseService {
  getVerse(verseId: string): Observable<Verse>{
    let verse: Verse = new Verse();
    verse.book = "Genesis";
    verse.chapter = "1";
    verse.verse = "1";
    verse.text = "And God said, let there be light";
    return of(verse);
  }
}

describe('RandomVerseGeneratorService', () => {
  let mockVerseService: MockVerseService = new MockVerseService();

  beforeEach(() => TestBed.configureTestingModule({
    providers: [{provide: VerseService, useValue: mockVerseService}]
  }));

  it('should be created', () => {
    const service: RandomVerseGeneratorService = TestBed.get(RandomVerseGeneratorService);
    expect(service).toBeTruthy();
  });

  it('should generate random verse', (done) => {
    const service: RandomVerseGeneratorService = TestBed.get(RandomVerseGeneratorService);
    let verse: Verse;
    service.generateVerse().subscribe(verse => {
      expect(verse).toBeTruthy();
      done();
    })
  })
});
