import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { stringify } from '@angular/core/src/render3/util';

@Injectable({
  providedIn: 'root'
})
export class BibleBookIndexService {
  bookIndexMap: Map<string, string>;
  bookRetrievalPromise: Promise<void>;

  constructor(private http: HttpClient) { 
    this.bookRetrievalPromise = this.getBookIndex();
  }

  async getBookIndex():Promise<void> {
    this.http.get('/assets/books.csv', {responseType: 'text'})
        .subscribe(data => this.parseBookIndexText(data));
  }

  parseBookIndexText(bookIndexData: string): void {
    this.bookIndexMap = new Map<string,string>();
     let lines: string[] = bookIndexData.split("\n");
     for(var i=1; i< lines.length; ++i){
        let line = lines[i];
        let fields: string[] = line.split(",");
        this.bookIndexMap.set(fields[2],fields[1]);
     }
  }

  async getBook(abbr: string): Promise<String> {
    await this.bookRetrievalPromise;
    return this.bookIndexMap.get(abbr);
  }
}
