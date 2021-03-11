import { Injectable } from "@angular/core";
import { ExtraInfo } from "../models/extrainfo.model";
import { ExtraInfoApiService } from "../services/extrainfo.API.service";
import { ExtraInfoBlService } from "../services/extrainfo.BL.service";
import { ExtraInfoStateService } from "../services/extrainfo.state.service";

@Injectable({providedIn: 'root'})
export class FacadeService{
 constructor(private extraInfoStateService: ExtraInfoStateService,
  private extraInfoApiService: ExtraInfoApiService,
  private extraInfoBlService: ExtraInfoBlService){
   
 }
 displayDetails = false;
   getExtraInformationFacade(){
       return this.extraInfoStateService.getExtraInformation();
   }
   addExtraInformationFacade(extraInfo: ExtraInfo){
     
     this.extraInfoStateService.addExtraInformation(extraInfo);
     this.extraInfoApiService.saveExtraInfo();
   }
   fetchExtraInfoFacade(){
     return this.extraInfoApiService.fetchExtraInfo();
   }
   eachInformationFacade(id: number){
     this.extraInfoBlService.eachInformation(id);
   }
   getEachValueFacade(){
     return this.extraInfoBlService.getEachValue();
   }
   
}