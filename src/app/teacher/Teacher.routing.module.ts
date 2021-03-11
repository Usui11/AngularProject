import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TeacherAddcourseComponent } from "./teacher-addcourse/teacher-addcourse.component";
import { TeacherHomepageComponent } from "./teacher-homepage/teacher-homepage.component";
import { TeacherTotalcourseComponent } from "./teacher-totalcourse/teacher-totalcourse.component";
import { TeacherComponent } from "./teacher.component";
import { TeacherCoursedetailsComponent } from './teacher-totalcourse/teacher-coursedetails/teacher-coursedetails.component';
import { AuthGuard } from "../Login/auth.guard.service";
import { ExtraInfoComponent } from "./extrainfo/Components/extra-info/extra-info.component";



const teacherRoute : Routes = [
    
    {path: '', component: TeacherComponent, children:[
            { path :'teacher-all-course', component : TeacherTotalcourseComponent, children: [
                {path: ':id', component: TeacherCoursedetailsComponent, children: [
                    {path: 'edit', component: TeacherCoursedetailsComponent}
                ]},
            ]},
            { path :'teacher-add-course', component : TeacherAddcourseComponent, children:[
                {path : 'extra-information', component: ExtraInfoComponent, children:[
                   
                ]}
            ]},
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