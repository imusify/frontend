import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from './../../models/user';
import { SET_USER, CLEAR_USER } from './../../reducers/user.reducer';
import { Store } from '@ngrx/store';
import { UserAPIService } from '../../services/api-routes/user.service';
import { WalletAPIService } from '../../services/api-routes/wallet.service';
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
    private formBuilder: FormBuilder,
    private router: Router,
    private store: Store<any>,
    private userAPIService: UserAPIService,
    private walletAPIService: WalletAPIService
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
    this.userAPIService.activateUser(this.code)
      .finally(() => {
        this.loading = false;
      })
      .subscribe(
      data => {
        localStorage.setItem('id_token', data['token']);
        this.userAPIService.currentUser().subscribe(
          data => {
            const currentUser = new User();
            currentUser.parseData(data);
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
        this.success =  true;
      }, err => {
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
    this.walletAPIService.createWallet(wallet)
      .finally(() => {
        this.loading = false;
      })
      .subscribe(data => {
        this.message = {
          type: 'success',
          message: 'Wallet setup successfully! Redirecting...'
        };
        this.store.dispatch({type: CLEAR_USER});
        this.router.navigateByUrl('/signin');
      }, err => {
        this.message = {
          type: 'danger',
          message: 'Something went wrong! Try again.'
        };
        this.router.navigateByUrl('/signin');
      }
    );
  }
}
