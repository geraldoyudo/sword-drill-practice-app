import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators'
import { Verse } from './verse';
import { BibleBookIndexService } from './bible-book-index.service';

const AUTH: string = "Basic SUY0RWh0eXc4dmd4cVBuWERySXhKamk1a2VLaWMyVzhwbjVuUlBGcjpY";
const HTTP_OPTIONS = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': AUTH
  })
};

@Injectable({
  providedIn: 'root'
})
export class VerseService {

  constructor(private http: HttpClient, 
    private bibleBookIndexService: BibleBookIndexService) { }

  getVerse(verseId: string): Observable<Verse>{
    return this.http.get("https://cors-anywhere.herokuapp.com/https://bibles.org/v2/verses/" + verseId + ".js", HTTP_OPTIONS)
      .pipe(
        map(response => this.getVerseFromResponse(verseId, response))
      )
  }

  getVerseFromResponse(verseId: string, response: any): Verse {
    let verse:Verse = new Verse();
    let groups = verseId.match(/eng-GNBDC:([\w\d ]+).([\w\d ]+).([\w\d ]+)/)
    verse.book = this.bibleBookIndexService.getBook(groups[1]);
    verse.chapter = groups[2];
    verse.verse = groups[3];
    verse.text = response.response.verses[0].text;
    return verse;
  }
}
