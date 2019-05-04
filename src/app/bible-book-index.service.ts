import { Injectable } from '@angular/core';
import { BOOK_MAP, VERSES } from './book-data';

@Injectable({
  providedIn: 'root'
})
export class BibleBookIndexService {

  constructor() { 
  }

  getBook(abbr: string): string {
      return BOOK_MAP[abbr];
  }

  getVerseId(index: number) {
      return VERSES[index];
  }

  getNumberOfVerses() {
      return VERSES.length;
  }
}
