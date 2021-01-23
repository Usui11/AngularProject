import {Component, OnInit} from '@angular/core'
import { AuthService } from 'src/app/Login/auth.service';

@Component({
    selector: 'app-admin-header',
    templateUrl: './admin-header.component.html',
    styleUrls: ['./admin-header.component.css']
  })

  export class AdminHeader implements OnInit{
      constructor(private authService: AuthService){}
 ngOnInit(){

 }
    logout(){
        this.authService.Logout();
       }
 
  }