import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserAPIService } from '../../services/api-routes/user.service';

@Component({
	selector: 'app-forgot',
	templateUrl: './forgot.component.html',
	styleUrls: ['./forgot.component.scss']
})

export class ForgotComponent implements OnInit {

	loading: boolean;
  	forgotForm: FormGroup;
  	messages: any;
  	thanks: boolean;

	constructor(
		private formBuilder: FormBuilder,
		private userAPIService: UserAPIService
	) {}

	ngOnInit() {
		this.loading = false;
		this.thanks = false;
		this.forgotForm = this.formBuilder.group({
			email: [null, [Validators.required, Validators.email]]
		});
	}

	sendPassword(form) {
		this.loading = true;
		this.userAPIService.forgotPassword(form.value.email)
			.finally(() => {
				this.loading = false;
			})
			.subscribe(response => {
				this.thanks = true;
			}, err => {
				if (err.status === 409 || err.status === 406 ) {
		          const errMessage = err.error['error'];
		          this.messages = {
		            type: 'danger',
		            message: errMessage
		          };
		        }  else {
		          this.messages = {
		            type: 'danger',
		            message: 'Something went wrong, please try later!'
		          };
		        }
			});
	}
}
