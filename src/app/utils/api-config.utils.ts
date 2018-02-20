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

    /**
     * This is used to set Headers on requests
     * @returns { HttpHeaders }
     */
    protected setHeaders(): HttpHeaders {
        // Get current user
        this.myUserService.getAuthUser();
        const headersConfig = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        };

        if (this.myUserService.isLoggedIn()) {
            headersConfig['Authorization'] = `JWT ${this.myUserService.getAuthUserToken()}`;
        }

        return new HttpHeaders(headersConfig);
    }
}
