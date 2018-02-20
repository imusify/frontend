import { Injectable } from '@angular/core';
import { APIHandlerService } from '../api-handler.service';
@Injectable()
export class AuthAPIService {

    constructor(
        private apiService: APIHandlerService
    ) {}

    signin(data) {
        return this.apiService.post('auth-token/', data);
    }

    create(data) {
        return this.apiService.post('users/', data);
    }

    verifyToken(token) {
        return this.apiService.post(`auth-token-verify/`, token);
    }

    refreshToken(token) {
        return this.apiService.post(`auth-token-refresh/`, token);
    }
}
