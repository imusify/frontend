import { Component, OnInit } from '@angular/core';
import { ChannelService } from './../../services/channel.service';
import { Store } from '@ngrx/store';
import {GENERAL_CHANNEL, SET_CHANNELS_LIST, SET_SELECTED_CHANNEL} from './../../reducers/channelsList.reducer';
import { ChannelsList } from '../../models/channelsList';
import { User } from '../../models/user';
import { Observable } from 'rxjs/Observable';
import { Channel } from '../../models/channel';
import { ParentComponent } from './../../components/parent/parent.component';
import { ChannelsAPIService } from '../../services/api-routes/channels.service';

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
    private store: Store<any>,
    private channelAPIService: ChannelsAPIService
  ) {
    super();
  }

  ngOnInit() {

    this.user = this.store.select('userReducer');
    this.channelsList = this.store.select('channelsListReducer');

    this.subscribers.userReducer = this.user.subscribe(
      user => {
        if (user) {
          this.channelAPIService.getChannels().subscribe(
            data => {
              const channelsList: ChannelsList = new ChannelsList();
              channelsList.channels.push(GENERAL_CHANNEL);
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
