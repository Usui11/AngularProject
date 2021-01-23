import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Courses } from 'src/app/Models/courses.model';
import { TeacherCourseService } from '../../TeacherServices/teacher.course.service';

@Component({
  selector: 'app-teacher-coursedetails',
  templateUrl: './teacher-coursedetails.component.html',
  styleUrls: ['./teacher-coursedetails.component.css']
})
export class TeacherCoursedetailsComponent implements OnInit {

  name:string;
   imgpath:string;
    description:string;
     dat:Date;
     cost:number;
     course:Courses;
  constructor(private teacherService: TeacherCourseService, 
    private route: ActivatedRoute, 
    private router: Router) {
    }
id:number;

edit:boolean = false;
editCourse:FormGroup;
  ngOnInit() {
    
    this.route.params.subscribe(
      (params: Params ) =>{
        
            this.id = +params['id'];
            this.name = this.teacherService.getName(this.id-1);
           this.imgpath = this.teacherService.getImg(this.id-1);
           this.description = this.teacherService.getDes(this.id-1);
           this.dat = this.teacherService.getDate(this.id-1);
             this.cost = this.teacherService.getCost(this.id-1); 
             this.initform(); 
             
    }
    );
  }
onedit(){
  
  window.scroll(0,0);
  this.edit = !this.edit; 
}
save(){
  
  window.scroll(0,0);
  this.edit = !this.edit;
  //pass the data to teacher services where we update the course data.
  this.teacherService.updateCourse(this.id-1, 
    this.editCourse.value.name,
    this.editCourse.value.imgpath,
    this.editCourse.value.description,
    this.editCourse.value.date,
    this.editCourse.value.coursecost);
    this.editCourse.reset();
     this.router.navigate(['../'], {relativeTo: this.route});
}
abort(){
  window.scroll(0,0);
  this.edit = !this.edit;
   this.router.navigate(['./'], {relativeTo: this.route});
}
//initialize the form with the existing data
private initform(){
  this.editCourse= new FormGroup({
    'name' : new FormControl(this.name),
    'imgpath' : new FormControl(this.imgpath),
    'description' : new FormControl(this.description) ,
    'date': new FormControl(this.dat),
    'coursecost' : new FormControl(this.cost)
  })
}

}
