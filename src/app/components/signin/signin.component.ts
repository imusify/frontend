import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from './../../models/user';
import { SET_USER, CLEAR_USER } from './../../reducers/user.reducer';
import { Store } from '@ngrx/store';
import { AuthAPIService } from '../../services/api-routes/auth.service';
import {UserAPIService} from "../../services/api-routes/user.service";
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  loading: boolean;
  signinForm: FormGroup;
  message: any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private store: Store<any>,
    private authAPIService: AuthAPIService,
    private userAPIService: UserAPIService
  ) {}

  ngOnInit() {
    this.loading = false;

    this.signinForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(8)]]
    });
  }

  signin(form: FormGroup) {
    this.loading = true;
    const user = {
      email: form.value.email,
      password: form.value.password
    };

    this.authAPIService.signin(user)
    .subscribe(
      data => {
        this.loading = false;
        const token = data['token'];
        const tempUser = new User();
        tempUser.token = token;
        tempUser.isLogged = true;
        this.store.dispatch({type: SET_USER, payload: tempUser});
        this.userAPIService.currentUser().subscribe(
          data => {
            const currentUser = new User();
            currentUser.email = data.email;
            currentUser.token = token;
            currentUser.image = data.image_url;
            currentUser.firstName = data.first_name;
            currentUser.lastName = data.last_name;
            currentUser.isLogged = true;
            // Save current user in store module
            this.store.dispatch({type: SET_USER, payload: currentUser});
            this.message = {
              type: 'success',
              message: 'Logged in successfully! Redirecting...'
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
        console.log(err);
        this.loading = false;

        // Remove User from store
        this.store.dispatch({type: CLEAR_USER});

        this.message = {
          type: 'danger',
          message: 'Invalid credentials!'
        };
      }
    );
  }
}
