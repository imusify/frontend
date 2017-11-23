import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from './../../services/api.service';
import {PageActionsService} from './../../services/page-actions.service';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {

  public profile: any;
  public profileForm: FormGroup;

  constructor(
  		private apiService: ApiService,
  		private formBuilder: FormBuilder,
  		private pageAction: PageActionsService
  	) { }

  ngOnInit() {

  	this.getProfile();
  }

  close(e) {
  	e.preventDefault()
  	this.pageAction.setAction('close_profile');
  }

  getProfile() {
  	this.apiService.get('user/edit/profile').subscribe(data => {
  		this.profile = data['response']
  		console.log(this.profile);

  		this.profileForm = this.formBuilder.group({
		      fname: [this.profile.first_name, [Validators.required, Validators.minLength(2)]],
		      lname: [this.profile.last_name, [Validators.required, Validators.minLength(2)]],
		      email: [this.profile.email, [Validators.required, Validators.email]],
		      username: [this.profile.username, [Validators.required, Validators.minLength(8)]]
		    });

  	}, error => {

  	});  	
  }

}
