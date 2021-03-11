
import { Component, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TeacherCourseService } from '../TeacherServices/teacher.course.service';

@Component({
  selector: 'app-teacher-addcourse',
  templateUrl: './teacher-addcourse.component.html',
  styleUrls: ['./teacher-addcourse.component.css'],
  
})
export class TeacherAddcourseComponent implements OnInit {
  
  name:string ;
  link:string;
  description:string;
  date:Date;
  cost:number;
   addcourseform : FormGroup;
  constructor(private teachercourseservice: TeacherCourseService,
     private router: Router,
     private route : ActivatedRoute) { }
  newcourseadded(){
this.name = this.addcourseform.value.name;
this.link = this.addcourseform.value.imgpath;
this.description = this.addcourseform.value.description;
this.date = this.addcourseform.value.date;
this.cost = this.addcourseform.value.coursecost;
    this.teachercourseservice.addCourse(this.name, this.link, this.description, this.date, this.cost);
    this.addcourseform.reset();
  }
  ngOnInit(){
    this.addcourseform = new FormGroup({
      
      'name' : new FormControl(null, Validators.required),
      'imgpath' : new FormControl(null, Validators.required),
      'description' : new FormControl(null, Validators.required) ,
      'date': new FormControl(null, Validators.required),
      'coursecost' : new FormControl(null, Validators.required),
     
    })
  }
  
  

}
