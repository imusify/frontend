import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { ChannelService } from './../../services/channel.service';
import { Store } from '@ngrx/store';
import { GENERAL_CHANNEL, SET_CHANNELS_LIST } from './../../reducers/channelsList.reducer';
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

  channels: any;
  selectedChannel: any;
  channelsList: ChannelsList = new ChannelsList();
  user: Observable<User>;

  constructor(
    private channelService: ChannelService,
    private store: Store<any>,
    private chref: ChangeDetectorRef,
    private channelAPIService: ChannelsAPIService
  ) {
    super();
  }

  ngOnInit() {

    this.user = this.store.select('userReducer');
    this.store.select('channelsListReducer').subscribe(
      (data) => {
        this.channelsList = data;
        this.chref.detectChanges();
      }
    );

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

}
