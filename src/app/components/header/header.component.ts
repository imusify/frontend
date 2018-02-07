import { Component, OnInit } from '@angular/core';
import { ChannelService } from './../../services/channel.service';
import { ApiService } from './../../services/api.service';
import { PageActionsService } from './../../services/page-actions.service';
import { Store } from '@ngrx/store';
import { Observable } from '../../../../node_modules/rxjs';
import { User } from '../../models/user';
import { UserWallet } from '../../models/userWallet';
import { SET_USER_WALLET } from './../../reducers/userWallet.reducer';

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
  	private apiService: ApiService,
    private pageAction: PageActionsService,
    private store: Store<any>
  	) { }

  ngOnInit() {
  	// this.getBalance(); TODO - Remove

    this.currentUser = this.store.select('userReducer');

    this.currentUser.subscribe(
      user => {
        if (user && user.token && user.token !== '' && user.isLogged) {
          this.getBalance();
        }
      }
    );
  }

  createChannel(e) {
  	e.preventDefault();
  	this.channelService.openForm();
  }

  toggleWidget(action, e) {
    e.preventDefault()
    this.pageAction.setAction(action);
  }

  getBalance() {
  	this.apiService.get('user/balance').subscribe(data => {
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
