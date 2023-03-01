import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    authenticationState = new BehaviorSubject((localStorage.getItem("login")?true:false))
   
  constructor(
    private route:Router
  ) {}

  authenticate(token:any){
    localStorage.setItem("login","true")
    localStorage.setItem("Token",token)
    this.authenticationState.next(true)
  }

  isAuthenticate(){
    return this.authenticationState
  }
  isAuthenticated(){
    return this.authenticationState.value
  }
  logout(){
    this.authenticationState.next(false)
    localStorage.removeItem("login")
    localStorage.removeItem("Token")
  }
  
  timeToken(response:any){
    if(response == "jwt expired"){
      this.logout()
      this.route.navigate(['/ingresar'])  
    }
  }

}