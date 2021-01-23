import { Component,  OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators,  } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoggedin = true;
  isLoading = false;
  alertMessage = false;
  alertError = false;
  loginForm : FormGroup;
  signupForm : FormGroup;
  errorMessage:string;
 note = true;
 

constructor(private authService : AuthService, private router: Router
  ){}
ngOnInit(){
    this.loginForm = new FormGroup({
      'email' : new FormControl('sonam@admin.edu.bt', Validators.required),
      'password' : new FormControl('password@1234', Validators.required),
    
      
    })

    this.signupForm = new FormGroup({
      'email' : new FormControl('sonam@admin.edu.bt', Validators.required),
      'password' : new FormControl('password@1234', Validators.required),
     

    })
}
signup(){
  this.isLoggedin = !this.isLoggedin;
  this.alertError = false;
}
onloggedin(){
  if(this.signupForm.invalid){
console.log("invalid Form")
  }
  this.isLoading = true;
  if(this.isLoggedin){

    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;
  
    this.authService.Login(email, password).subscribe(resData=>{

      this.isLoading = false;
      this.alertError = false;
     
  if(this.loginForm.value.email.includes("@student.edu.bt")){
    this.router.navigate(['student/student-homepage']);
  }
     if(this.loginForm.value.email.includes("@teacher.edu.bt")) {
      this.router.navigate(['teacher/teacher-homepage']);
     }
     if(this.loginForm.value.email.includes("@admin.edu.bt")){
      this.router.navigate(['admin/admin-homepage']);
     }
    }, errorRes =>{
      this.alertError= true;
      
      this.isLoading = false;
      switch(errorRes.error.error.message){
        case 'INVALID_PASSWORD':
          this.errorMessage = 'Password is incorrect';break;
          case 'EMAIL_NOT_FOUND':
            this.errorMessage = 'Email is not found';break;
            case 'USER_DISABLED':
              this.errorMessage = 'User is disabled by Admin'; break;
              case 'default':
                this.errorMessage ='Network Error - Please connect to internet';
      }
      

    }
    );
  }
}
  onsignup(){
    if(this.signupForm.invalid){
      console.log("invalid Form")
        }
        this.isLoading = true;

        if(!this.isLoggedin){
          const email = this.signupForm.value.email;
          const password = this.signupForm.value.password;
    
          this.authService.Signup(email, password).subscribe(resData=>{
          
            this.isLoading = false;
            this.alertMessage=true;
            this.alertError = false;
            this.note=false;
                
          }, errorRes =>{
      
            this.errorMessage = 'Eror Signing up';
            switch(errorRes.error.error.message){
              case 'EMAIL_EXISTS':
                this.errorMessage = 'This email already exist';break;
                case 'default':
                  this.errorMessage = ' Error Signing up';
            }
            this.isLoading = false;
            this.alertError = true;
            this.alertMessage = false;
            this.note = false;
          }
          );
          this.signupForm.reset();
        }
  }
}

