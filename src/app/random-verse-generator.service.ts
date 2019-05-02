import { Injectable } from '@angular/core';
import { Verse } from './verse';

@Injectable({
  providedIn: 'root'
})
export class RandomVerseGeneratorService {

  constructor() { }

  generateVerse(): Verse {
     return new Verse();
  }
}
