import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { ParentComponent } from './../parent/parent.component';
import { OPEN_CAMPAIGN_DETAILS_FORM } from '../../reducers/openCampaignDetailsForm.reducer';
import { DomSanitizer } from '@angular/platform-browser';
import { OPEN_USER_DETAILS_FORM } from '../../reducers/openUserDetailsForm.reducer';

@Component({
  selector: 'app-campaign-details',
  templateUrl: './campaign-details.component.html',
  styleUrls: ['./campaign-details.component.scss']
})
export class CampaignDetailsComponent extends ParentComponent implements OnInit {

  campaign: any;

  openCampaignDetailsFormReducer: Observable<any>;

  defaultUser = './assets/images/profile/default_user.jpg';

  constructor(
    private store: Store<any>,
    private sanitizer: DomSanitizer
  ) {
    super();
  }

  ngOnInit() {
    this.openCampaignDetailsFormReducer = this.store.select('openCampaignDetailsFormReducer');

    this.subscribers.reducer = this.openCampaignDetailsFormReducer.subscribe(
      campaign => {
        this.campaign = campaign;
        if (this.campaign) {
          this.campaign.embed_video_link = this.getEmbedYoutubeLink(this.campaign.video_link);
        }
      }
    );
  }

  close(event) {
    event.preventDefault();
    this.clearData();
    this.store.dispatch({type: OPEN_CAMPAIGN_DETAILS_FORM, payload: null});
  }

  clearData() {
  }

  getEmbedYoutubeLink(url): string {
    if (!url) {
      return null;
    }
    if (url.indexOf('youtube') === -1) {
      return null;
    }
    return '//www.youtube.com/embed/' + url.split('=')[1];
  }

  displayUserProfile(e, member) {
    e.preventDefault();
    this.store.dispatch({type: OPEN_USER_DETAILS_FORM, payload: member});
  }
}
