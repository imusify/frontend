import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { User } from './../../models/user';
import { Store } from '@ngrx/store';
import { ParentComponent } from './../parent/parent.component';
import { PreloaderService } from '../../services/preloader.service';
import { UserService } from '../../services/user.service';
import { UserAPIService } from '../../services/api-routes/user.service';

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
    private userService: UserService,
    private userApiService: UserAPIService
  ) {
    super();
  }

  ngOnInit() {
    this.preloader.hide();
    this.user = this.store.select('userReducer');

    if (this.userService.isLoggedIn()) {
      console.log('User is already logged in');
      this.userApiService.refreshUser();
      this.router.navigateByUrl('/channels');
    }

    this.subscribers.userReducer = this.user.subscribe(
      user => {
        if (user) {
          this.guest = false;
        } else {
          this.guest = true;
        }
      }
    );
  }
}
