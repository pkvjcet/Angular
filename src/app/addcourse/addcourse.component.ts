import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css']
})
export class AddcourseComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
  }

  readValues(data:NgForm){
    console.log(data.value.courseDate);
  }


}
