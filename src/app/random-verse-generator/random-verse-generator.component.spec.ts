import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomVerseGeneratorComponent } from './random-verse-generator.component';
import { RandomVerseGeneratorService } from '../random-verse-generator.service';
import { Verse } from '../verse';

class MockRandomVerseGeneratorService extends RandomVerseGeneratorService{

  constructor() { super(); }

  generateVerse(): Verse {
     let verse: Verse =  new Verse();
     verse.book = "Genesis";
     verse.chapter = "1";
     verse.verse = "1";
     verse.text = "And God Said, let there be light";
     return verse;
  }
}
describe('RandomVerseGeneratorComponent', () => {
  let component: RandomVerseGeneratorComponent;
  let fixture: ComponentFixture<RandomVerseGeneratorComponent>;
  let app: any
  let mockRandomVerseGeneratorService: MockRandomVerseGeneratorService;

  beforeEach(async(() => {
    mockRandomVerseGeneratorService = new MockRandomVerseGeneratorService();
    TestBed.configureTestingModule({
      declarations: [ RandomVerseGeneratorComponent ],
      providers: [ {provide: RandomVerseGeneratorService, useValue: mockRandomVerseGeneratorService } ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomVerseGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    app = fixture.debugElement.componentInstance
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have correct book', () => {
    expect(app.verse.book).toEqual('Genesis');
  });

  it('should have correct chapter', () => {
    expect(app.verse.chapter).toEqual('1');
  });

  it('should have correct verse', () => {
    expect(app.verse.verse).toEqual('1');
  });

  it('should have correct verse text', () => {
    expect(app.verse.text).toEqual('And God Said, let there be light');
  });

  it('should call generateVerse method when clicked', () => {
    let generateVerseSpy = spyOn(mockRandomVerseGeneratorService, "generateVerse")
    let button = fixture.nativeElement.querySelector("#generateVerseButton");
    button.click();
    expect(generateVerseSpy).toHaveBeenCalled();
  });
});
