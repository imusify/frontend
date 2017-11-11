import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChannelService } from './../../services/channel.service';
import { ApiService } from './../../services/api.service';

@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.css']
})
export class ChannelComponent implements OnInit {
  
  nameError: string;
  loading: boolean;
  done: boolean;
  showForm: boolean;

  private channelForm: FormGroup;
  constructor(
  		private formBuilder: FormBuilder,
  		private channelService: ChannelService,
  		private apiService: ApiService
  	) { }

  ngOnInit() {
  	this.showForm = false;
  	this.channelService.getForm().subscribe((data) => {
  		this.done = false;
  		this.showForm = data;
  		console.log(data);
  	})
  	this.channelForm = this.formBuilder.group({
  		name : [ null, Validators.required ],
  		slug: [null, Validators.required],
  		description: [null]
  	})
  }

  createChannel(event) {
  	event.preventDefault();
  	this.loading = true;
  	const channel = {
  		name: this.channelForm.value.name,
  		slug: this.channelForm.value.name,
  		description: this.channelForm.value.description
  	}

  	this.apiService.post('channel/new', channel).subscribe(data => {
  		this.loading = false;
  		this.done = true;
  		setTimeout(() => {
  			this.channelService.closeForm();
  			this.channelService.updateList();
  		}, 1000);
  		
  	}, err => {
  		this.loading = false;  		
  		if (err.status === 409 || err.status === 406) {
  			this.nameError = err.error.error;
  		} else {
  			this.nameError = "Something went wrong! Try again."
  		}
  	})

  }

  close(event) {
  	event.preventDefault();
  	//this.channelService.closeForm();
  	this.showForm = false;
  }

}
