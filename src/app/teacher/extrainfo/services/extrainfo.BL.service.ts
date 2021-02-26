import { Injectable } from "@angular/core";
import { ObservableStore } from "@codewithdan/observable-store";
import { Observable, of } from "rxjs";
import { filter } from "rxjs/operators";
import { ExtraInfo } from "../models/extrainfo.model";
import { ExtraInfoApiService } from "./extrainfo.API.service";
import { ExInformationStore } from "./extrainfo.store";

@Injectable({providedIn: 'root'})
export class ExtraInfoBlService{
    constructor(private extraInfoApiService: ExtraInfoApiService){}
    extraDetails$ :  Observable<any>;
    eachValue : ExtraInfo;
     eachInformation(id:number){
            this.extraDetails$ = this.extraInfoApiService.fetchExtraInfo();
   this.extraDetails$.subscribe(data=>{
       this.eachValue = data.extraInformations[id];
       console.log(this.eachValue);
   });
     }
     getEachValue(){
         return this.eachValue;
     }   
}