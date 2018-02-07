import { ApiService } from './../../services/api.service';
import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from './../../models/user';
import { SET_USER, UNSET_USER } from './../../reducers/user.reducer';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-activate-account',
  templateUrl: './activate-account.component.html',
  styleUrls: ['./activate-account.component.scss']
})
export class ActivateAccountComponent implements OnInit, OnDestroy, AfterViewInit {

  public loading: boolean;
  public code: any;
  public success: boolean;
  public walletForm: FormGroup;
  private sub: any;
  message: any;

  constructor(
              private activated_router: ActivatedRoute,
              private api: ApiService,
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
    this.api.activate(this.code).subscribe(data => {

      // localStorage.setItem('_userToken', data['response']);  TODO - Remove
      // this.api.getToken(); TODO - Remove

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
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  walletSetup() {
      this.loading = true;
      const wallet = {
        password: this.walletForm.value.password
      };

      this.api.post('user/wallet/setup', wallet).subscribe(data => {
          this.loading = false;
          this.message = {
            type: 'success',
            message: 'Wallet setup successfully! Redirecting...'
          };

          // Reset Session
          this.store.dispatch({type: UNSET_USER});

          setTimeout(() => {
            this.router.navigateByUrl('/channels');
          }, 1000);

      }, err => {
          this.loading = false;
          this.message = {
            type: 'danger',
            message: 'Invalid credentials!'
          };
      });
  }

}
