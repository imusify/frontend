import { ApiService } from './../../services/api.service';
import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from './../../models/user';
import { SET_USER, CLEAR_USER } from './../../reducers/user.reducer';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-activate-account',
  templateUrl: './activate-account.component.html',
  styleUrls: ['./activate-account.component.scss']
})
export class ActivateAccountComponent implements OnInit, OnDestroy, AfterViewInit {

  loading: boolean;
  code: any;
  success: boolean;
  walletForm: FormGroup;
  sub: any;
  message: any;

  constructor(
    private activated_router: ActivatedRoute,
    private apiService: ApiService,
    private formBuilder: FormBuilder,
    private router: Router,
    private store: Store<any>
  ) { }

  ngOnInit() {
    this.loading = false;

    this.sub = this.activated_router.params.subscribe(params => {
      this.code = params['code'];
    });

    this.walletForm = this.formBuilder.group({
      password: [null, [Validators.required, Validators.minLength(8)]]
    });
  }

  ngAfterViewInit() {
    setTimeout(_ => this.activateAccount());
  }

  activateAccount() {
    this.loading = true;
    this.apiService.post('users/activate/' + this.code, { }, true).subscribe(
      data => {
        const currentUser = new User();
        currentUser.token = data['response'];
        currentUser.isLogged = false;
        // Save current user in store module
        this.store.dispatch({type: SET_USER, payload: currentUser});

        this.loading = false;
        this.success =  true;
      }, err => {
        this.loading = false;
        this.success =  false;
      }
    );
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  walletSetup() {
    this.loading = true;
    const wallet = {
      password: this.walletForm.value.password
    };

    this.apiService.post('user/wallet/setup', wallet).subscribe(
      data => {
        this.loading = false;
        this.message = {
          type: 'success',
          message: 'Wallet setup successfully! Redirecting...'
        };

        // Reset Session
        this.store.dispatch({type: CLEAR_USER});
        this.router.navigateByUrl('/signin');
      }, err => {
        this.loading = false;
        this.message = {
          type: 'danger',
          message: 'Something went wrong! Try again.'
        };
        // Tmp redirect
        this.router.navigateByUrl('/signin');
      }
    );
  }
}
