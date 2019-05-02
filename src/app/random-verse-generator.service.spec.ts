import { TestBed } from '@angular/core/testing';

import { RandomVerseGeneratorService } from './random-verse-generator.service';
import { Verse } from './verse';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('RandomVerseGeneratorService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: RandomVerseGeneratorService = TestBed.get(RandomVerseGeneratorService);
    expect(service).toBeTruthy();
  });

  it('should generate random verse', () => {
    const service: RandomVerseGeneratorService = TestBed.get(RandomVerseGeneratorService);
    let verse: Verse;
    service.generateVerse().then(verse => {
      expect(verse).toBeTruthy();
    })
  })
});
