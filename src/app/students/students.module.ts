import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ExtraDetailsDisplayComponent } from "./extradetails/extra-details-display/extra-details-display.component";
import { ExtraDetailsComponent } from "./extradetails/extra-details/extra-details.component";
import { StudentAllcourseComponent } from "./student-allcourse/student-allcourse.component";
import { StudentCoursedetailsComponent } from "./student-allcourse/student-coursedetails/student-coursedetails.component";
import { StudentHeaderComponent } from "./student-header/student-header.component";
import { StudentHomepageComponent } from "./student-homepage/student-homepage.component";
import { StudentMycourseComponent } from "./student-mycourse/student-mycourse.component";
import { StudentsComponent } from "./students.component";
import { studentRoutingmodule } from "./students.routing.module";

@NgModule({
  declarations:[
    StudentsComponent,
    StudentMycourseComponent,
    StudentHeaderComponent,
    StudentAllcourseComponent,
    StudentHomepageComponent,
    StudentCoursedetailsComponent,
    ExtraDetailsComponent,
    ExtraDetailsDisplayComponent,
  
  ],
  imports:[
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    studentRoutingmodule,
    RouterModule
  ],
  exports:[
   
  ]
})
export class StudentModule{

}