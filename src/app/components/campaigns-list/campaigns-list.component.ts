import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../services/api.service';
import { Store } from '@ngrx/store';
import { CampaingsList } from '../../models/campaingsList';
import { Campaign } from '../../models/campaign';
import { SET_CAMPAIGNS_LIST } from '../../reducers/campaignsList.reducer';
import { Observable } from 'rxjs/Observable';
import { ParentComponent } from './../../components/parent/parent.component';
import { CampaignAPIService } from '../../services/api-routes/campaigns.service';

@Component({
  selector: 'app-campaigns-list',
  templateUrl: './campaigns-list.component.html',
  styleUrls: ['./campaigns-list.component.scss']
})
export class CampaignsListComponent extends ParentComponent implements OnInit {

  campaignsList: Observable<CampaingsList>;

  constructor(
    private apiService: ApiService,
    private campaignAPIService: CampaignAPIService,
    private store: Store<any>
  ) {
    super();
  }

  ngOnInit() {

    this.campaignsList = this.store.select('campaignsListReducer');

    this.campaignAPIService.getCampaigns().subscribe(
      data => {

        const campaignsList: CampaingsList = new CampaingsList();

        const result = data['results'];

        for (const campaign in result) {
          campaignsList.campaings.push(
            Object.assign(
              new Campaign(),  result[campaign], {
                artisticName: result[campaign]['artistic_name'],
                crowdfundingAddress: result[campaign]['crowdfunding_address'],
                videoLink: result[campaign]['video_link'],
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
