import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { ParentComponent } from './../parent/parent.component';
import { DomSanitizer } from '@angular/platform-browser';
import { OPEN_USER_DETAILS_FORM } from '../../reducers/openUserDetailsForm.reducer';

@Component({
    selector: 'app-user-details',
    templateUrl: './user-details.component.html',
    styleUrls: ['./user-details.component.scss']
})

export class UserDetailsComponent extends ParentComponent implements OnInit {

    user: any;

    openUserDetailsFormReducer: Observable<any>;

    defaultUser = './assets/images/profile/default_user.jpg';

    constructor(
        private store: Store<any>,
        private domSanitizer: DomSanitizer
    ) {
        super();
    }

    ngOnInit() {
        this.openUserDetailsFormReducer = this.store.select('openUserDetailsFormReducer');
        this.subscribers.reducer = this.openUserDetailsFormReducer
            .subscribe(user => {
                this.user = user;
            });
    }

    close(event) {
        event.preventDefault();
        this.store.dispatch({type: OPEN_USER_DETAILS_FORM, payload: null});
    }


}
