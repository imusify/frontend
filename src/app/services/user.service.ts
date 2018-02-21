import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { CLEAR_USER } from '../reducers/user.reducer';

@Injectable()
export class UserService {

    constructor(
        private router: Router,
        private store: Store<any>,
    ) {}

    /**
     * This is used to set authenticated user
     * @param user
     */

     public setAuthUser(user: any): void {

     }

     /**
      * This is used to get authenticated user
      */
      public getAuthUser(): any {
          const cacheUser = localStorage.getItem('currentUser');
          return (cacheUser) ? cacheUser : null;
      }

      /**
       * This is used to get user token
       */
      public getAuthUserToken(): any {
          return JSON.parse(this.getAuthUser()).token;
      }

    /**
     * Verify if user is logged in
     * @returns {boolean}
     */
    public isLoggedIn(): boolean {
        return !!(JSON.parse(localStorage.getItem('currentUser')).isLogged);
    }

    /**
     * This is used to sign user out
     */
    public signout(): any {
        this.store.dispatch({type: CLEAR_USER});
        this.router.navigate(['/']);
    }
}
