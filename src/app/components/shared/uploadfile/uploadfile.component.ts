import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpRequest, HttpEventType } from '@angular/common/http';
import { ApiService } from './../../../services/api.service';
import { ImuConfigService } from './../../../services/config.service';
import { UtilService } from './../../../services/util.service';
import { PostService } from './../../../services/post.service';

@Component({
  selector: 'app-uploadfile',
  templateUrl: './uploadfile.component.html',
  styleUrls: ['./uploadfile.component.css']
})
export class UploadfileComponent implements OnInit {

  public uploadLoading: boolean;
  public loading: boolean;
  public progress: any;
  public postForm: FormGroup;
  public message: any;
  public categories: any;

  @Input() channel: any;

  dropzoneActive: boolean = false;

  constructor(
  	private router: Router, 
  	private formBuilder: FormBuilder,
  	private api: ApiService, 
  	private config: ImuConfigService, 
  	private util: UtilService,
  	private postService: PostService
  ) { }

  ngOnInit() {
  	//this.showForm('',0)
  }


  showForm(title= '', upload) {
    title = title.replace(/\.[^/.]+$/, '');
    this.api.get('category/list').subscribe(data => {
      //console.log(data);
      this.categories = data;
    }, err => {
      console.log(err);
    });

    this.postForm = this.formBuilder.group({
      channel: [this.channel, [Validators.required]],
      upload: [upload, [Validators.required]],
      title: [title, [Validators.required, Validators.minLength(5)]],
      description: [null, [ Validators.maxLength(160)]],
      category: [null, [Validators.required]]
    });
  }

  savePost(form: FormGroup) {
    this.loading = true;
    const post = {
      title: form.value.title,
      categories: form.value.category,
      description: form.value.description,
      upload_id: form.value.upload,
      channel: form.value.channel
    };
    
    this.api.post('post/new', post).subscribe(data => {
        this.loading = false;
        this.message = {
          type: 'success',
          data: 'Post created successfully!'
        };
        this.postForm = undefined;
        setTimeout(() => {
          this.message = null
        }, 1000);
        this.postService.setUpdatenow(true);
    }, err => {
        this.loading = false;
        if (err.status === 409) {
          this.message = {
            type: 'danger',
            data: 'Please change the post title. Its already associated with the another post!'
          };
        } else {
          this.message = {
            type: 'danger',
            data: 'Please try again later!'
          };
        }
    });
  }

  dropzoneState($event: boolean) {
    this.dropzoneActive = $event;
  }

  handleDrop(files: any) {
     
     if (files.length > 0) {
     	const f: File = files[0];
     	this.uploadFile(f);
 	 }
  }

  uploadFile(f: File) {  	  
  	  this.uploadLoading = true;
  	  this.showForm(f.name, null);
      const formData: FormData = new FormData();
      formData.append('file', f);

      this.api
      	.request('post/upload', formData)
        .subscribe(
          event  => {
            if (event.type === HttpEventType.UploadProgress) {
              const progress = Math.floor((event.loaded * 100) / event.total);
              const current = this.util.toMB(event.loaded);
              const total = this.util.toMB(event.total);
              this.progress =  {'progress': progress, 'current': current, 'total': total};

            } else if (event.type === HttpEventType.Response) {
              this.uploadLoading = false;
              this.postForm.patchValue({
				  upload: event.body['response'].upload
			  });           
            }
          },
          err => {
            this.uploadLoading = false;
            console.log(err);
            if (err.status === 401) {
                this.router.navigateByUrl('/signin');
            }
          }
    	);
  }

  upload(e: any) {    
    
    const files = e.target.files;
    if (files.length > 0) {    
	  const f: File = files[0];
      this.uploadFile(f);
    }
  }
}
