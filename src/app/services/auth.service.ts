import { Injectable, EventEmitter } from '@angular/core';
import { JwtHelper } from 'angular2-jwt';

@Injectable()
export class AuthService {
  
  jwtHelper: JwtHelper = new JwtHelper();

  private loginStatus: EventEmitter<boolean> = new EventEmitter<boolean>();


  constructor() { }

   public isAuthenticated(): boolean {
   	const token = localStorage.getItem('_userToken'); 
   	try{   
    	return !this.jwtHelper.isTokenExpired(token);
  	} catch(err) {
  		return false;
  	}
  }

  setLoginStatus(status:boolean){
    this.loginStatus.emit(status);
  }

  getLoginStatus(): EventEmitter<boolean> {
    return this.loginStatus;
  }

}
