import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { User } from './../../models/user';
import { Store } from '@ngrx/store';
import { SET_USER } from './../../reducers/user.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  guest: boolean;
  user: Observable<User>;
  subscribers: any = {};

  constructor(
    private store: Store<any>,
    private router: Router
  ) {}

  ngOnInit() {

    this.user = this.store.select('userReducer');
    const user = Object.assign(new User(), JSON.parse(localStorage.getItem('currentUser')));
    if (user && user.token && user.token !== '') {
      this.store.dispatch({type: SET_USER, payload: user});
      this.router.navigateByUrl('/channels');
    }

    this.subscribers.userReducer = this.user.subscribe(
      user => {
        if (user && user.token && user.token !== '' && user.isLogged) {
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.guest = false;
        } else {
          localStorage.setItem('currentUser', JSON.stringify(new User()));
          this.guest = true;
        }
      }
    );
  }
}
