import { Component, NgModule, OnInit } from '@angular/core';
import { Courses } from 'src/app/Models/courses.model';
import { CourseStorageService } from 'src/app/Shared/course.storage.service';
import { StudentCourseService } from '../Services/student.couse.service';

@Component({
  selector: 'app-student-mycourse',
  templateUrl: './student-mycourse.component.html',
  styleUrls: ['./student-mycourse.component.css']
})

export class StudentMycourseComponent implements OnInit {

  course : Courses[] = [];
  
  constructor(private studentCourseService: StudentCourseService,
    private courseStorageSerice : CourseStorageService) { }

  ngOnInit() {
    //assign mycourse to local course array
    this.course = this.studentCourseService.mycourse;
 this.studentCourseService.courseChanged.subscribe(course=>{
   this.course = course;
   
 })

  }
fetch(){
  this.courseStorageSerice.MycourseFetch().subscribe(course=>{
    this.studentCourseService.setCourse(course);
  })
}
}
