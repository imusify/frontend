import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChannelService } from './../../services/channel.service';
import { ApiService } from './../../services/api.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Channel } from '../../models/channel';
import { ChannelsList } from '../../models/channelsList';
import { SET_CHANNELS_LIST } from '../../reducers/channelsList.reducer';

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
  channelForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private channelService: ChannelService,
    private apiService: ApiService,
    private store: Store<any>
  ) { }

  ngOnInit() {
    this.showForm = false;
    this.channelService.getForm().subscribe((data) => {
      this.done = false;
      this.showForm = data;
    })
    this.channelForm = this.formBuilder.group({
      name : [ null, Validators.required ],
      purpose: [null]
    });
  }

  createChannel(event) {
    event.preventDefault();
    this.loading = true;
    const channel = {
      name: this.channelForm.value.name,
      purpose: this.channelForm.value.purpose,
      members: []
    }

    this.apiService.post('channels/', channel).subscribe(
      data => {
        this.loading = false;
        this.done = true;
        setTimeout(() => {
          this.channelService.closeForm();

          this.apiService.get('channels/').subscribe(
            data => {

              const channelsList: ChannelsList = new ChannelsList();

              const result = data['results'];

              for (const channel in result) {
                channelsList.channels.push(
                  Object.assign(
                    new Channel(),  result[channel], {
                      userId: result[channel]['owner']
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
