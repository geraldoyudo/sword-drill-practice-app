import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

let modules = [MatButtonModule, MatSidenavModule, MatCardModule, MatToolbarModule,
MatListModule, MatProgressSpinnerModule];

@NgModule({
  declarations: [],
  imports: modules,
  exports: modules,
})
export class MaterialComponentsModule { }
