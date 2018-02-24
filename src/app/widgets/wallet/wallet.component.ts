import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PageActionsService } from './../../services/page-actions.service';
import { Observable } from '../../../../node_modules/rxjs';
import { UserWallet } from '../../models/userWallet';
import { Store } from '@ngrx/store';
import { UserAPIService } from '../../services/api-routes/user.service';
import { WalletAPIService } from '../../services/api-routes/wallet.service';

@Component({
  selector: 'widget-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent implements OnInit {

  loading: boolean;
  walletForm: FormGroup;
  NEPForm: FormGroup;
  showForm: boolean;
  info: any;
  currentUserWallet: Observable<UserWallet>;
  message: any;
  NEPMessage: any;
  isShown: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private pageAction: PageActionsService,
    private store: Store<any>,
    private userAPIService: UserAPIService,
    private walletAPIService: WalletAPIService,
  ) { }

  ngOnInit() {
    // Current User Wallet
    this.currentUserWallet = this.store.select('userWalletReducer');

    this.showForm = false;
    this.loading = false;
    this.isShown = false;
    this.walletForm = this.formBuilder.group({
      password: [null, [Validators.required, Validators.minLength(8)]]
    });
    this.NEPForm = this.formBuilder.group({
      passcode: [null, [Validators.required, Validators.minLength(8)]]
    });

    this.getUser();
  }

  close(e) {
  	e.preventDefault();
  	this.pageAction.setAction('close_wallet');
  }

  getUser() {
    this.loading = true;
    this.userAPIService.currentUser()
    .finally(() => {
      this.loading = false;
    })
    .subscribe(
  	  data => {
          if (data.hasOwnProperty('wallet_address')) {
            if (typeof data['wallet_address'] === 'undefined' || data['wallet_address'] === null) {
              this.showForm = true;
            } else {
              this.showForm = false;
              this.info = data;
            }
        }
	    }, err => {
        console.log(err);
  	  }
  	);
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
              message: 'Wallet setup successfully!'
            };
            this.showForm = false;
            this.info = data;
      }, err => {
        this.message = {
          type: 'danger',
          message: 'Invalid credentials!'
        };
      }
    );
  }

  getNEPData(form) {
    this.isShown = false;
    this.loading = true;
    const data = {
      password: form.value.passcode
    };
    this.walletAPIService.myWallet(data)
        .finally(() => {
          this.loading = false;
        })
        .subscribe(data => {
          this.message = {
            wallet_nep2_key: data.wallet_nep2_key,
          };
          this.isShown = true;
        }, err => {
          this.message = {
            type: 'danger',
            message: 'Invalid password!'
          };
        });
  }
}
