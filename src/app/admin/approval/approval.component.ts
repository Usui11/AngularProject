import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Login/auth.service';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-approval',
  templateUrl: './approval.component.html',
  styleUrls: ['./approval.component.css']
})
export class ApprovalComponent implements OnInit {
    email:string;
    password:string;
    
  constructor(private adminService: AdminService, private authService: AuthService) { }
  info:{email: string, idToken: string}[] = [];
  ngOnInit() {
    this.email = this.adminService.email;
    this.info = this.adminService.info;
  }
  approve(){
  alert("This email is approved");
  }
  decline(i:number){
    
    this.adminService.Decline(i);
    alert('this email is declined');
  }

}
