import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Login/auth.service';
import { CourseStorageService } from 'src/app/Shared/course.storage.service';
import { TeacherCourseService } from 'src/app/teacher/TeacherServices/teacher.course.service';
import { StudentCourseService } from '../Services/student.couse.service';

@Component({
  selector: 'app-student-header',
  templateUrl: './student-header.component.html',
  styleUrls: ['./student-header.component.css']
})
export class StudentHeaderComponent implements OnInit {

  constructor(private courseStorageSerice: CourseStorageService,
    private studentCourseService: StudentCourseService,
    private teachercourseService: TeacherCourseService,
    private authService: AuthService) { }

  ngOnInit() {
    
    //It fetch all courses data from the database as soon as the user in logged in as student.
    this.courseStorageSerice.fetchCourse().subscribe(course=>{
      this.teachercourseService.setCourse(course);
    })
    
    
  }
savemycourse(){
   this.courseStorageSerice.MycourseSave().subscribe(Response=>{

   })
}
logout(){
    this.authService.Logout();
   
}

}
