import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  guest: boolean

  constructor(private authService: AuthService){

  }

  ngOnInit() {
  	
  	if (this.authService.isAuthenticated()) {
  		this.guest = false;
	} else {
	  	this.guest = true;
	}

  	this.authService.getLoginStatus().subscribe(data => {
  		if(!data) {
  			this.guest = true;
  		} else {
	  		if (this.authService.isAuthenticated()) {
	  			this.guest = false;
		  	} else {
		  		this.guest = true;
		  	}
	  }
  	})
  }


}
