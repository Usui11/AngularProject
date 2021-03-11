import { Time } from "@angular/common";

export class ExtraInfo{
    public courseName: string;
 public duration: string;
 public price: number;
 public freeTrial: boolean;
 public creator: string;
 public cityName: string;
 public country: string;
 public teacherId: number;
 public recurring: boolean;
 public noOfLesson:number;
 public startTime: number;
 public startDate: Date;
 public days: string[];
constructor(courseName: string,
    duration: string,
    price: number,
    freeTrial: boolean,
    creator: string,
    cityName: string,
    country: string,
   teacherId: number,
   recurring: boolean,
  //  noOfLesson: number,
  //  startTime: number,
  //  startDate: Date,
  //  days: string[]
   ){
    
    this.courseName = courseName;
    this.duration = duration;
    this.price = price;
    this.freeTrial = freeTrial;
    this.creator = creator;
    this.cityName = cityName;
    this.country = country;
   this.teacherId = teacherId;
   this.recurring = recurring;
//    this.noOfLesson = noOfLesson;
//    this.startDate = startDate;
//    this.startTime = startTime;
//  this.days = days;
   }
}