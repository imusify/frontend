import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

export function ErrorHandler(error: HttpResponse<any>) {
     switch (error.status) {
        case 500:
          return Observable.throw(`Internal server error.`);
        case 404:
          return Observable.throw(error.body.message);
        case 400:
          return Observable.throw(error.body.message);
        case 401:
          return Observable.throw(error.body.message);
        default:
          return Observable.throw(`We could not perform the requested action at this time. Please check your network connectivity.`);
    }
}
