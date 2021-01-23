import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Login/auth.service';
import { CourseStorageService } from 'src/app/Shared/course.storage.service';
import { TeacherCourseService } from '../TeacherServices/teacher.course.service';

@Component({
  selector: 'app-teacher-header',
  templateUrl: './teacher-header.component.html',
  styleUrls: ['./teacher-header.component.css']
})
export class TeacherHeaderComponent implements OnInit {
 
  @Output() navigation = new EventEmitter<string>();
       onclicked(navigation:string){
         this.navigation.emit(navigation);
       }
       
  constructor(private courseStorageSerive: CourseStorageService,
     private teachercourseService: TeacherCourseService,
     private authService: AuthService) { }

  ngOnInit() {
    //We fetch data from database and update the courses.
    this.courseStorageSerive.fetchCourse().subscribe(course =>{
      this.teachercourseService.setCourse(course);
  });
  }
save(){
  this.courseStorageSerive.storeCourse().subscribe(response =>{
            
  }); 
}
logout(){
 this.authService.Logout();
}

}
