import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PageActionsService } from './../../services/page-actions.service';
import { ImuConfigService } from './../../services/config.service';
import { HttpClient, HttpHeaders, HttpRequest, HttpEventType } from '@angular/common/http';
import { UtilService } from './../../services/util.service';
import { UserAPIService } from '../../services/api-routes/user.service';
import { UploadAPIService } from '../../services/api-routes/upload.service';
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
  message: any;

  defaultUser = './assets/images/profile/default_user.jpg';

  constructor(
    private formBuilder: FormBuilder,
    private pageAction: PageActionsService,
    private configService: ImuConfigService,
    private util: UtilService,
    private userAPIService: UserAPIService,
    private uploadAPIService: UploadAPIService
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
      this.uploadAPIService.getFilename(f.name)
          .subscribe(data => {
            const reader = new FileReader();
            reader.onload = (event: any) => {
              this.userAvatar = event.target.result;
            };
            reader.readAsDataURL(f);
            const formData: FormData = new FormData();
            formData.append('picture', f);
            this.uploadAPIService.uploadFile(data.url, formData)
              .subscribe(event => {
                console.log(event);
                    if (event.type === HttpEventType.UploadProgress) {
                      const progress = Math.floor((event.loaded * 100) / event.total);
                      const current = this.util.toMB(event.loaded);
                      const total = this.util.toMB(event.total);
                      this.uploadProgress =  {'progress': progress, 'current': current, 'total': total};
                    } else if (event.type === HttpEventType.Response) {
                    this.isUploading = false;
                  }
                }, err => {
                  console.log(`Error`, err);
                });      
          })
    }
  }

  getProfile() {
    this.userAPIService.currentUser().subscribe(data => {
  		this.profile = data;
      this.userAvatar = this.configService.getUserAvatar(this.profile.username, 240);
      this.profileForm = this.formBuilder.group({
          id: [this.profile.id],
		      fname: [this.profile.first_name, [Validators.required, Validators.minLength(2)]],
		      lname: [this.profile.last_name, [Validators.required, Validators.minLength(2)]],
		      email: [this.profile.email, [Validators.required, Validators.email]],
		      username: [this.profile.username, [Validators.required, Validators.minLength(8)]]
		    });
  	}, error => {
  	});
  }

  updateProfile(form) {
    const profile = {
      id: form.id,
      first_name: form.fname,
      last_name: form.lname,
      email: form.email,
      username: form.username,
    };
    this.userAPIService.updateUser(profile)
        .subscribe(response => {
          this.message = {
            type: 'success',
            message: 'Update successful',
          };
        }, err => {
          this.message = {
            typee: 'danger',
            message: `${ err } || An error occured. Please try again`,
          };
        });
  }

}
