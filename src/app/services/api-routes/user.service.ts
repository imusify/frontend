import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { APIHandlerService } from '../api-handler.service';
import { SET_USER } from '../../reducers/user.reducer';
import { User } from '../../models/user';
@Injectable()
export class UserAPIService {

    constructor(
        private apiService: APIHandlerService,
        private store: Store<any>
    ) {}

    getDetail(id) {
        return this.apiService.get(`users/${id}/`);
    }

    getDetailByUsername(username) {
        return this.apiService.get(`users/${username}/`);
    }

    updateUser(data) {
        return this.apiService.patch(`users/${data.id}/`, data);
    }

    searchUsers(keyword) {
        return this.apiService.get(`users/search/${keyword}`);
    }

    getSearchUsersURL() {
        return this.apiService.getAPIUrl(`users/search/`);
    }

    currentUser() {
        return this.apiService.get(`users/user/profile`);
    }

    refreshUser() {
      return this.currentUser().subscribe(
        data => {
          const user = new User();
          user.parseData(data);
          this.store.dispatch({type: SET_USER, payload: user});
        },
        err => console.log(err)
      );
    }

    activateUser(code) {
        return this.apiService.post(`users/activate/${code}`);
    }

    uploadAvatar(avatar) {
        return this.apiService.post(`users/update/avatar`, avatar);
    }

    forgotPassword(email) {
        return this.apiService.get(`users/password/forgot/${email}`);
    }

    resetPassword(data) {
        return this.apiService.post(`users/password/reset`, data);
    }
}
