import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AdminCourseinfoComponent } from "./admin-courseinfo/admin-courseinfo.component";
import { AdminHeader } from "./admin-header/admin-header.component";
import { AdminHomepageComponent } from "./admin-homepage/admin-homepage.component";
import { AdminComponent } from "./admin.component";
import { AdminRoutingModule } from "./admin.router.module";
import { ApprovalComponent } from "./approval/approval.component";

@NgModule({
    declarations:[
        AdminComponent,
        ApprovalComponent,
        AdminHeader,
    AdminHomepageComponent,
    AdminCourseinfoComponent
    ],
    imports:[
        CommonModule,
        RouterModule,
        AdminRoutingModule
    ],
    exports:[
    ],
})
export class AdminModule{

}