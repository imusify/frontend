import { Component, OnInit } from '@angular/core';
import { ChannelService } from './../../services/channel.service';
import { ApiService } from './../../services/api.service';
import { Store } from '@ngrx/store';
import { SET_CHANNELS_LIST, SET_SELECTED_CHANNEL } from './../../reducers/channelsList.reducer';
import { ChannelsList } from '../../models/channelsList';
import { User } from '../../models/user';
import { Observable } from 'rxjs/Observable';
import { Channel } from '../../models/channel';
import { ParentComponent } from './../../components/parent/parent.component';

@Component({
  selector: 'app-channel-list',
  templateUrl: './channel-list.component.html',
  styleUrls: ['./channel-list.component.scss']
})
export class ChannelListComponent extends ParentComponent implements OnInit {

  channelForm: boolean;
  channels: any;
  selectedChannel: any;
  channelsList: Observable<ChannelsList>;
  user: Observable<User>;

  constructor(
    private channelService: ChannelService,
    private apiService: ApiService,
    private store: Store<any>
  ) {
    super();
  }

  ngOnInit() {

    this.user = this.store.select('userReducer');
    this.channelsList = this.store.select('channelsListReducer');

    this.subscribers.userReducer = this.user.subscribe(
      user => {
        if (user && user.token && user.token !== '' && user.isLogged) {
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
        }
      }
    );
  }

  open(e) {
    e.preventDefault();
    this.channelService.openForm();
  }

  filter(channel: any, e: any) {
    e.preventDefault();
    this.store.dispatch({type: SET_SELECTED_CHANNEL, payload: channel});
  }

}
