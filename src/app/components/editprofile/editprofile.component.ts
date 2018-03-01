import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {PageActionsService} from './../../services/page-actions.service';
import {ImuConfigService} from './../../services/config.service';
import {HttpClient, HttpHeaders, HttpRequest, HttpEventType} from '@angular/common/http';
import {UtilService} from './../../services/util.service';
import {UserAPIService} from '../../services/api-routes/user.service';
import {UploadAPIService} from '../../services/api-routes/upload.service';
import {LinkifyPipe} from './../../pipes/linkify.pipe';


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
  editMode: boolean;

  defaultUser = './assets/images/profile/default_user.jpg';

  constructor(private formBuilder: FormBuilder,
              private pageAction: PageActionsService,
              private configService: ImuConfigService,
              private util: UtilService,
              private userAPIService: UserAPIService,
              private uploadAPIService: UploadAPIService,
              private linkify: LinkifyPipe) {
  }

  ngOnInit() {
    this.isUploading = false;
    this.editMode = false;
    this.getProfile();
  }

  close(e) {
    e.preventDefault();
    this.pageAction.setAction('close_profile');
  }

  editmode() {
    this.editMode = true;
  }

  uploadAvatar(e) {
    this.isUploading = true;
    e.preventDefault();
    const files = e.target.files;
    if (files.length > 0) {
      const f: File = files[0];
      this.uploadAPIService.getUploadURL(f)
        .subscribe(data => {
          const reader = new FileReader();
          reader.onload = (event: any) => {
            this.userAvatar = event.target.result;
          };
          reader.readAsDataURL(f);
          this.uploadAPIService.uploadFile(data.url, f)
            .subscribe(event => {
              this.updateProfile({
                id: this.profile.id,
                image: f.name
              });
              this.isUploading = false;
            }, err => {
              console.log(`Error uploading profile pic`, err);
            });
        });
    }
  }

  getProfile() {
    this.userAPIService.currentUser().subscribe(data => {
      this.profile = data;
      this.userAvatar = this.profile.image_url;
      this.profileForm = this.formBuilder.group({
        id: [this.profile.id],
        fname: [this.profile.first_name, [Validators.required, Validators.minLength(2)]],
        lname: [this.profile.last_name, [Validators.required, Validators.minLength(2)]],
        email: [this.profile.email, [Validators.required, Validators.email]],
        username: [this.profile.username, [Validators.required, Validators.minLength(8)]],
        bio: [this.profile.bio, []]
      });
    }, error => {
    });
  }

  updateProfileFromForm(form) {
    console.log(this.linkify)
    const profile = {
      id: form.id,
      first_name: form.fname,
      last_name: form.lname,
      email: form.email,
      username: form.username,
      bio: form.bio
    };
    this.updateProfile(profile);
  }

  updateProfile(profile) {
    this.profile.bio = profile.bio;
    this.profile.first_name = profile.fname
    this.profile.last_name = profile.lname
    this.userAPIService.updateUser(profile)
      .subscribe(response => {
        this.message = {
          type: 'success',
          message: 'Update successful',
        };
        this.editMode = false;
        setTimeout(() => {
          this.pageAction.setAction('close_profile')
        }, 2000)
        
      }, err => {
        this.message = {
          type: 'danger',
          message: `${ err } || An error occured. Please try again`,
        };
      });
  }

}
