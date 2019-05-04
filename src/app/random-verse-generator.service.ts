import { Injectable } from '@angular/core';
import { Verse } from './verse';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BibleBookIndexService } from './bible-book-index.service';
import { VERSES } from './book-data';
import { Observable } from 'rxjs';
import { VerseService } from './verse.service';

@Injectable({
  providedIn: 'root'
})
export class RandomVerseGeneratorService {
  versesLoadedPromise: Promise<void>;
  constructor(private verseService: VerseService, 
    private bibleBookIndexService: BibleBookIndexService) {
  }

  generateVerse(): Observable<Verse> {
    let maxNumber: number = this.bibleBookIndexService.getNumberOfVerses();
    let randomIndex: number = Math.round(Math.random() * maxNumber);
    if (randomIndex == maxNumber){
      randomIndex == 0;
    }
    return this.verseService.getVerse(this.bibleBookIndexService.getVerseId(randomIndex));
  }
}
