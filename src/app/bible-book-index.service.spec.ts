import { TestBed } from '@angular/core/testing';

import { BibleBookIndexService } from './bible-book-index.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('BibleBookIndexService', () => {
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    })
    httpMock = TestBed.get(HttpTestingController); 
  });

  it('should be created', () => {
    const service: BibleBookIndexService = TestBed.get(BibleBookIndexService);
    expect(service).toBeTruthy();
  });

  it('should return correct book', () => {
    const service: BibleBookIndexService = TestBed.get(BibleBookIndexService);
    service.getBook("Gen").then(book => {
      expect(book).toBe("Genesis");
    })
    service.getBook("Exod").then(book => {
      expect(book).toBe("Exodus");
    })
    setUpApi(httpMock);
  });
});

function setUpApi(httpMock: HttpTestingController) {
  const req = httpMock.expectOne("/assets/books.csv");
  expect(req.request.method).toBe("GET");
  req.flush("order,name,abbr,chapter_id\n1,Genesis,Gen,eng-GNBDC:Gen\n2,Exodus,Exod,eng-GNBDC:Exod");
}

