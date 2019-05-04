import { TestBed } from '@angular/core/testing';
import { VerseService } from './verse.service';
import { HttpClientTestingModule,
  HttpTestingController } from '@angular/common/http/testing';

describe('VerseService', () => {
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    })
    httpTestingController = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    const service: VerseService = TestBed.get(VerseService);
    expect(service).toBeTruthy();
  });

  it('should return proper verse given verse id', (done) => {
    const service: VerseService = TestBed.get(VerseService);
    service.getVerse("eng-GNBDC:Gen.1.1").subscribe((verse) => {
      expect(verse).toBeTruthy();
      expect(verse.book).toEqual("Genesis");
      expect(verse.chapter).toEqual("1");
      expect(verse.verse).toEqual("1");
      expect(verse.text).toEqual("And God said, let there be light");
      done();
    })
    const req = httpTestingController.expectOne('https://cors-anywhere.herokuapp.com/https://bibles.org/v2/verses/eng-GNBDC:Gen.1.1.js');
    expect(req.request.method).toEqual('GET');
    req.flush(MOCK_RESPONSE);
    httpTestingController.verify();
  })
});

var MOCK_RESPONSE: any = {
  "response": {
      "verses": [
          {
              "auditid": "0",
              "verse": "1",
              "lastverse": "1",
              "id": "eng-GNBDC:Gen.1.1",
              "osis_end": "eng-GNBDC:Gen.1.1",
              "label": "",
              "reference": "Genesis 1:1",
              "prev_osis_id": "",
              "next_osis_id": "Gen.001.002,eng-GNBDC",
              "text": "And God said, let there be light",
              "parent": {
                  "chapter": {
                      "path": "/chapters/eng-GNBDC:Gen.1",
                      "name": "Genesis 1",
                      "id": "eng-GNBDC:Gen.1"
                  }
              },
              "next": {
                  "verse": {
                      "path": "/verses/eng-GNBDC:Gen.1.2",
                      "name": "Genesis 1:2",
                      "id": "eng-GNBDC:Gen.1.2"
                  }
              },
              "copyright": "        <p>Good News Translation® with Deuterocanonicals/Apocrypha (Today’s English Version, Second Edition)<br/></p>        <p>© 1992 American Bible Society. All rights reserved. </p>        <p>Anglicisation © The British and Foreign Bible Society 1976, 1994, 2004 </p>        <p>The copyright for the derivative work of Anglicisation pertains only to the text within the Good News Translation (GNT) that British and Foreign Bible Society adapted for British literary usage, consistent with Section 103(b) of the United States Copyright Act, 17 U.S.C. § 103(b). </p>        <p>Bible text from the Good News Translation (GNT) is not to be reproduced in copies or otherwise by any means except as permitted in writing by American Bible Society, 101 North Independence Mall East, Floor 8, Philadelphia, PA 19106-2155 (www.americanbible.org).</p>        <p>\n        <br/>\n      </p>      "
          }
      ],
      "meta": {
          "fums": "<script>\nvar _BAPI=_BAPI||{};\nif(typeof(_BAPI.t)==='undefined'){\ndocument.write('\\x3Cscript src=\"'+document.location.protocol+'//d2ue49q0mum86x.cloudfront.net/include/fums.c.js\"\\x3E\\x3C/script\\x3E');}\ndocument.write(\"\\x3Cscript\\x3E_BAPI.t('5ccda5b66e2485.06739260');\\x3C/script\\x3E\");\n</script><noscript><img src=\"https://d3a2okcloueqyx.cloudfront.net/nf1?t=5ccda5b66e2485.06739260\" height=\"1\" width=\"1\" border=\"0\" alt=\"\" style=\"height: 0; width: 0;\" /></noscript>",
          "fums_tid": "5ccda5b66e2485.06739260",
          "fums_js_include": "d2ue49q0mum86x.cloudfront.net/include/fums.c.js",
          "fums_js": "var _BAPI=_BAPI||{};if(typeof(_BAPI.t)!='undefined'){ _BAPI.t('5ccda5b66e2485.06739260'); }",
          "fums_noscript": "<img src=\"https://d3a2okcloueqyx.cloudfront.net/nf1?t=5ccda5b66e2485.06739260\" height=\"1\" width=\"1\" border=\"0\" alt=\"\" style=\"height: 0; width: 0;\" />"
      }
  }
};