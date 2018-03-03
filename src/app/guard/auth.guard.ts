import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Injectable()
export class AuthGuard implements CanActivate {

  currentUser: Observable<User>;

  activated: boolean = false;

  constructor(
    private router: Router,
    private store: Store<any>,
    private userService: UserService
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // not logged in so redirect to login page with the return url
    if (this.userService.isLoggedIn()) {
      return true;
    }

    this.router.navigate(['/signin']);
    return false;
  }
}
