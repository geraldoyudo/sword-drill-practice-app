import { Component, OnInit } from '@angular/core';
import { RandomVerseGeneratorService } from '../random-verse-generator.service';
import { Verse } from '../verse';

@Component({
  selector: 'app-random-verse-generator',
  templateUrl: './random-verse-generator.component.html',
  styleUrls: ['./random-verse-generator.component.css']
})
export class RandomVerseGeneratorComponent implements OnInit {

  verse: Verse = new Verse();

  constructor(private randomVerseGeneratorService: RandomVerseGeneratorService) { }

  ngOnInit() {
    this.generateVerse();
  }

  generateVerse(): void {
    this.verse = new Verse();
    this.randomVerseGeneratorService.generateVerse().subscribe(verse => {
      this.verse = verse;
    })
  }
}
