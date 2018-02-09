import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { ImuConfigService } from './config.service';


@Injectable()
export class SlackMambersService {

  constructor(
    private http: Http,
    private config: ImuConfigService
  ) { }

  getCountMember() {
    const url = 'https://slack.com/api/users.list?token=' + this.config.getSlackToken()
    return this.http.get(url)
      .toPromise().then(res => res.json()).then(resJson => resJson.members.length);
  }

}
