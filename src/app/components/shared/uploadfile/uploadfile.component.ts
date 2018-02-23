import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpEventType } from '@angular/common/http';
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
import { UploadAPIService } from '../../../services/api-routes/upload.service';
import { PostAPIService } from '../../../services/api-routes/posts.service';
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
  title: any;
  titleURL: any;
  image: any;
  categoriesList: Observable<CategoriesList>;
  @Input() channel: any;
  dropzoneActive: boolean = false;


  constructor(
  	private router: Router,
  	private formBuilder: FormBuilder,
  	private config: ImuConfigService,
  	private util: UtilService,
  	private postService: PostService,
    private postAPIService: PostAPIService,
    private uploadAPIService: UploadAPIService,
    private store: Store<any>
  ) { }

  ngOnInit() {
    this.categoriesList = this.store.select('categoriesListReducer');
  }

  showForm() {
      this.postAPIService.getPostCategories()
          .subscribe(data => {
            const categoriesList: CategoriesList = new CategoriesList();
            for (const category in data['results']) {
              categoriesList.categories.push(
                Object.assign(
                  new Category(), data['results'][category], {
                    id: data['results'][category]['id'],
                    name: data['results'][category]['name'],
                    description: data['results'][category]['description'],
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
      title: [null, [Validators.required, Validators.minLength(5)]],
      description: [null, [ Validators.maxLength(160)]],
      category: [null, [Validators.required]],
    });
  }

  savePost(form: FormGroup) {
    this.loading = true;
    const post = {
      title: form.value.title,
      categories: form.value.category.map((category) => {return category}),
      description: form.value.description,
      channel: form.value.channel,
      attachment: this.titleURL
    };

    this.postAPIService.createPost(this.channel, post)
      .finally(() => {
        this.loading = false;
      })
      .subscribe(data => {
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
  	  this.uploadLoading = false;
  	  this.showForm();
      let titleURL: any;
      let formData: FormData = new FormData();
      formData.append('file', f);
      jsmediatags.read(f, {
        onSuccess: (data) => {
          this.title = data.tags.title;
          this.uploadAPIService.getFilename(this.title)
              .subscribe(response => {
                this.titleURL = response.url;
                 this.uploadAPIService.uploadFile(response.url, formData)
                    .finally(() => {
                      this.uploadLoading = false;
                    })
                    .subscribe(
                      event  => {
                        if (event.type === HttpEventType.UploadProgress) {
                          const progress = Math.floor((event.loaded * 100) / event.total);
                          const current = this.util.toMB(event.loaded);
                          const total = this.util.toMB(event.total);
                          this.progress =  {'progress': progress, 'current': current, 'total': total};
                        } else if (event.type === HttpEventType.Response) {
                          this.postForm.patchValue({
                            upload: event.body['response'].upload
                          });
                        }
                      },
                      err => {
                        if (err.status === 401) {
                            this.router.navigateByUrl('/signin');
                        } else if(err.status === 0) {
                          this.message = {
                            type: 'danger',
                            data: 'Upload failed. Please try again'
                          };
                        }
                      }
                  );
              })
              this.postForm.patchValue({
                    title: this.title
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
  }

  upload(e: any) {

    const files = e.target.files;
    if (files.length > 0) {
	  const f: File = files[0];
      this.uploadFile(f);
    }
  }
}
