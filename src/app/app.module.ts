import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AdminModule } from "./admin/admin.module";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app.routing.module";
import { DropdowndirDirective } from "./Directives/dropdowndir.directive";
import { LoadingSpinnerComponent } from "./Loading-spinner/loading-spinner.component";
import { LoginComponent } from "./Login/login.component";
import { StudentModule } from "./students/students.module";
import { TeacherModule } from "./teacher/teacher.module";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DropdowndirDirective,
    LoadingSpinnerComponent,
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    TeacherModule,
    StudentModule,
    AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
