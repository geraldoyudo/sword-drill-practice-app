import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sword Drill Practice App';
  opened = true;

  toggleSideNav():void{
    this.opened = !this.opened;
  }
}
