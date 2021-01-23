import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Courses } from "src/app/Models/courses.model";

@Injectable({providedIn:'root'})
export class StudentCourseService{
    name:string;
    imgpath:string;
     description:string;
      dat:Date;
      cost:number;
      courseChanged = new Subject<Courses[]>();
     mycourse = [
        {
            name :'HTML',
            imgpath :'assets/img/html.jpg',
             description : 'This is html page',
             dat : new Date(),
             cost : 500
          }
     ]

     Mycourse(name:string, imgpath:string, description:string, dat:Date, cost:number){
        this.mycourse.push({name: name, imgpath: imgpath, description: description, dat: dat, cost:cost});
        this.courseChanged.next(this.mycourse.slice());
}
getmycourse(){
    return this.mycourse.slice();
}
setCourse(course: Courses[]){
    this.mycourse = course;
    this.courseChanged.next(this.mycourse.slice());
}

}