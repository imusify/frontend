import { Injectable } from '@angular/core';
import { JwtHelper } from 'angular2-jwt';

@Injectable()
export class AuthService {
  
  jwtHelper: JwtHelper = new JwtHelper();
  constructor() { }

   public isAuthenticated(): boolean {
   	const token = localStorage.getItem('_userToken'); 
   	try{   
    	return !this.jwtHelper.isTokenExpired(token);
	} catch(err) {
		return false;
	}
  }

}
