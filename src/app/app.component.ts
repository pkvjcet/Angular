import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name="Prince";
  course="Fullstack development";
  buttonactive=false;
  constructor(){
    setTimeout(() => {
      this.buttonactive=true;
    }, 10000);
  }
  changeCourse(){
    this.course="MEAN Stack Development";
  }

}
