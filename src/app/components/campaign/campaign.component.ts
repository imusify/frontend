import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from './../../services/api.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { ParentComponent } from './../parent/parent.component';
import { OPEN_CAMPAIGNS_FORM } from '../../reducers/openCampaignsForm.reducer';
import { Campaign } from '../../models/campaign';
import { CampaingsList } from '../../models/campaingsList';
import { SET_CAMPAIGNS_LIST } from '../../reducers/campaignsList.reducer';

@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.scss']
})
export class CampaignComponent extends ParentComponent implements OnInit {

  nameError: string;
  loading: boolean;
  done: boolean;
  openCampaignsFormReducer: Observable<boolean>;
  campaignForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private store: Store<any>
  ) {
    super();
  }

  ngOnInit() {

    this.openCampaignsFormReducer = this.store.select('openCampaignsFormReducer');

    this.campaignForm = this.formBuilder.group({
      name : [ null, Validators.required ],
      description: [null]
    });
  }

  createCampaign(event) {
    event.preventDefault();
    this.loading = true;
    const campaign = {
      name: this.campaignForm.value.name,
      description: this.campaignForm.value.description,
    }

    this.apiService.post('campaign/new', campaign).subscribe(
      data => {
        this.loading = false;
        this.done = true;
        setTimeout(() => {
          this.store.dispatch({type: OPEN_CAMPAIGNS_FORM, payload: false});

          this.apiService.get('campaign/list').subscribe(
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

        }, 1000);
      },
      err => {
        this.loading = false;
        if (err.status === 409 || err.status === 406) {
          this.nameError = err.error.error;
        } else {
          this.nameError = 'Something went wrong! Try again.';
        }
      }
    );
  }

  close(event) {
    event.preventDefault();
    this.store.dispatch({type: OPEN_CAMPAIGNS_FORM, payload: false});
  }
}
