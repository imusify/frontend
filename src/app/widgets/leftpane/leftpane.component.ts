import { Component, OnInit } from '@angular/core';
import { PageActionsService } from './../../services/page-actions.service';
import { Router } from '@angular/router';
import { CLEAR_USER, SET_USER_STATUS } from '../../reducers/user.reducer';
import { Store } from '@ngrx/store';
import { User } from '../../models/user';
import { Observable } from 'rxjs/Observable';
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-leftpane',
  templateUrl: './leftpane.component.html',
  styleUrls: ['./leftpane.component.scss']
})
export class LeftpaneComponent implements OnInit {

  showSetting: boolean = false;
  optionsStatus: boolean;
  editForm: boolean;
  aboutPage: boolean;
  wallet: boolean;
  contact: boolean;
  currentUser: Observable<User>;
  user: User;

  constructor(
  	private pageAction: PageActionsService,
    private userService: UserService,
    private router: Router,
    private store: Store<any>
  ) { }

  ngOnInit() {
  	this.showSetting = false;
  	this.optionsStatus = false;
  	this.editForm = false;
  	this.wallet = false;
    this.contact = false;

    this.currentUser = this.store.select('userReducer');
    this.currentUser.subscribe(
      user => {
        this.user = user;
      }
    );
  	this.pageAction.getEmitter().subscribe(data => {

  		switch (data) {
        case 'open_contact':
          this.contact = true;
          break;
        case 'close_contact':
          this.contact = false;
          break;
        case 'open_about':
          this.aboutPage = true;
          break;
  			case 'close_about':
  				this.aboutPage = false;
  				break;
  			case 'close_profile':
  				this.editForm = false;
  				break;
  			case 'close_wallet':
  				this.wallet = false;
  				break;
  			default:
  				// code...
  				break;
  		}
  	});
  }

  signout(e) {
    e.preventDefault();
    this.userService.signout();
    this.router.navigateByUrl('/signin');
  }

  toggleStatusOptions(event) {
  	event.preventDefault();
  	if (this.optionsStatus) {
  		this.optionsStatus = false;
  		return;
  	}
  	this.optionsStatus = true;
  }

  toggleSettingMenuVisible(event) {
  	event.preventDefault();
    this.showSetting = !this.showSetting;
  }

  setStatus(status, event) {
  	event.preventDefault();
    this.store.dispatch({type: SET_USER_STATUS, payload: status});
    this.toggleStatusOptions(event);
  }

  toggleEditForm(event) {
  	event.preventDefault();
    this.toggleSettingMenuVisible(event);
    this.editForm = !this.editForm;
  }

  toggleAboutpage(e) {
  	e.preventDefault();
  	if (this.aboutPage) {
  		this.aboutPage = false;
  		return;
  	}
  	this.aboutPage = true;

  }

  toggleWallet(e) {
  	e.preventDefault();
    this.toggleSettingMenuVisible(event);
  	this.wallet = !this.wallet;
  }

  toggleContact(e) {
    e.preventDefault();
    if (this.contact) {
      this.contact = false;
      return;
    }
    this.contact = true;
  }

}
