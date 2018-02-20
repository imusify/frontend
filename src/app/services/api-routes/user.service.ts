import { Injectable } from '@angular/core';
import { APIHandlerService } from '../api-handler.service';
@Injectable()
export class UserAPIService {

    constructor(
        private apiService: APIHandlerService
    ) {}

    /**
     * Get user information by id
     * @requires id
     * @returns { Observable }
     */
    getDetail(id) {
        return this.apiService.get(`users/${id}/`);
    }

    /**
     * Get user information by username
     * @requires username
     * @returns { Observable }
     */
    getDetailByUsername(username) {
        return this.apiService.get(`users/${username}/`);
    }

    /**
     * Update user information
     * @requires data
     */
    updateUser(data) {
        return this.apiService.put(`users/${data.id}/`, data);
    }

    /**
     * Search Users
     */
    search(keyword) {
        return this.apiService.get(`users/searchh/${keyword}/`);
    }

}
