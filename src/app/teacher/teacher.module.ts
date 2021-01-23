import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { TeacherAddcourseComponent } from "./teacher-addcourse/teacher-addcourse.component";
import { TeacherHeaderComponent } from "./teacher-header/teacher-header.component";
import { TeacherHomepageComponent } from "./teacher-homepage/teacher-homepage.component";
import { TeacherCoursedetailsComponent } from "./teacher-totalcourse/teacher-coursedetails/teacher-coursedetails.component";
import { TeacherTotalcourseComponent } from "./teacher-totalcourse/teacher-totalcourse.component";
import { TeacherComponent } from "./teacher.component";
import { TeacherRoutingModule } from "./Teacher.routing.module";

@NgModule({
   declarations:[
    TeacherComponent,
    TeacherAddcourseComponent,
    TeacherCoursedetailsComponent,
    TeacherTotalcourseComponent,
    TeacherHomepageComponent,
    TeacherHeaderComponent
   ], 
   imports:[
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TeacherRoutingModule,
    RouterModule
   ],
   exports:[
   ]
})
export class TeacherModule{

}