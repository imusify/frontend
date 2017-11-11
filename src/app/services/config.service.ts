import { Injectable } from '@angular/core';

@Injectable()
export class ImuConfigService {



  constructor() { }

  getBakend(endpoint) {
  	//54.69.181.80/api/
  	//imusify.com/api/
    return 'http://localhost:8080/v1/' + endpoint;
  }

}
