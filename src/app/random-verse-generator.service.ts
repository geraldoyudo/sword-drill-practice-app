import { Injectable } from '@angular/core';
import { Verse } from './verse';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BibleBookIndexService, VERSES } from './bible-book-index.service';

@Injectable({
  providedIn: 'root'
})
export class RandomVerseGeneratorService {
  versesLoadedPromise: Promise<void>;
  verseStrings: string[] = VERSES;

  constructor(private bibleBookIndexService: BibleBookIndexService, 
    private http: HttpClient) {
  }

  async generateVerse(): Promise<Verse> {
    let maxNumber: number = this.verseStrings.length;
    let randomIndex: number = Math.round(Math.random() * maxNumber);
    if (randomIndex == maxNumber){
      randomIndex == 0;
    }
    return this.getVerse(this.verseStrings[randomIndex]);
  }

  async getVerse(verseId: string):Promise<Verse> {
    let auth: string = "Basic SUY0RWh0eXc4dmd4cVBuWERySXhKamk1a2VLaWMyVzhwbjVuUlBGcjpY";
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': auth
      })
    };
    let response:any = await this.http.get("https://cors-anywhere.herokuapp.com/https://bibles.org/v2/verses/" + verseId + ".js", httpOptions).toPromise();
    let verse:Verse = new Verse();
    let groups = verseId.match(/eng-GNBDC:([\w\d ]+).([\w\d ]+).([\w\d ]+)/)
    verse.book = this.bibleBookIndexService.getBook(groups[1]);
    verse.chapter = groups[2];
    verse.verse = groups[3];
    verse.text = response.response.verses[0].text;
    return Promise.resolve(verse);
  }
}
