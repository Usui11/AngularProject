import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { User } from "../Models/user.model";
import { tap } from "rxjs/operators"
import { Router } from "@angular/router";
import { AdminService } from "../admin/admin.service";

export interface AuthResponseData{
    idToken: string;
    email : string;
    refreshToken : string;
    expiresIn:string;
    localId: string;
    resgistered?: string;
}

@Injectable({providedIn: 'root'})
export class AuthService{
    //BehaviourSubject id used for state management
    user = new BehaviorSubject<User>(null);
private tokenexpirationtimer : any;

    constructor(private http: HttpClient, private router: Router,
         private adminService: AdminService){

    }
   Signup(email:string, password:string){
       return this.http.post<AuthResponseData>(
           'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCWg5DiC5azVfTsj8feC4CaT7oebicf84s',
           {
               email:email,
           password:password,
           returnSecureToken:true
        }
        ).pipe(tap(resData=>{
            const expirationDate = new Date(new Date().getTime()+ +resData.expiresIn * 1000);
            const user = new User(resData.email, resData.localId, resData.idToken, expirationDate );
            this.user.next(user);

            //Send a info and push it in courseInfo in Admin section
            this.adminService.approval(resData.email, resData.idToken);
        
        }))
   }
   Login(email:string , password :string){
       return this.http.post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCWg5DiC5azVfTsj8feC4CaT7oebicf84s',{
            email:email,
            password:password,
            returnSecureToken:true
        }).pipe(tap(resData=>{
            //ExpiresIn is in string so we converted into data type
            const expirationDate = new Date(new Date().getTime()+ +resData.expiresIn * 1000);
            const user = new User(resData.email, resData.localId, resData.idToken, expirationDate );
            this.user.next(user);
            //We can a function of autoLogged out converting it to number.
            this.autoLoggedout(+resData.expiresIn*1000);
            localStorage.setItem('userdata', JSON.stringify(user));
        }))
   }

   autoLoggedin(){
       const userData:{
           email:string;
           id: string;
           _token:string;
           _tokenexpdate:Date;

       } = JSON.parse(localStorage.getItem('userdata'));
       if(!userData){
             return;
       }
       const loadeduser = new User(userData.email, userData.id, userData._token, new Date(userData._tokenexpdate));
       if(loadeduser.token){
           this.user.next(loadeduser);
           const ex = new Date(userData._tokenexpdate).getTime() - new Date().getTime();
           this.autoLoggedout(ex);
       }
   }
   Logout(){
       this.user.next(null);
       this.router.navigate(['/login']);
       localStorage.removeItem('userdata');
       if(this.tokenexpirationtimer){
           clearTimeout(this.tokenexpirationtimer);
       }
       this.tokenexpirationtimer=null;
   }

   //It will automatically logout when the time gets expired.
   autoLoggedout(expire: number){
    this.tokenexpirationtimer = setTimeout(()=>{
      this.Logout();
     },expire);
   }
}