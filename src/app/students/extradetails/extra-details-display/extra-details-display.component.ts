import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FacadeService } from 'src/app/teacher/extrainfo/facade service/facade.service';
import { ExtraInfo } from 'src/app/teacher/extrainfo/models/extrainfo.model';

@Component({
  selector: 'app-extra-details-display',
  templateUrl: './extra-details-display.component.html',
  styleUrls: ['./extra-details-display.component.css']
})
export class ExtraDetailsDisplayComponent implements OnInit {

  InfoForm: FormGroup;
  viewDetails:boolean = false;
  constructor(private router: Router,
     private route: ActivatedRoute,
     private facadeService: FacadeService) { }
     displayArray: ExtraInfo;
     hideDetails: boolean = false;
  ngOnInit(){
      this.InfoForm = new FormGroup({
        'recurring': new FormControl(false, Validators.required),
        'noOfLesson': new FormControl(null, Validators.required),
      'startTime': new FormControl(null, Validators.required),
      'startDate': new FormControl(null, Validators.required),
      'freeTrial': new FormControl(null, Validators.required),
      'duration': new FormControl(null, Validators.required),
      'days': new FormArray([]),
      
      })
  }
goBack(){
  this.router.navigate(['../'], {relativeTo: this.route});
  this.facadeService.displayDetails = false;
}
getEachValue(){
  this.displayArray = this.facadeService.getEachValueFacade();
  this.hideDetails = true;
  console.log(this.displayArray.days);

}
  addDays(value: string, id: string){
    if(document.getElementById(id).style.backgroundColor != "green"){
    const control = new FormControl(value, Validators.required);
(<FormArray>this.InfoForm.get('days')).push(control);
document.getElementById(id).style.background = "green";
    }
  }
addInfo(){
  console.log(this.InfoForm.value);
  this.viewDetails = true;
}

}
