import { Injectable, EventEmitter } from '@angular/core';
import { JwtHelper } from 'angular2-jwt';


@Injectable()
export class AuthService {
  jwtHelper: JwtHelper = new JwtHelper(); // TODO - Remove

  private loginStatus: EventEmitter<boolean> = new EventEmitter<boolean>(); // TODO - Remove

  constructor() { }

  public isAuthenticated(): boolean {
    // TODO - Remove
   	const token = localStorage.getItem('_userToken');
    try {
    	return !this.jwtHelper.isTokenExpired(token);
  	} catch (err) {
  		return false;
  	}
  }

  setLoginStatus(status: boolean) {
    // TODO - Remove
    this.loginStatus.emit(status);
  }

  getLoginStatus(): EventEmitter<boolean> {
    // TODO - Remove
    return this.loginStatus;
  }

}
