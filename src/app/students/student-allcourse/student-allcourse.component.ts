import { Component, OnInit } from '@angular/core';
import { Courses } from 'src/app/Models/courses.model';
import { TeacherCourseService } from 'src/app/teacher/TeacherServices/teacher.course.service';

@Component({
  selector: 'app-student-allcourse',
  templateUrl: './student-allcourse.component.html',
  styleUrls: ['./student-allcourse.component.css']
})
export class StudentAllcourseComponent implements OnInit {

  course : {name:string, imgpath:string, description:string, dat:Date}[] =[];
  constructor(private teachercourseService: TeacherCourseService) { 
  }
  scrolltop(){
    window.scroll(0,0);
  }
 ngOnInit() {
   this.course = this.teachercourseService.courses; 
   //It is called whenever there in any changes are made in the data  
   this.teachercourseService.courseChanged.subscribe((courses:Courses[])=>{
   this.course = courses;
});
}
}
