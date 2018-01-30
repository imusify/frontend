import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChannelService } from './../../services/channel.service';
import { ApiService } from './../../services/api.service';

@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.scss']
})
export class ChannelComponent implements OnInit {

  nameError: string;
  loading: boolean;
  done: boolean;
  showForm: boolean;
  categories: any;

  private channelForm: FormGroup;
  constructor(
  		private formBuilder: FormBuilder,
  		private channelService: ChannelService,
  		private apiService: ApiService
  	) { }

  ngOnInit() {
  	this.showForm = false;

    this.apiService.getCategories().subscribe(data => {
       this.categories = data;
    }, err => {
        console.log(err);
    });


  	this.channelService.getForm().subscribe((data) => {
  		this.done = false;
  		this.showForm = data;
  		console.log(data);
  	})
  	this.channelForm = this.formBuilder.group({
  		name : [ null, Validators.required ],
  		slug: [null, Validators.required],
  		description: [null],
      categories: [null, Validators.required]
  	})
  }

  createChannel(event) {
  	event.preventDefault();
  	this.loading = true;
  	const channel = {
  		name: this.channelForm.value.name,
  		slug: this.channelForm.value.name,
  		description: this.channelForm.value.description,
      categories: this.channelForm.value.categories
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
