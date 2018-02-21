import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { ParentComponent } from './../parent/parent.component';
import { OPEN_CAMPAIGNS_FORM } from '../../reducers/openCampaignsForm.reducer';
import { Campaign } from '../../models/campaign';
import { CampaingsList } from '../../models/campaingsList';
import { SET_CAMPAIGNS_LIST } from '../../reducers/campaignsList.reducer';
import { CampaignAPIService } from '../../services/api-routes/campaigns.service';
@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.scss']
})
export class CampaignComponent extends ParentComponent implements OnInit {

  titleError: string;
  loading: boolean;
  done: boolean;
  openCampaignsFormReducer: Observable<boolean>;
  campaignForm: FormGroup;
  userAvatar: any;
  isUploading: boolean;
  uploadProgress: any;
  fileList: any = [];

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<any>,
    private campaignAPIService: CampaignAPIService
  ) {
    super();
  }

  ngOnInit() {

    this.openCampaignsFormReducer = this.store.select('openCampaignsFormReducer');

    this.campaignForm = this.formBuilder.group({
      title : [ null, Validators.required ],
      artistic_name: [ null, Validators.required ],
      crowdfunding_address: [ null, Validators.required ],
      video_link: [ null, Validators.required ],
      description: [null]
    });
  }

  createCampaign(event) {
    event.preventDefault();
    this.loading = true;
    const campaign = {
      'picture': this.fileList[0] ? this.fileList[0] : '',
      'title': this.campaignForm.value.title,
      'artistic_name': this.campaignForm.value.artistic_name,
      'crowdfunding_address': this.campaignForm.value.crowdfunding_address,
      'video_link': this.campaignForm.value.video_link,
      'description': this.campaignForm.value.description,
      'members': []
    };
    this.campaignAPIService.createCampaign(campaign)
        .finally(() => {
          this.loading = false;
        })
        .subscribe(data => {
        this.done = true;
        setTimeout(() => {
          this.store.dispatch({type: OPEN_CAMPAIGNS_FORM, payload: false});
          this.campaignAPIService.getCampaigns()
            .subscribe(
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

        }, 1000);
      },
      err => {
        if (err.status === 409 || err.status === 406) {
          this.titleError = err.error.error;
        } else {
          this.titleError = 'Something went wrong! Try again.';
        }
      }
    );
  }

  setFile(event) {
    this.fileList = event.target.files;
  }

  close(event) {
    event.preventDefault();
    this.store.dispatch({type: OPEN_CAMPAIGNS_FORM, payload: false});
  }
}
