import { Component, OnInit } from '@angular/core';
import {PageActionsService} from './../../services/page-actions.service';

@Component({
  selector: 'app-leftpane',
  templateUrl: './leftpane.component.html',
  styleUrls: ['./leftpane.component.css']
})
export class LeftpaneComponent implements OnInit {

  showSetting: boolean;
  optionsStatus: boolean;
  userStatus: string;
  editForm: boolean;
  aboutPage: boolean;
  wallet: boolean;
  

  constructor(
  	private pageAction: PageActionsService
  	) { }

  ngOnInit() {
  	this.showSetting = false;
  	this.optionsStatus = false;
  	this.userStatus = 'online';
  	this.editForm = false;
  	this.wallet = false;

  	this.pageAction.getEmitter().subscribe(data => {

  		switch (data) {
  			case "close_about":
  				this.aboutPage = false;
  				break;
  			case "close_profile":
  				this.editForm = false;
  				break;
  			case "close_wallet":
  				this.wallet = false;
  				break;
  			default:
  				// code...
  				break;
  		}
  	})
  }


  

  toggleStatusOptions(event) {
  	event.preventDefault()
  	if(this.optionsStatus) {
  		this.optionsStatus = false;
  		return
  	}
  	this.optionsStatus = true;
  }

  openSetting(event) {
  	event.preventDefault()
  	if(this.showSetting) {
  		this.showSetting = false;
  		return
  	}
  	this.showSetting = true;
  }

  setStatus(status, event){
  	event.preventDefault()
  	this.userStatus = status
  	this.toggleStatusOptions(event)
  }

  toggleEditForm(event) {
  	event.preventDefault()
  	if(this.editForm) {
  		this.editForm = false;
  		return
  	}
  	this.editForm = true;
  }

  toggleAboutpage(e) {
  	e.preventDefault();
  	if(this.aboutPage) {
  		this.aboutPage = false;
  		return
  	}
  	this.aboutPage = true;

  }

  toggleWallet(e) {
  	e.preventDefault();
  	if(this.wallet) {
  		this.wallet = false;
  		return
  	}
  	this.wallet = true;

  }
  

}
