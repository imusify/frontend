import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from './../../services/api.service';
import { PageActionsService } from './../../services/page-actions.service';
import { ImuConfigService } from './../../services/config.service';
import { HttpClient, HttpHeaders, HttpRequest, HttpEventType } from '@angular/common/http';
import { UtilService } from './../../services/util.service';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.scss']
})
export class EditprofileComponent implements OnInit {

  profile: any;
  profileForm: FormGroup;
  userAvatar: any;
  isUploading: boolean;
  uploadProgress: any;

  constructor(
    private apiService: ApiService,
    private formBuilder: FormBuilder,
    private pageAction: PageActionsService,
    private configService: ImuConfigService,
    private util: UtilService
  ) { }

  ngOnInit() {
    this.isUploading = false;
  	this.getProfile();
  }

  close(e) {
  	e.preventDefault();
  	this.pageAction.setAction('close_profile');
  }

  uploadAvatar(e) {
    this.isUploading = true;
    e.preventDefault();
    const files = e.target.files;
    if (files.length > 0) {
  	  const f: File = files[0];
      const reader = new FileReader();
      reader.onload = (event: any) => {
        this.userAvatar = event.target.result;
      };
      reader.readAsDataURL(f);
      const formData: FormData = new FormData();
      formData.append('picture', f);
      this.apiService
          .request('user/update/avatar', formData)
          .subscribe(event => {
              if (event.type === HttpEventType.UploadProgress) {
                const progress = Math.floor((event.loaded * 100) / event.total);
                const current = this.util.toMB(event.loaded);
                const total = this.util.toMB(event.total);
                this.uploadProgress =  {'progress': progress, 'current': current, 'total': total};
              } else if (event.type === HttpEventType.Response) {
              console.log(event);
              this.isUploading = false;
            }
          }, err => {
            console.log(err);
          });
    }
  }

  getProfile() {
  	this.apiService.get('user/edit/profile').subscribe(data => {
  		this.profile = data['response'];

      this.userAvatar = this.configService.getUserAvatar(this.profile.username, 240);

      this.profileForm = this.formBuilder.group({
		      fname: [this.profile.first_name, [Validators.required, Validators.minLength(2)]],
		      lname: [this.profile.last_name, [Validators.required, Validators.minLength(2)]],
		      email: [this.profile.email, [Validators.required, Validators.email]],
		      username: [this.profile.username, [Validators.required, Validators.minLength(8)]]
		    });

  	}, error => {

  	});
  }

}
