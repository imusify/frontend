import { ImuConfigService } from './config.service';
import { HttpClient, HttpHeaders, HttpRequest, HttpParams,  } from '@angular/common/http';
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

    this.user = this.store.select('userReducer');
    this.subscribers.userReducer = this.user.subscribe(
      user => {
        if (user && user.token && user.token !== '') {
          this.token = user.token;
        }
      }
    );
  }

  get(endpoint, omitToken = false) {
    const url = this.config.getBakend(endpoint);
    let headers = new HttpHeaders().set('Accept', 'application/json');

    if (! omitToken) {
      headers = headers.set('Authorization', 'JWT ' + this.token);
    }

    const options = {
      reportProgress: true,
      headers: headers
    };
    return this.http.get(url, options);
  }

  post(endpoint, data, omitToken = false, format = 'application/json') {
    const url = this.config.getBakend(endpoint);
    let headers = new HttpHeaders().set('Accept', 'application/json').set('Content-Type', format);

    if (! omitToken) {

      headers = headers.set('Authorization', 'JWT ' + this.token);
    }

    const options = {
      reportProgress: true,
      headers: headers
    };

    if (format === 'application/x-www-form-urlencoded') {
      let params = new HttpParams();
      for (const attribute in data) {
        params = params.append(attribute, data[attribute]);
      }

      return this.http.post(url, params.toString(), options);
    } else if (format === 'multipart/form-data') {

      const formData = new FormData();
      for (const attribute in data) {
        formData.append(attribute, data[attribute], (data[attribute].name ? data[attribute].name : null));
      }

      return this.http.post(url, formData, options);
    } else {
      return this.http.post(url, data, options);
    }
  }

  put(endpoint, data, omitToken = false, format = 'application/json') {
    const url = this.config.getBakend(endpoint);
    let headers = new HttpHeaders().set('Accept', 'application/json').set('Content-Type', format);

    if (! omitToken) {
      headers = headers.set('Authorization', 'JWT ' + this.token);
    }

    const options = {
      reportProgress: true,
      headers: headers
    };

    if (format === 'application/x-www-form-urlencoded') {
      let params = new HttpParams();
      for (const attribute in data) {
        params = params.append(attribute, data[attribute]);
      }

      return this.http.put(url, params.toString(), options);
    } else {
      return this.http.put(url, data, options);
    }


  }

  request(endpoint, data) {
    const url = this.config.getBakend(endpoint);
    const req = new HttpRequest('POST', url, data, {
      reportProgress: true,
      headers: new HttpHeaders()
      .set('Accept', 'application/json')
      .set('Token', this.token)
    });
    return this.http.request(req);
  }

  upload(endpoint, data) {
    const url = this.config.getBakend(endpoint);
    this.http.post(endpoint, data);
  }
}
