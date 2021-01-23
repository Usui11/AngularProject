import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Courses } from 'src/app/Models/courses.model';
import { CourseStorageService } from 'src/app/Shared/course.storage.service';
import { TeacherCourseService } from '../TeacherServices/teacher.course.service';

@Component({
  selector: 'app-teacher-totalcourse',
  templateUrl: './teacher-totalcourse.component.html',
  styleUrls: ['./teacher-totalcourse.component.css'],
  
})
export class TeacherTotalcourseComponent implements OnInit {

   course : {name:string, imgpath:string, description:string, dat:Date}[] =[];
  constructor(private teachercourseService: TeacherCourseService) {
    
   }
   scrolltop(){
    window.scroll(0,0);
   }
  ngOnInit() {
    //Assign a course from course in teacher service and update to changes.
    this.course = this.teachercourseService.courses;
this.teachercourseService.courseChanged.subscribe((courses:Courses[])=>{
   this.course = courses;
} )
    
}

}