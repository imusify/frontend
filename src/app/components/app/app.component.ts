import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  guest: boolean;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    if (this.authService.isAuthenticated()) {
      this.guest = false;
    } else {
      this.guest = true;
    }

    this.authService.getLoginStatus().subscribe(data => {
      console.log(data);
      setTimeout(() => {
        if (!data) {
          this.guest = true;
        } else {
          if (this.authService.isAuthenticated()) {
            this.guest = false;
          } else {
            this.guest = true;
          }
        }
      });
    });
  }
}
