import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CampaignsList } from '../../models/campaingsList';
import { Campaign } from '../../models/campaign';
import { APPEND_TO_CAMPAIGNS_LIST, SET_CAMPAIGNS_LIST } from '../../reducers/campaignsList.reducer';
import { Observable } from 'rxjs/Observable';
import { ParentComponent } from './../../components/parent/parent.component';
import { CampaignAPIService } from '../../services/api-routes/campaigns.service';
import { OPEN_CAMPAIGN_DETAILS_FORM } from '../../reducers/openCampaignDetailsForm.reducer';
import { APIHandlerService } from '../../services/api-handler.service';

@Component({
  selector: 'app-campaigns-list',
  templateUrl: './campaigns-list.component.html',
  styleUrls: ['./campaigns-list.component.scss']
})
export class CampaignsListComponent extends ParentComponent implements OnInit {

  defaultCampaignImage = './assets/images/imusify_logo.png';

  campaignsList: Observable<CampaignsList>;

  nextPage: string = null;

  constructor(
    private campaignAPIService: CampaignAPIService,
    private apiHandlerService: APIHandlerService,
    private store: Store<any>,
  ) {
    super();
  }

  ngOnInit() {

    this.campaignsList = this.store.select('campaignsListReducer');
    this.campaignAPIService.getCampaigns().subscribe(
      data => {
        const campaignsList: CampaignsList = new CampaignsList();

        const result = data['results'];
        this.nextPage = data['next'];
        for (const campaign in result) {
          campaignsList.campaigns.push(
            this.getCampaignData(result, campaign)
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

  getCampaignData(result, campaign) {
    return Object.assign(
      new Campaign(),  result[campaign], {
        artisticName: result[campaign]['artistic_name'],
        crowdfundingAddress: result[campaign]['crowdfunding_address'],
        videoLink: result[campaign]['video_link'],
        picture: result[campaign]['picture_url']
      });
  }

  onScroll() {
    // load more data if it exists
    if (!this.nextPage) {
      return;
    }

    this.apiHandlerService.getRaw(this.nextPage).subscribe(
      data => {
        const campaignsList: CampaignsList = new CampaignsList();

        const result = data['results'];
        this.nextPage = data['next'];
        for (const campaign in result) {
          campaignsList.campaigns.push(
            this.getCampaignData(result, campaign)
          );
        }
        this.store.dispatch({type: APPEND_TO_CAMPAIGNS_LIST, payload: campaignsList});
      },
      err => {
        console.log(err);
      }
    );
  }
}
