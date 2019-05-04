import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';

let modules = [MatButtonModule, MatSidenavModule, MatCardModule];

@NgModule({
  declarations: [],
  imports: modules,
  exports: modules,
})
export class MaterialComponentsModule { }
