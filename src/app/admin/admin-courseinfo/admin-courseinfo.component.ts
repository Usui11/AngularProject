import { Component, OnInit } from '@angular/core';
import { Courses } from 'src/app/Models/courses.model';
import { CourseStorageService } from 'src/app/Shared/course.storage.service';
import { TeacherCourseService } from 'src/app/teacher/TeacherServices/teacher.course.service';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-courseinfo',
  templateUrl: './admin-courseinfo.component.html',
  styleUrls: ['./admin-courseinfo.component.css']
})
export class AdminCourseinfoComponent implements OnInit {
course:Courses[];
  constructor(private courseStorageSerive: CourseStorageService) { }

  ngOnInit() {
  // Fetching list of courses from database
  this.courseStorageSerive.fetchCourse().subscribe(course =>{
    this.course = course;
});
}
}