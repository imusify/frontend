import { ImuConfigService } from './config.service';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class ApiService {

  private token: any;

  constructor(
              private http: HttpClient, 
              private config: ImuConfigService,
              private router: Router
              ) {
    this.getToken();
   }

  signup(user: any) {
      const url = this.config.getBakend('user/signup');
      return this.http.post(url, user, {
        headers: new HttpHeaders().set('Content-Type', 'application/json'),
      });
  }

  activate(code: string) {
    const url = this.config.getBakend('user/verify/' + code);
    return this.http.get(url);
  }

  signin(user: any) {
    const url = this.config.getBakend('user/singin');
    return this.http.post(url, user, {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
    });

  }

  getToken() {
      this.token = localStorage.getItem('_userToken');
  }

  get(endpoint) {
    const url = this.config.getBakend(endpoint);
    const options = {
      reportProgress: true,
      headers: new HttpHeaders()
      .set('Accept', 'application/json')
      .set('Authorization', this.token)
    };
    return this.http.get(url, options);
  }

  post(endpoint, data) {
    const url = this.config.getBakend(endpoint);

    const options = {
      reportProgress: true,
      headers: new HttpHeaders()
      .set('Accept', 'application/json')
      .set('Authorization', this.token)
    };

    return this.http.post(url, data, options);
  }

  request(endpoint, data) {
    const url = this.config.getBakend(endpoint);
    const req = new HttpRequest('POST', url, data, {
      reportProgress: true,
      headers: new HttpHeaders()
      .set('Accept', 'application/json')
      .set('Authorization', this.token)
    });


    return this.http.request(req);
  }

  upload(endpoint, data) {
    const url = this.config.getBakend(endpoint);
    this.http.post(endpoint, data);
  }
}
