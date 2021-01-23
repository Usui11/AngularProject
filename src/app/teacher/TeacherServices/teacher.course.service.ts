import { Injectable, Input } from "@angular/core";
import { Subject } from "rxjs";
import { Courses } from "src/app/Models/courses.model";

@Injectable({providedIn:'root'})
export class TeacherCourseService{
   name:string;
    imgpath:string;
     description:string;
      dat:Date;
      cost:number;
      courseChanged = new Subject<Courses[]>();
   // courses:Courses[]=[];
  public courses = [
       {
     name :'HTML',
     imgpath :'assets/img/html.jpg',
      description :'This is HTML page',
      dat : new Date(),
      cost : 500
   },
   

];
getName(id: number){
return this.courses[id].name;
}
getImg(id: number){
   return this.courses[id].imgpath;
   }
   getDes(id: number){
      return this.courses[id].description;
      }
      getDate(id: number){
         return this.courses[id].dat;
         }
         getCost(id:number){
            return this.courses[id].cost;
         }

addCourse(name:string, imgpath:string, description:string, dat:Date, cost:number){
    this.courses.push({name: name, imgpath: imgpath, description: description, dat: dat, cost:cost});
  this.courseChanged.next(this.courses.slice());
}
updateCourse(i:number, name:string, img:string, des:string, date:Date, cost:number ){
         this.courses[i].name = name;
         this.courses[i].imgpath = img;
         this.courses[i].description = des;
         this.courses[i].dat = date;
         this.courses[i].cost = cost;
         this.courseChanged.next(this.courses.slice());
}
getCourse(){
   return this.courses.slice();
}
setCourse(course: Courses[]){
    this.courses = course;
    this.courseChanged.next(this.courses.slice());
    console.log(this.courses);
}
}