import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()

export class SlackService{
    constructor(private http:Http){    }
    getCountMember(){
        return this.http.get('https://slack.com/api/users.list?token=xoxp-71052417206-256236633264-265895411091-40fc3236702788f6e31583440e701be3&pretty=1')
        .toPromise().then(res=>res.json()).then(resJson=>resJson.members.length);
    }
}
