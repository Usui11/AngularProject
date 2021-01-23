import { HttpClient } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";

import { exhaustMap, take } from "rxjs/operators";
import { AuthService } from "../Login/auth.service";
import { Courses } from "../Models/courses.model";
import { StudentCourseService } from "../students/Services/student.couse.service";
import { TeacherCourseService } from "../teacher/TeacherServices/teacher.course.service";

@Injectable({providedIn:'root'})
export class CourseStorageService implements OnInit{
    constructor(private http: HttpClient, 
        private teachercourseService: TeacherCourseService,
        private authService : AuthService,
        private studentCourseService: StudentCourseService
        ){}


storeCourse(){
     return this.authService.user.pipe(take(1),
       exhaustMap(user=>{
        const course = this.teachercourseService.getCourse();
       return  this.http.put('https://e-learning-app-bec94-default-rtdb.firebaseio.com/course.json?auth='+user.token, course )
       })
     )
}
fetchCourse(){  
 return this.authService.user.pipe(take(1),
  exhaustMap(user=>{
    return this.http.get<Courses[]>('https://e-learning-app-bec94-default-rtdb.firebaseio.com/course.json?auth='+user.token)
}));
   
}

//Mycourse are saved in database with its userId name
MycourseSave(){
  const userData:{
    email:string;
    id: string;
    _token:string;
    _tokenexpdate:Date;

} = JSON.parse(localStorage.getItem('userdata'));
const Link= 'https://e-learning-app-bec94-default-rtdb.firebaseio.com/';
const name = userData.id+'.json?';
const auth = 'auth=';
  const URL = Link+name+auth;
  return this.authService.user.pipe(take(1),
    exhaustMap(user=>{
     const course = this.studentCourseService.getmycourse();
    return  this.http.put(URL+user.token, course )
    })
  )
}
MycourseFetch(){
  const userData:{
    email:string;
    id: string;
    _token:string;
    _tokenexpdate:Date;

} = JSON.parse(localStorage.getItem('userdata'));
const Link= 'https://e-learning-app-bec94-default-rtdb.firebaseio.com/';
const name = userData.id+'.json?';
const auth = 'auth=';
  const URL = Link+name+auth;
  return this.authService.user.pipe(take(1),
    exhaustMap(user=>{
     const course = this.studentCourseService.getmycourse();
    return  this.http.get<Courses[]>(URL+user.token )
    })
  )
}


 ngOnInit(){

 }
}