import { ApiService } from './../../services/api.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  loading: boolean;
  signupForm: FormGroup;
  messages: any;
  thanks: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService
  ) {}

  ngOnInit() {
    this.loading = false;
    this.thanks = false;
    this.signupForm = this.formBuilder.group({
      username: [null, [Validators.required, Validators.minLength(8)]],
      fname: [null, [Validators.required, Validators.minLength(2)]],
      lname: [null, [Validators.required, Validators.minLength(2)]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(8)]]
    });
  }

  signup(form: FormGroup) {
    this.loading = true;
    const user = {
      'username': form.value.username,
      'email': form.value.email,
      'password': form.value.password,
      'first_name': form.value.fname,
      'last_name': form.value.lname
    };

    this.apiService.signup(user).subscribe(
      data => {
        this.loading = false;
        this.thanks = true;
      }, (err: HttpErrorResponse) => {
        this.loading = false;
        if (err.status === 409 || err.status === 406 ) {
          const errMessage = err.error['error'];
          this.messages = {
            type: 'danger',
            message: errMessage
          };
        }  else {
          this.messages = {
            type: 'danger',
            message: 'Something went wrong, please try later!'
          };
        }
      }
    );
  }
}
