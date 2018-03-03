import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpResponse, HttpRequest } from '@angular/common/http';
import { ErrorHandler } from '../utils/error-handler.utils';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { UserService } from './user.service';
import { ApiConfig } from '../utils/api-config.utils';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Store } from '@ngrx/store';

@Injectable()
export class APIHandlerService extends ApiConfig {

    constructor(
        private http: HttpClient,
        private userService: UserService,
    ) {
        super(userService);
    }

  private errorHandler(err: HttpResponse<any>) {
    let bodyError = null;
    if (err.status === 401) {
      if (err['_body'] && err['_body'].constructor === String) {
        bodyError = (err['_body'].indexOf('{') > -1) ? JSON.parse(err['_body'])['message'] : null;
      }
      throw (err || 'Server error');
    } else if (err.status === 404) {
      throw (err.statusText || 'Resource not found');
    }
    return Observable.throw(err || 'Server error');
  }

  public callService(method: string = 'POST', path: string = '', data?: string | Object): Observable<any> {
    this.headers = { headers: this.setHeaders() };
    method = method.toUpperCase();
    let url = `${APIHandlerService.API_DEFAULT_URL}${path}`;
    if (data === undefined || data === null) {
      data = ' ';
    }
    switch (method) {
      case 'POST':
        return this.http.post(url, (data || {}), this.headers)
          .catch(this.errorHandler)
          .retryWhen((errors) => {
            return errors
              .mergeMap((error) => this.errorHandler(error))
              .delay(1000)
              .take(2);
          })
          .map((res: HttpResponse<any>) => res);
      case 'PUT':
        return this.http.put(url, (data || {}) || {}, this.headers)
          .retryWhen((errors) => {
            return errors
              .mergeMap((error) => this.errorHandler(error))
              .delay(1000)
              .take(2);
          })
          .catch(this.errorHandler)
          .map((res: HttpResponse<any>) => res);
      case 'GET':
        url = this.checkGetMark(url);
        return this.http.get(`${url}`, this.headers)
          .catch(this.errorHandler)
          .retryWhen((errors) => {
            return errors
              .mergeMap((error) => this.errorHandler(error))
              .delay(1000)
              .take(2);
          })
          .map((res: HttpResponse<any>) => res);
      case 'DELETE':
        url = this.checkGetMark(url);
        return this.http.delete(`${url}`, this.headers)
          .retryWhen((errors) => {
            return errors
              .mergeMap((error) => this.errorHandler(error))
              .delay(1000)
              .take(2);
          })
          .catch(this.errorHandler)
          .map((res: HttpResponse<any>) => res);
      default:
        throw new Error('Request Method does not exist');
    }

  }

  public upload(path: string, file: File): Observable<any> {
    const headers = new HttpHeaders({'Content-Type': file.type});
    return this.http.put(path, file, {
      headers: headers,
      responseType: 'text'
    });
  }

  public progressUpload(path: string, file?: any): Observable<any> {
    const headers = new HttpHeaders({'Content-Type': file.type});
    const req = new HttpRequest('PUT', path, file, {
      headers: headers,
      reportProgress: true,
    });
    return this.http.request(req);
  }

  public post(path: string, data?: any, contentType: any = 'application/json'): Observable<any> {
    this.headers = { headers: this.setHeaders(contentType) };
    const url = `${APIHandlerService.API_DEFAULT_URL}${path}`;
    return this.http.post(url, (data || {}), this.headers)
      .retryWhen((errors) => {
        return errors
          .mergeMap((error) => this.errorHandler(error))
          .delay(1000)
          .take(2);
      })
      .catch(this.errorHandler)
      .map((res: HttpResponse<any>) => res);
  }

  public postDirect(path: string, data?: any, contentType: any = 'application/x-www-form-urlencoded'): Observable<any> {
    this.headers = { headers: this.setHeaders(contentType) };
    const url = `${APIHandlerService.API_DEFAULT_URL}${path}`;
    return this.http.post(url, data || {}, this.headers)
      .retryWhen((errors) => {
        return errors
          .mergeMap((error) => this.errorHandler(error))
          .delay(1000)
          .take(2);
      })
      .catch(this.errorHandler)
      .map((res: HttpResponse<any>) => res);
  }

  public put(path: string, data?: Object): Observable<any> {
    this.headers = { headers: this.setHeaders() };
    const url = `${APIHandlerService.API_DEFAULT_URL}${path}`;
    return this.http.put(url, (data || {}) || {}, this.headers)
      .retryWhen((errors) => {
        return errors
          .mergeMap((error) => this.errorHandler(error))
          .delay(1000)
          .take(2);
      })
      .catch(this.errorHandler)
      .map((res: HttpResponse<any>) => res);
  }

  public patch(path: string, data?: Object, contentType: any = 'application/json'): Observable<any> {
    this.authToken = this.userService.getAuthUserToken();
    this.headers = { headers: this.setHeaders(contentType) };
    const url = `${APIHandlerService.API_DEFAULT_URL}${path}`;
    return this.http.patch(url, (data || {}) || {}, this.headers)
      .retryWhen((errors) => {
        return errors
          .mergeMap((error) => this.errorHandler(error))
          .delay(1000)
          .take(2);
      })
      .catch(this.errorHandler)
      .map((res: HttpResponse<any>) => res);
  }

  // used for retrieving pagination URLs
  public getRaw(path: string): Observable<any> {
    const options = {
      headers: this.setHeaders(),
    };
    return this.http.get(`${path}`, options)
      .retryWhen((errors) => {
        return errors
          .mergeMap((error) => this.errorHandler(error))
          .delay(1000)
          .take(2);
      })
      .catch(this.errorHandler)
      .map((res: HttpResponse<any>) => res);
  }

  public get(path: string): Observable<any> {
    const url = `${APIHandlerService.API_DEFAULT_URL}${path}`;
    return this.getRaw(url);
  }

  public delete(path: string): Observable<any> {
    this.headers = { headers: this.setHeaders() };
    let url = `${APIHandlerService.API_DEFAULT_URL}${path}`;
    url = this.checkGetMark(url);
    return this.http.delete(`${url}`, this.headers)
      .retryWhen((errors) => {
        return errors
          .mergeMap((error) => this.errorHandler(error))
          .delay(1000)
          .take(2);
      })
      .catch(this.errorHandler)
      .map((res: HttpResponse<any>) => res);
  }

  private checkGetMark(url) {
    if (url.indexOf('?') > -1) {
      return `${url}`;
    } else {
      return `${url}`;
    }
  }
}
