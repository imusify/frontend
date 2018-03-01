import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { ParentComponent } from './../parent/parent.component';
import { DomSanitizer } from '@angular/platform-browser';
import { OPEN_USER_DETAILS_FORM } from '../../reducers/openUserDetailsForm.reducer';
import { UserAPIService } from '../../services/api-routes/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent extends ParentComponent implements OnInit {
  loadedUser: any;

  openUserDetailsFormReducer: Observable<any>;

  defaultUser = './assets/images/profile/default_user.jpg';

  constructor(
    private store: Store<any>,
    private domSanitizer: DomSanitizer,
    private userAPIService: UserAPIService
  ) {
    super();
  }

  ngOnInit() {
    this.openUserDetailsFormReducer = this.store.select(
      'openUserDetailsFormReducer'
    );
    this.subscribers.reducer = this.openUserDetailsFormReducer.subscribe(
      user => {
        if (user !== null) {
          this.userAPIService.getDetail(user.id).subscribe(
            user => {
              this.loadedUser = user;
            },
            err => {
              console.log(err);
            }
          );
        } else {
          this.loadedUser = null;
        }
      }
    );
  }

  getFullName(user) {
    return `${user.first_name} ${user.last_name}`;
  }

  close(event) {
    event.preventDefault();
    this.store.dispatch({ type: OPEN_USER_DETAILS_FORM, payload: null });
  }
}
