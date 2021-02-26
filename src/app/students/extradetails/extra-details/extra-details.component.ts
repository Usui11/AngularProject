import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

import { FacadeService } from 'src/app/teacher/extrainfo/facade service/facade.service';
import { ExtraInfo } from 'src/app/teacher/extrainfo/models/extrainfo.model';

@Component({
  selector: 'app-extra-details',
  templateUrl: './extra-details.component.html',
  styleUrls: ['./extra-details.component.css']
})
export class ExtraDetailsComponent implements OnInit{

  constructor(private facadeService: FacadeService) { }
  extraDetails$ :  Observable<any>;
  displayDetails = this.facadeService.displayDetails;
    ngOnInit(){
      this.extraDetails$ = this.facadeService.fetchExtraInfoFacade();
      this.display();
    }
    display(){
      this.extraDetails$.subscribe(data=>{
         console.log(data);
      })
    }
    viewDetails(id: number){
      this.facadeService.displayDetails= this.displayDetails = true; 
      this.facadeService.eachInformationFacade(id);
    }
}
