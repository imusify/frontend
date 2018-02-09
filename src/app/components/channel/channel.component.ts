import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChannelService } from './../../services/channel.service';
import { ApiService } from './../../services/api.service';
import { Category } from '../../models/category';
import { SET_CATEGORIES_LIST } from '../../reducers/categoriesList.reducer';
import { CategoriesList } from '../../models/categoriesList';
import { Store } from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {Channel} from '../../models/channel';
import {ChannelsList} from '../../models/channelsList';
import {SET_CHANNELS_LIST} from '../../reducers/channelsList.reducer';

@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.scss']
})
export class ChannelComponent implements OnInit {

  nameError: string;
  loading: boolean;
  done: boolean;
  showForm: boolean;
  categories: any;
  categoriesList: Observable<CategoriesList>;
  channelForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private channelService: ChannelService,
    private apiService: ApiService,
    private store: Store<any>
  ) { }

  ngOnInit() {

    this.categoriesList = this.store.select('categoriesListReducer');

    this.showForm = false;

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


    this.channelService.getForm().subscribe((data) => {
      this.done = false;
      this.showForm = data;
      console.log(data);
    })
    this.channelForm = this.formBuilder.group({
      name : [ null, Validators.required ],
      slug: [null, Validators.required],
      description: [null],
      categories: [null, Validators.required]
    });
  }

  createChannel(event) {
    event.preventDefault();
    this.loading = true;
    const channel = {
      name: this.channelForm.value.name,
      slug: this.channelForm.value.name,
      description: this.channelForm.value.description,
      categories: this.channelForm.value.categories
    }

    this.apiService.post('channel/new', channel).subscribe(
      data => {
        this.loading = false;
        this.done = true;
        setTimeout(() => {
          this.channelService.closeForm();

          this.apiService.get('channel/list').subscribe(
            data => {

              const channelsList: ChannelsList = new ChannelsList();

              for (const channel in data) {
                channelsList.channels.push(
                  Object.assign(
                    new Channel(),  data[channel], {
                      userId: data[channel]['user_id'],
                      createdAt: data[channel]['CreatedAt'],
                      updatedAt: data[channel]['UpdatedAt'],
                      deletedAt: data[channel]['DeletedAt']
                    }
                  )
                );
              }

              channelsList.selectedChannel = channelsList.channels[0];

              this.store.dispatch({type: SET_CHANNELS_LIST, payload: channelsList});
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
    this.showForm = false;
  }
}
