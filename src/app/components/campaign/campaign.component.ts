import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { ParentComponent } from './../parent/parent.component';
import { OPEN_CAMPAIGNS_FORM } from '../../reducers/openCampaignsForm.reducer';
import { Campaign } from '../../models/campaign';
import { CampaignsList } from '../../models/campaingsList';
import { SET_CAMPAIGNS_LIST } from '../../reducers/campaignsList.reducer';
import { CampaignAPIService } from '../../services/api-routes/campaigns.service';
import { UserAPIService } from '../../services/api-routes/user.service';
import { CompleterService, CompleterData, CompleterItem } from 'ng2-completer';
import { HttpParams } from '@angular/common/http';
import { UploadAPIService } from '../../services/api-routes/upload.service';
import { Subject } from 'rxjs/Subject';

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
  campaignAvatar: any;
  isUploading: boolean;
  uploadProgress: any;
  fileList: any = [];
  fileURL: any;
  searchUserName: string = '';
  selectedMembers: any = [];
  selectedMemberIds: any = [];
  dataService: CompleterData = this.completerService.local([], 'id,username', 'first_name,last_name');

  searchSubject: Subject<string> = new Subject();

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<any>,
    private campaignAPIService: CampaignAPIService,
    private userAPIService: UserAPIService,
    private completerService: CompleterService,
    private uploadAPIService: UploadAPIService
  ) {
    super();
  }

  ngOnInit() {

    this.openCampaignsFormReducer = this.store.select('openCampaignsFormReducer');

    this.campaignForm = this.formBuilder.group({
      title : [ null, Validators.required ],
      artistic_name: [ null, Validators.required ],
      video_link: [ null, Validators.required ],
      description: [null],
      searchUserName: [null]
    });

    const eventStream = this.searchSubject.asObservable()
      .map(() => this.searchUserName)
      .debounceTime(10)
      .distinctUntilChanged();

    eventStream.subscribe(input => this.getUsers(input));

  }

  getUsers(searchTerm: string) {
    if (!searchTerm) {
      return;
    }
    this.dataService = this.completerService.local([], 'id,username', 'first_name,last_name');
    this.userAPIService.searchUsers(searchTerm)
      .finally(() => {
        this.loading = false;
      })
      .subscribe(data => {
          this.dataService = this.completerService.local(data['results'], 'id,username', 'first_name,last_name');
          setTimeout(() => {
            this.dataService.search(searchTerm);
          }, 0);
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

  selectMember(selected: CompleterItem) {
    if (selected != null && this.selectedMemberIds.indexOf(selected.originalObject.id) === -1) {
      this.selectedMemberIds.push(selected.originalObject.id);
      this.selectedMembers.push(selected.originalObject);
    }
    // this.campaignForm.value.searchUserName = '';
  }

  removeMember(id) {
    this.selectedMemberIds = this.selectedMemberIds.filter(function(item) {
      return item !== id;
    });

    this.selectedMembers = this.selectedMembers.filter(function(item) {
      return item.id !== id;
    });
  }

  createCampaign(event) {
    event.preventDefault();
    this.loading = true;
    const campaign = {
      'title': this.campaignForm.value.title,
      'artistic_name': this.campaignForm.value.artistic_name,
      'video_link': this.campaignForm.value.video_link,
      'description': this.campaignForm.value.description,
      'members': this.selectedMemberIds,
      'picture': this.fileURL
    };
    let body = new HttpParams();
    for (const attribute in campaign) {
      if (Array.isArray(campaign[attribute])) {
        for (let i = 0; i < campaign[attribute].length; i++) {
          body = body.append(attribute.toString() + '', campaign[attribute][i]);
        }
      } else {
        body = body.set(attribute, campaign[attribute]);
      }
    }
    console.log(body.toString(), body);
    this.campaignAPIService.createCampaign(body.toString())
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
              const campaignsList: CampaignsList = new CampaignsList();
              const result = data['results'];
              for (const campaign in result) {
                campaignsList.campaigns.push(
                  Object.assign(
                    new Campaign(),  result[campaign], {
                      artisticName: result[campaign]['artistic_name'],
                      videoLink: result[campaign]['video_link'],
                    }
                  )
                );
              }
              this.store.dispatch({type: SET_CAMPAIGNS_LIST, payload: campaignsList});
              this.clearData();
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
    event.preventDefault();
    this.fileList = event.target.files;
    if (this.fileList.length > 0) {
      const f: File = this.fileList[0];
      this.uploadAPIService.getUploadURL(f)
        .subscribe(data => {
          const reader = new FileReader();
          reader.onload = (event: any) => {
            this.campaignAvatar = event.target.result;
          };
          reader.readAsDataURL(f);
          this.uploadAPIService.uploadFile(data.url, f)
            .subscribe(event => {
              this.fileURL = f.name;
              this.isUploading = false;
            }, err => {
              console.log(`Error uploading profile pic`, err);
            });
        });
    }
  }

  close(event) {
    event.preventDefault();
    this.clearData();
    this.store.dispatch({type: OPEN_CAMPAIGNS_FORM, payload: false});
  }

  clearData() {
    this.campaignForm.reset();
    this.selectedMemberIds = [];
    this.selectedMembers = [];
    this.done = false;
  }

  searchChanged() {
    this.searchSubject.next(this.searchUserName);
  }

}
