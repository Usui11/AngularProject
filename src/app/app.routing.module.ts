import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./Login/login.component";




const appRoutes : Routes = [

    { path: '', component: LoginComponent, children:[
        {path: 'signup', component : LoginComponent},
        { path: 'login', component: LoginComponent}
    ]
    },
    {path: 'admin', loadChildren:'./admin/admin.module#AdminModule'},
    {path: 'teacher', loadChildren:'./teacher/teacher.module#TeacherModule'},
    {path: 'student', loadChildren:'./students/students.module#StudentModule'},
  {path:'**', redirectTo:'/login'}
  ];
@NgModule({
    imports:[
        RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
    ],
    exports:[RouterModule]

})
export class AppRoutingModule{

}