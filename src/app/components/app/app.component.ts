import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { User } from './../../models/user';
import { Store } from '@ngrx/store';
import { SET_USER } from './../../reducers/user.reducer';
import { ParentComponent } from './../parent/parent.component';
import { PreloaderService } from '../../services/preloader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends ParentComponent implements OnInit {

  guest: boolean;
  user: Observable<User>;

  constructor(
    private store: Store<any>,
    private router: Router,
    private preloader: PreloaderService,
  ) {
    super();
  }

  ngOnInit() {
    this.preloader.hide();
    this.user = this.store.select('userReducer');
    const user = Object.assign(new User(), JSON.parse(localStorage.getItem('currentUser')));
    if (user && user.token && user.token !== '') {
      this.store.dispatch({type: SET_USER, payload: user});
      this.router.navigateByUrl('/campaigns');
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
