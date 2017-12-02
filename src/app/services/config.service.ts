import { Injectable } from '@angular/core';

@Injectable()
export class ImuConfigService {

  constructor() { }
  getBakend(endpoint) {
  	//54.69.181.80/api/
  	//imusify.com/api/
  	//imusify.com/api
    return 'http://imusify.com/api/v1/' + endpoint;
  }

  getUserAvatar(username, size=60) {
    return this.getBakend('user/avatar/' + username + '/' + size)
  }

  getSlackToken() {
    return '<update-slack-token>';
  }

}
