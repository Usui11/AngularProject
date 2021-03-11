import { HttpClient } from "@angular/common/http";
import { Injectable, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { ExtraInfo } from "../models/extrainfo.model";
import { ExtraInfoStateService } from "./extrainfo.state.service";

@Injectable({providedIn: 'root'})
export class ExtraInfoApiService implements OnDestroy{
   extraInformatons: ExtraInfo[];
   storeSub : Subscription;
    constructor(private http: HttpClient, private extraInfoStateService: ExtraInfoStateService){}
    saveExtraInfo(){
         return this.storeSub = this.extraInfoStateService.stateChanged.subscribe(data=>{
         return this.http.put('https://e-learning-app-bec94-default-rtdb.firebaseio.com/extrainformation.json', data ).subscribe();
         })
        }
    ngOnDestroy(){
        if(this.storeSub){
            this.storeSub.unsubscribe();
        }
    }
    fetchExtraInfo(){
         return this.http.get<ExtraInfo[]>('https://e-learning-app-bec94-default-rtdb.firebaseio.com/extrainformation.json');   
    }
}