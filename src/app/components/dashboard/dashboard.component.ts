import { ApiService } from './../../services/api.service';
import { ImuConfigService } from './../../services/config.service';
import { UtilService } from './../../services/util.service';
import { PostService } from './../../services/post.service';
import { ChannelService } from './../../services/channel.service';

import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

import { Router } from '@angular/router';
import { ChannelsList } from '../../models/channelsList';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Channel } from '../../models/channel';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

  public loading: boolean;
  public posts: any;
  public currentChannel: string;
  public channel: Channel = new Channel();
  channelsList: Observable<ChannelsList>;
  subscribers: any = {};

  constructor(
              private api: ApiService,
              private config: ImuConfigService,
              private util: UtilService,
              private chref: ChangeDetectorRef,
              private postService: PostService,
              private channelService: ChannelService,
              private store: Store<any>
            ) {}

  ngOnInit() {

    this.channelsList = this.store.select('channelsListReducer');

    this.currentChannel = 'testing';
    this.loading = false;
    this.postService.getUpdatenow().subscribe(data => {
      if (data) {
        this.getPosts();
      }
    });

    this.subscribers.channelsListReducer = this.channelsList.subscribe(
      channelsList => {
        this.channel = channelsList.selectedChannel;
        if (channelsList.selectedChannel.slug && channelsList.selectedChannel.slug !== '') {
          this.currentChannel = channelsList.selectedChannel.slug;
        }
        this.getPosts();
      }
    );
  }

  getPosts() {
    this.loading = true;
    this.api.get('channel/posts/' + this.currentChannel).subscribe(data => {
        this.loading = false;
        this.posts = data;
    }, err => {
        this.loading = false;
        console.log(err);
    });
  }
}
