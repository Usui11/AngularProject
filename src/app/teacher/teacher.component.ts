import { Component, OnInit } from '@angular/core';
import { CourseStorageService } from '../Shared/course.storage.service';
import { FacadeService } from './extrainfo/facade service/facade.service';

import { TeacherCourseService } from './TeacherServices/teacher.course.service';



@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css'],
  providers: [ CourseStorageService]
})
export class TeacherComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
