import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpRequest, HttpEventType } from '@angular/common/http';
import { ApiService } from './../../../services/api.service';
import { ImuConfigService } from './../../../services/config.service';
import { UtilService } from './../../../services/util.service';
import { PostService } from './../../../services/post.service';
import { DomSanitizer} from '@angular/platform-browser';

import jsmediatags from 'jsmediatags';
import { CategoriesList } from '../../../models/categoriesList';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { SET_CATEGORIES_LIST } from '../../../reducers/categoriesList.reducer';
import { Category } from '../../../models/category';

@Component({
  selector: 'app-uploadfile',
  templateUrl: './uploadfile.component.html',
  styleUrls: ['./uploadfile.component.scss']
})
export class UploadfileComponent implements OnInit {

  uploadLoading: boolean;
  loading: boolean;
  progress: any;
  postForm: FormGroup;
  message: any;
  categories: any;
  image: any;
  categoriesList: Observable<CategoriesList>;
  @Input() channel: any;
  dropzoneActive: boolean = false;


  constructor(
  	private router: Router,
  	private formBuilder: FormBuilder,
  	private apiService: ApiService,
  	private config: ImuConfigService,
  	private util: UtilService,
  	private postService: PostService,
    private store: Store<any>
  ) { }

  ngOnInit() {
    this.categoriesList = this.store.select('categoriesListReducer');
  }


  showForm() {

    this.apiService.get('category/list').subscribe(data => {
      const categoriesList: CategoriesList = new CategoriesList();

      for (const category in data) {
        categoriesList.categories.push(
          Object.assign(
            new Category(), data[category], {
              status: data[category]['Status'],
              createdAt: data[category]['CreatedAt'],
              updatedAt: data[category]['UpdatedAt'],
              deletedAt: data[category]['DeletedAt'],
              id: data[category]['ID']
            }
          )
        );
      }

      this.store.dispatch({type: SET_CATEGORIES_LIST, payload: categoriesList});

    }, err => {
        console.log(err);
    });

    this.postForm = this.formBuilder.group({
      channel: [this.channel, [Validators.required]],
      upload: [null, [Validators.required]],
      title: [null, [Validators.required, Validators.minLength(5)]],
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

    this.apiService.post('post/new', post).subscribe(data => {
        this.loading = false;
        this.message = {
          type: 'success',
          data: 'Post created successfully!'
        };
        this.postForm = undefined;
        setTimeout(() => {
          this.message = null;
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
  	  this.showForm();
      const formData: FormData = new FormData();
      formData.append('file', f);

      jsmediatags.read(f, {
        onSuccess: (data) => {
          this.postForm.patchValue({
                title: data.tags.title
          });
          const p = data.tags.picture;
          let base64String = '';
          for (let i = 0; i < p.data.length; i++) {
                base64String += String.fromCharCode(p.data[i]);
            }

          this.image = 'data:' + p.format + ';base64,' + btoa(base64String);
        },
        onError: (error) => {
          console.log(error);
        }
      });

      this.apiService
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
