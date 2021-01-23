import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TeacherAddcourseComponent } from "./teacher-addcourse/teacher-addcourse.component";
import { TeacherHomepageComponent } from "./teacher-homepage/teacher-homepage.component";
import { TeacherTotalcourseComponent } from "./teacher-totalcourse/teacher-totalcourse.component";
import { TeacherComponent } from "./teacher.component";
import { TeacherCoursedetailsComponent } from './teacher-totalcourse/teacher-coursedetails/teacher-coursedetails.component';
import { AuthGuard } from "../Login/auth.guard.service";



const teacherRoute : Routes = [
    
    {path: '', component: TeacherComponent,canActivate:[AuthGuard], children:[
            { path :'teacher-all-course', component : TeacherTotalcourseComponent, children: [
                {path: ':id', component: TeacherCoursedetailsComponent, children: [
                    {path: 'edit', component: TeacherCoursedetailsComponent}
                ]},
            ]},
            { path :'teacher-add-course', component : TeacherAddcourseComponent},
            { path :'teacher-homepage', component : TeacherHomepageComponent },
            
           
    ]}
];
@NgModule({
    imports: [RouterModule.forChild(teacherRoute)],
    exports:[RouterModule],
    declarations: [],
   
})
export class TeacherRoutingModule{

}