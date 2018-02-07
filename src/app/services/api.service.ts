import { ImuConfigService } from './config.service';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { User } from './../models/user';
import { Store } from '@ngrx/store';

@Injectable()
export class ApiService {

  private token: any;
  user: Observable<User>;
  subscribers: any = {};

  constructor(
    private http: HttpClient,
    private config: ImuConfigService,
    private router: Router,
    private store: Store<any>
  ) {
    // this.getToken(); TODO - Remove

    this.user = this.store.select('userReducer');
    this.subscribers.userReducer = this.user.subscribe(
      user => {
        if (user && user.token && user.token !== '') {
          this.token = user.token;
        }
      }
    );
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

  getCategories() {
     return this.get('category/list');
  }

  getToken() {
    // this.token = localStorage.getItem('_userToken'); TODO - Remove
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
