import { Injectable } from "@angular/core";
import { ObservableStore } from "@codewithdan/observable-store";
import { of } from "rxjs";
import { ExtraInfo } from "../models/extrainfo.model";
import { ExtraInfoApiService } from "./extrainfo.API.service";
import { ExInformationStore } from "./extrainfo.store";

@Injectable({providedIn: 'root'})
export class ExtraInfoStateService extends ObservableStore<ExInformationStore>{
    
    extraInformation: ExtraInfo[];
   constructor(){
       const initialState={
            extraInformations:[{
                cityName: "Ludhiana",
country: "Bhutan",
courseName: "HTML",
creator: "Tshering wangmo",
days: ["monday", "tuesday"],
duration: "30 minutes",
freeTrial: true,
noOfLesson: 3,
price: 900,
recurring: true,
startDate: new Date(),
startTime: 10,
teacherId: 12345,


            }],
            extraInformation : null
       }
       super({trackStateHistory: true});
       this.setState(initialState, 'INIT_STATE');
       
   }
   
    ngOnInIt(){

    }
    getExtraInformation(){
        const{ extraInformations } = this.getState();
        if( extraInformations ){
            return of(extraInformations);
        }
    }
    addExtraInformation(extraInformation: ExtraInfo){
        let state = this.getState();
        state.extraInformations.push(extraInformation);
        this.setState({extraInformations: state.extraInformations}, 'ADD_EXTRAINFORMATION');
        
    }
}