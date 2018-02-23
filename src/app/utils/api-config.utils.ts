import { HttpHeaders } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { UserService } from '../services/user.service';

export class ApiConfig {

    static API_DEFAULT_URL = 'https://imusify-prod.herokuapp.com/v1/';
    protected headers = {
        headers: this.setHeaders()
    };

    protected authToken: any;

    constructor(
        private myUserService: UserService
    ) {}

    protected setHeaders(contentType: any = 'application/json'): HttpHeaders {
        this.myUserService.getAuthUser();
        const headersConfig = {
            'Accept': 'application/json',
        };

        if (contentType) {
          headersConfig['Content-Type'] = contentType;
        }

        if (this.myUserService.isLoggedIn()) {
            headersConfig['Authorization'] = `JWT ${this.myUserService.getAuthUserToken()}`;
        }

        return new HttpHeaders(headersConfig);
    }
}
