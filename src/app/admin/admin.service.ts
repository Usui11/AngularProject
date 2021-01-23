import { HttpClient } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { Courses } from "../Models/courses.model";
import { TeacherCourseService } from "../teacher/TeacherServices/teacher.course.service";

@Injectable({providedIn:'root'})

export class AdminService implements OnInit{

    email: string;
    idToken:string;
    course:Courses[];
    constructor(private http: HttpClient, private teachercourseService:TeacherCourseService){

    }
    info=[
        {
          email: 'sonam@admin.edu.bt',
          idToken: 'k22socuT8ceTNsPUpAc0CjCCSSI3'
        }
    ]
ngOnInit(){

}
//We get the info from auth service and push it in info array
approval(email:string, idToken:string){
    this.email = email;
    this.idToken = idToken;
    this.info.push({email:email, idToken:idToken});
}

//Get the index of account to be decline
  Decline(i:number){
    this.http.post<string>('https://identitytoolkit.googleapis.com/v1/accounts:delete?key=AIzaSyCWg5DiC5azVfTsj8feC4CaT7oebicf84s',
        {
            idToken:this.info[i].idToken,
     }
    ).subscribe(id=>{

    });
  }
 
}