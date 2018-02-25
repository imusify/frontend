import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CampaingsList } from '../../models/campaingsList';
import { Campaign } from '../../models/campaign';
import { SET_CAMPAIGNS_LIST } from '../../reducers/campaignsList.reducer';
import { Observable } from 'rxjs/Observable';
import { ParentComponent } from './../../components/parent/parent.component';
import { CampaignAPIService } from '../../services/api-routes/campaigns.service';
import {OPEN_CAMPAIGN_DETAILS_FORM} from "../../reducers/openCampaignDetailsForm.reducer";

@Component({
  selector: 'app-campaigns-list',
  templateUrl: './campaigns-list.component.html',
  styleUrls: ['./campaigns-list.component.scss']
})
export class CampaignsListComponent extends ParentComponent implements OnInit {

  defaultUser = './assets/images/profile/default_user.jpg';

  campaignsList: Observable<CampaingsList>;

  constructor(
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
                picture: result[campaign]['picture_url']
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

  displayCampaign(e, campaign) {
    e.preventDefault();
    this.store.dispatch({type: OPEN_CAMPAIGN_DETAILS_FORM, payload: campaign});
  }
}
