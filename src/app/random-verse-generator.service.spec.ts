import { TestBed } from '@angular/core/testing';

import { RandomVerseGeneratorService } from './random-verse-generator.service';
import { Verse } from './verse';

describe('RandomVerseGeneratorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RandomVerseGeneratorService = TestBed.get(RandomVerseGeneratorService);
    expect(service).toBeTruthy();
  });

  it('should generate random verse', () => {
    const service: RandomVerseGeneratorService = TestBed.get(RandomVerseGeneratorService);
    let verse: Verse;
    verse = service.generateVerse();
    expect(verse).toBeTruthy();
  })
});
