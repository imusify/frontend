import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { CLEAR_USER } from '../reducers/user.reducer';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class UserService {

  constructor(
    private router: Router,
    private store: Store<any>
  ) {  }

  /**
   * This is used to get user token
   */
  public getAuthUserToken(): any {
    return localStorage.getItem('id_token');
  }

  public isLoggedIn(): boolean {
    let isLoggedIn = false;
    try {
      isLoggedIn = tokenNotExpired('id_token');
    } catch (e) {
      console.log('', e);
    }

    return isLoggedIn;
  }

  /**
   * This is used to sign user out
   */
  public signout(): any {
    this.store.dispatch({type: CLEAR_USER, payload: null});
    localStorage.removeItem('id_token');
    this.router.navigate(['/']);
  }
}
