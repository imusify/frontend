import { Component, OnInit } from '@angular/core';
import { ChannelService } from './../../services/channel.service';
import { PageActionsService } from './../../services/page-actions.service';
import { Store } from '@ngrx/store';
import { Observable } from '../../../../node_modules/rxjs';
import { User } from '../../models/user';
import { UserWallet } from '../../models/userWallet';
import { SET_USER_WALLET } from './../../reducers/userWallet.reducer';
import { OPEN_CAMPAIGNS_FORM } from './../../reducers/openCampaignsForm.reducer';
import { WalletAPIService } from '../../services/api-routes/wallet.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  balance: any = 0;
  updatedAt: any;
  currentUser: Observable<User>;

  constructor(
  	private channelService: ChannelService,
    private pageAction: PageActionsService,
    private store: Store<any>,
    private walletAPIService: WalletAPIService
  ) { }

  ngOnInit() {

    this.currentUser = this.store.select('userReducer');

    this.currentUser.subscribe(
      user => {
        if (user) {
          this.getBalance();
        }
      }
    );
  }

  createChannel(e) {
  	e.preventDefault();
  	this.channelService.openForm();
  }

  createCampaign(e) {
    e.preventDefault();
    this.store.dispatch({type: OPEN_CAMPAIGNS_FORM, payload: true});
  }

  toggleWidget(action, e) {
    e.preventDefault();
    this.pageAction.setAction(action);
  }

  getBalance() {
    this.walletAPIService.myBalance().subscribe(data => {
  		if (data.hasOwnProperty('response')) {
  			const out = JSON.parse(data['response']);

        const userWallet = new UserWallet();
        userWallet.updatedAt = out.updatedAt;
        userWallet.balance = out.balance;

        if (userWallet.balance === null) {
          userWallet.balance = 0;
        }

        this.store.dispatch({type: SET_USER_WALLET, payload: userWallet});

  			setTimeout(() => {
  				this.getBalance();
  			}, 50000);
  		}
  	}, err => {
  		console.log(err);
  	});
  }

}
