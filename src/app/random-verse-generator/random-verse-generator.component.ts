import { Component, OnInit } from '@angular/core';
import { RandomVerseGeneratorService } from '../random-verse-generator.service';
import { Verse } from '../verse';

@Component({
  selector: 'app-random-verse-generator',
  templateUrl: './random-verse-generator.component.html',
  styleUrls: ['./random-verse-generator.component.css']
})
export class RandomVerseGeneratorComponent implements OnInit {

  verse: Verse;

  constructor(private randomVerseGeneratorService: RandomVerseGeneratorService) { }

  ngOnInit() {
    this.generateVerse();
  }

  generateVerse(): void {
    this.verse = this.randomVerseGeneratorService.generateVerse();
  }
}
