import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminComponent } from "./admin.component";
import { AdminHomepageComponent } from './admin-homepage/admin-homepage.component';
import { ApprovalComponent } from "./approval/approval.component";
import { AdminCourseinfoComponent } from './admin-courseinfo/admin-courseinfo.component';
import { AuthGuard } from "../Login/auth.guard.service";



const adminRoute : Routes = [
    
    {path: '', component: AdminComponent,canActivate:[AuthGuard], children:[
              {path: 'admin-homepage', component: AdminHomepageComponent},
              {path: 'admin-approval', component: ApprovalComponent},
              {path: 'admin-courseinfo', component: AdminCourseinfoComponent}
    ]}
];

@NgModule({
    imports: [RouterModule.forChild(adminRoute)],
    exports:[RouterModule],
    declarations: [],
   
})
export class AdminRoutingModule{

}