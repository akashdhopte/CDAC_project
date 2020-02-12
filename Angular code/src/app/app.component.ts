import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';
  url:any = null;
  constructor(){
    this.url ="http://localhost:4200/";
  }
}
