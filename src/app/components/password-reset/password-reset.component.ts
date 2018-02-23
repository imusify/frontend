import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {User} from './../../models/user';
import {SET_USER, CLEAR_USER} from './../../reducers/user.reducer';
import {UserAPIService} from '../../services/api-routes/user.service';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.scss']
})

export class PasswordResetComponent implements OnInit {

  loading: boolean;
  resetForm: FormGroup;
  message: any;
  code: string;

  constructor(private formBuilder: FormBuilder,
              private userAPIService: UserAPIService,
              private route: ActivatedRoute,
              private router: Router,
              private store: Store<any>) {
  }

  ngOnInit() {
    this.loading = false;
    this.resetForm = this.formBuilder.group({
      password: [null, [Validators.required]],
    });
    this.route.params
      .filter(params => params.code)
      .subscribe(params => this.code = params.code)
  }

  resetPassword(form) {
    this.loading = true;
    const data = {
      new_password: form.value.password,
      code: this.code
    }
    this.userAPIService.resetPassword(data)
      .finally(() => {
        this.loading = false;
      })
      .subscribe(response => {
        const token = response['token'];
        const tempUser = new User();
        tempUser.token = token;
        tempUser.isLogged = true;
        this.store.dispatch({type: SET_USER, payload: tempUser});
        this.userAPIService.currentUser().subscribe(
          data => {
            const currentUser = new User();
            currentUser.email = data.email;
            currentUser.token = token;
            currentUser.isLogged = true;
            // Save current user in store module
            this.store.dispatch({type: SET_USER, payload: currentUser});

            this.message = {
              type: 'success',
              message: 'Password Reset success! Logging in...'
            };
            this.router.navigateByUrl('/channels');
          },
          err => {
            console.log(err);
            this.loading = false;
            this.store.dispatch({type: CLEAR_USER});
            this.message = {
              type: 'danger',
              message: 'Failed to retrieve user information!'
            };
          }
        );
      }, err => {
        this.loading = false;
        this.store.dispatch({type: CLEAR_USER});
        this.message = {
          type: 'danger',
          message: 'Password Reset failed!'
        };
      })
  }
}
