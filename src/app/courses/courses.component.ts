import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  dateMessage : string;
  
  constructor() {
    setInterval(()=>{
      let date=new Date();
      this.dateMessage=date.toDateString()+" "+date.toTimeString();
    },1000);
   }
    
  ngOnInit() {
  }

}
