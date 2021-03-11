import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FacadeService } from '../../facade service/facade.service';
import { ExtraInfo } from '../../models/extrainfo.model';
import { ExtraInfoBlService } from '../../services/extrainfo.BL.service';


@Component({
  selector: 'app-extra-info',
  templateUrl: './extra-info.component.html',
  styleUrls: ['./extra-info.component.css']
})
export class ExtraInfoComponent implements OnInit {
 viewDetails : boolean = false;
  constructor(private facadeService : FacadeService,
     private extraInfoBlService: ExtraInfoBlService,
     private route: Router,
     private router: ActivatedRoute) { }
     extraInfoForm: FormGroup;
  extraData: ExtraInfo;
  ngOnInit(): void {
    
    this.extraInfoForm = new FormGroup({
      
      'duration' : new FormControl(null, Validators.required),
      'price' : new FormControl(null, Validators.required),
      'freeTrial' : new FormControl(false, Validators.required) ,
      'creator': new FormControl(null, Validators.required),
      'cityName' : new FormControl(null, Validators.required),
      'country' : new FormControl(null, Validators.required),
      'teacherId' : new FormControl(null, Validators.required),
      'courseName' : new FormControl(null, Validators.required),
      'recurring': new FormControl(false, Validators.required ),
      // 'noOfLesson': new FormControl(null, Validators.required),
      // 'startTime': new FormControl(null, Validators.required),
      // 'startDate': new FormControl(null, Validators.required),
      // 'days': new FormArray([]),
    })
    
  }
     addExtraInfo(){
            this.extraData = new ExtraInfo(
          this.extraInfoForm.value.courseName,
          this.extraInfoForm.value.duration,
          this.extraInfoForm.value.price,
          this.extraInfoForm.value.freeTrial,
          this.extraInfoForm.value.creator,
          this.extraInfoForm.value.cityName,
          this.extraInfoForm.value.country,
          this.extraInfoForm.value.teacherId,
          this.extraInfoForm.value.recurring,
          // this.extraInfoForm.value.noOfLesson,
          // this.extraInfoForm.value.startTime,
          // this.extraInfoForm.value.startDate,
          // this.extraInfoForm.value.days
            );

            
      this.viewDetails = true;
       this.facadeService.addExtraInformationFacade(this.extraData);
      //  data = this.facadeService.getExtraInformationFacade();
      //  data.subscribe(dat=>console.log(dat));
      // this.route.navigate(['extra-info-view'],{relativeTo: this.router });
     
      
     }

}
