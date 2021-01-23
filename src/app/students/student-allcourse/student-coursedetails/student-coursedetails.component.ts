import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,  Params } from '@angular/router';
import { TeacherCourseService } from 'src/app/teacher/TeacherServices/teacher.course.service';
import { StudentCourseService } from '../../Services/student.couse.service';

@Component({
  selector: 'app-student-coursedetails',
  templateUrl: './student-coursedetails.component.html',
  styleUrls: ['./student-coursedetails.component.css']
})
export class StudentCoursedetailsComponent implements OnInit {

  name:string;
  imgpath:string;
   description:string;
    dat:Date;
    cost:number;
    enrolled=true;
 constructor(private teacherService: TeacherCourseService, 
   private route: ActivatedRoute, 
   private studentCourseService: StudentCourseService) {
   }
id:number;

 ngOnInit() {
   
   this.route.params.subscribe(
     (params: Params ) =>{
       //We get the Id of the route and assign the respective info to for the details. 
           this.id = +params['id'];
           this.name = this.teacherService.getName(this.id-1);
          this.imgpath = this.teacherService.getImg(this.id-1);
          this.description = this.teacherService.getDes(this.id-1);
          this.dat = this.teacherService.getDate(this.id-1);
            this.cost = this.teacherService.getCost(this.id-1); 
            this.enrolled=true; 
          
            //it compares where my courses are there in all course and if its there then return enroll false
            for(let j=0; j<this.studentCourseService.mycourse.length;j++){
                 
              if(this.teacherService.courses[this.id-1].name === this.studentCourseService.mycourse[j].name){
                this.enrolled = false;
                console.log(this.teacherService.courses[this.id-1].name);
                console.log(this.studentCourseService.mycourse[j].name);
                
              }
              
          
          }     
          
   }
   );

   
   

 }
 enroll(){
 
   const date = new Date(this.dat);
  //Convert the string date in date type and compare the date and pass the course info and push it in mycourse array in student service
   if(date>=new Date()){
      this.studentCourseService.Mycourse(this.name, this.imgpath, this.description, this.dat, this.cost);
       this.enrolled = false;
   }
   else{
    //  console.log(this.dat);
     alert("Deadline has already passed");
   }
 }

}
