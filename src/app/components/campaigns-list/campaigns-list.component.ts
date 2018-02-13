import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../services/api.service';
import { Store } from '@ngrx/store';
import { CampaingsList } from '../../models/campaingsList';
import { Campaign } from '../../models/campaign';
import { SET_CAMPAIGNS_LIST } from '../../reducers/campaignsList.reducer';
import { Observable } from 'rxjs/Observable';
import { ParentComponent } from './../../components/parent/parent.component';

@Component({
  selector: 'app-campaigns-list',
  templateUrl: './campaigns-list.component.html',
  styleUrls: ['./campaigns-list.component.scss']
})
export class CampaignsListComponent extends ParentComponent implements OnInit {

  campaignsList: Observable<CampaingsList>;

  constructor(
    private apiService: ApiService,
    private store: Store<any>
  ) {
    super();
  }

  ngOnInit() {

    this.campaignsList = this.store.select('campaignsListReducer');

    this.apiService.get('campaigns/').subscribe(
      data => {

        const campaignsList: CampaingsList = new CampaingsList();

        for (const campaign in data) {
          campaignsList.campaings.push(
            Object.assign(
              new Campaign(),  data[campaign], {
                // userId: data[channel]['user_id'],
              }
            )
          );
        }

        this.store.dispatch({type: SET_CAMPAIGNS_LIST, payload: campaignsList});
      },
      err => {
        console.log(err);
      }
    );
  }
}
