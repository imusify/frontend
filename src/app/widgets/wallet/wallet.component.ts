import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from './../../services/api.service';
import { PageActionsService } from './../../services/page-actions.service';
import { Observable } from '../../../../node_modules/rxjs';
import { UserWallet } from '../../models/userWallet';
import { Store } from '@ngrx/store';

@Component({
  selector: 'widget-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent implements OnInit {

  loading: boolean;
  walletForm: FormGroup;
  showForm: boolean;
  info: any;
  currentUserWallet: Observable<UserWallet>;
  message: any;

  constructor(
    private apiService: ApiService,
    private formBuilder: FormBuilder,
    private pageAction: PageActionsService,
    private store: Store<any>
  ) { }

  ngOnInit() {
    // Current User Wallet
    this.currentUserWallet = this.store.select('userWalletReducer');

    this.showForm = false;
    this.walletForm = this.formBuilder.group({
      password: [null, [Validators.required, Validators.minLength(8)]]
    });

    this.getUser();
  }

  close(e) {
  	e.preventDefault();
  	this.pageAction.setAction('close_wallet');
  }

  getUser() {
  	this.apiService.get('user/edit/profile').subscribe(
  	  data => {
        if (data.hasOwnProperty('response')) {
          if (data['response'].hasOwnProperty('WalletAddress')) {
            if (data['response']['WalletAddress'] === '') {
              console.log('wallet is empty');
              this.showForm = true;
            } else {
              this.showForm = false;
              this.info = data['response'];
            }
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

    this.apiService.post('user/wallet/setup', wallet).subscribe(
      data => {
        this.loading = false;
        this.message = {
          type: 'success',
          message: 'Wallet setup successfully! Redirecting...'
        };

      }, err => {
        this.loading = false;
        this.message = {
          type: 'danger',
          message: 'Invalid credentials!'
        };
      }
    );
  }
}
