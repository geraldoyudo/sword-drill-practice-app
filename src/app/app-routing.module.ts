import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RandomVerseGeneratorComponent } from './random-verse-generator/random-verse-generator.component';

const routes: Routes = [
  { path: 'randomVerse', component: RandomVerseGeneratorComponent },
  { path: '', redirectTo: '/randomVerse', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
