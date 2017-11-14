import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leftpane',
  templateUrl: './leftpane.component.html',
  styleUrls: ['./leftpane.component.css']
})
export class LeftpaneComponent implements OnInit {

  showSetting: boolean;
  optionsStatus: boolean;
  userStatus: string;

  constructor() { }

  ngOnInit() {
  	this.showSetting = false;
  	this.optionsStatus = false;
  	this.userStatus = 'online'
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

}
