import { Component, OnInit } from '@angular/core';
import { ChannelService } from './../../services/channel.service';
import {ApiService} from './../../services/api.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  balance: any;
  updatedAt: any;
  constructor(
  	private channelService: ChannelService,
  	private apiService: ApiService
  	) { }

  ngOnInit() {
  	this.balance = 0;
  	this.getBalance()
  }

  createChannel(e) {
  	e.preventDefault();
  	this.channelService.openForm()
  }

  getBalance() {
  	this.apiService.get("user/balance").subscribe(data => {
  		console.log(data)
  		if (data.hasOwnProperty("response")) {
  			const out = JSON.parse(data['response']);

  			this.balance = out.balance;
  			this.updatedAt = out.updatedAt
  				
  			if (this.balance === null ){
  				this.balance = 0;
  			}

  			localStorage.setItem('userBalance', this.balance)
  			localStorage.setItem('balanceUpdatedAt', this.updatedAt);
  			setTimeout(() => {
  				this.getBalance();
  			}, 50000)
  		}
  	}, err => {
  		console.log(err)
  	})
  }

}
