import { ApiService } from './../../services/api.service';
import { ImuConfigService } from './../../services/config.service';
import { UtilService } from './../../services/util.service';
import { PostService } from './../../services/post.service';
import { ChannelService } from './../../services/channel.service';

import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit{

  public loading: boolean;
  public posts: any;
  public currentChannel: string;
  public channel: string;
  constructor(
              private api: ApiService,
              private config: ImuConfigService,
              private util: UtilService,
              private chref: ChangeDetectorRef,
              private postService: PostService,
              private channelService: ChannelService
            ) {}

  ngOnInit() {
    this.currentChannel = 'testing';
    this.loading = false;
    this.postService.getUpdatenow().subscribe(data => {
      if(data) {
        this.getPosts();
      }
    });

    this.channelService.getChannelFilter().subscribe(data => {
      this.channel = data;
      this.currentChannel = data.slug
      this.getPosts()
    })


  }


  getPosts() {
    this.loading = true;

    this.api.get('channel/posts/'+ this.currentChannel).subscribe(data => {
        this.loading = false;
        this.posts = data;
    }, err => {
        this.loading = false;
        console.log(err);
    });
  }
}
