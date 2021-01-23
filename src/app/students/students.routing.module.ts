import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { StudentAllcourseComponent } from "./student-allcourse/student-allcourse.component";
import { StudentHomepageComponent } from "./student-homepage/student-homepage.component";
import { StudentMycourseComponent } from "./student-mycourse/student-mycourse.component";
import { StudentsComponent } from "./students.component";
import { StudentCoursedetailsComponent } from './student-allcourse/student-coursedetails/student-coursedetails.component';
import { AuthGuard } from "../Login/auth.guard.service";


const studentRoute: Routes = [
    {path: '', component: StudentsComponent,canActivate:[AuthGuard], children:[
        { path :'student-all-course', component : StudentAllcourseComponent, children:[
            {path: ':id', component: StudentCoursedetailsComponent},
        ]},
        { path :'student-my-course', component : StudentMycourseComponent},
        { path :'student-homepage', component : StudentHomepageComponent },
        
    
]}
]
@NgModule({
    imports: [RouterModule.forChild(studentRoute)],
    exports: [RouterModule]
    
})
export class studentRoutingmodule{

}