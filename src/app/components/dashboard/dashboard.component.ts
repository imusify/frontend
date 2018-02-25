import { ImuConfigService } from './../../services/config.service';
import { UtilService } from './../../services/util.service';
import { PostService } from './../../services/post.service';
import { ChannelService } from './../../services/channel.service';
import { ParentComponent } from './../parent/parent.component';

import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

import { Router } from '@angular/router';
import { ChannelsList } from '../../models/channelsList';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Channel } from '../../models/channel';
import { SET_POSTS_LIST } from '../../reducers/postsList.reducer';
import { PostsList } from '../../models/postsList';
import { Post } from '../../models/post';
import { ChannelsAPIService } from '../../services/api-routes/channels.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent extends ParentComponent implements OnInit {

  loading: boolean;
  posts: any;
  currentChannel: number;
  channel: Channel = new Channel();
  postsList: Observable<PostsList>;
  channelsList: Observable<ChannelsList>;

  defaultUser = './assets/images/profile/default_user.jpg';

  constructor(
    private config: ImuConfigService,
    private util: UtilService,
    private chref: ChangeDetectorRef,
    private postService: PostService,
    private channelService: ChannelService,
    private channelAPIService: ChannelsAPIService,
    private store: Store<any>
  ) {
    super();
  }

  ngOnInit() {

    this.channelsList = this.store.select('channelsListReducer');

    this.postsList = this.store.select('postsListReducer');

    this.currentChannel = 0;

    this.loading = false;

    this.subscribers.channelsListReducer = this.channelsList.subscribe(
      channelsList => {
        this.channel = channelsList.selectedChannel;
        if (channelsList.selectedChannel && channelsList.selectedChannel.id && channelsList.selectedChannel.id !== 0) {
          this.currentChannel = +channelsList.selectedChannel.id;
        }
        this.loading = true;
        if (this.currentChannel !== 0) {
          this.channelAPIService.getChannelPosts(this.currentChannel).subscribe(
            data => {
              this.loading = false;

              const postsList: PostsList = new PostsList();

              const result = data['results'];

              for (const post in result) {
                postsList.posts.push(
                  Object.assign(
                    new Post(), result[post], {}
                  )
                );
              }

              this.store.dispatch({type: SET_POSTS_LIST, payload: postsList});
            }, err => {
              this.loading = false;
              console.log(err);
            }
          );
        } else {
          this.loading = false;
        }
      }
    );
  }
}
