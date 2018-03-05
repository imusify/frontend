import { ImuConfigService } from './../../services/config.service';
import { UtilService } from './../../services/util.service';
import { PostService } from './../../services/post.service';
import { ChannelService } from './../../services/channel.service';
import { ParentComponent } from './../parent/parent.component';
import { trigger, style, animate, transition } from '@angular/animations';

import {Component, OnInit, ChangeDetectorRef, DoCheck, AfterViewChecked} from '@angular/core';

import {ActivatedRoute, Router} from '@angular/router';
import { ChannelsList } from '../../models/channelsList';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Channel } from '../../models/channel';
import { APPEND_TO_POSTS_LIST, SET_POSTS_LIST } from '../../reducers/postsList.reducer';
import { PostsList } from '../../models/postsList';
import { Post } from '../../models/post';
import { ChannelsAPIService } from '../../services/api-routes/channels.service';
import { OPEN_USER_DETAILS_FORM } from '../../reducers/openUserDetailsForm.reducer';
import { APIHandlerService } from '../../services/api-handler.service';
import { SET_PLAY_POST } from '../../reducers/play.reducer';
import { PostAPIService } from '../../services/api-routes/posts.service';
import { SET_SELECTED_CHANNEL_BY_ID } from '../../reducers/channelsList.reducer';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [   // :enter is alias to 'void => *'
        style({opacity: 0}),
        animate(140, style({opacity: 1}))
      ]),
      transition(':leave', [   // :leave is alias to '* => void'
        animate(70, style({opacity: 0}))
      ])
    ])
  ]
})

export class DashboardComponent extends ParentComponent implements OnInit, AfterViewChecked {

  loading: boolean;
  posts: any;
  currentChannel: number = -1;
  channel: Channel = new Channel();
  postsListObservable: Observable<PostsList>;
  channelsList: Observable<ChannelsList>;

  nextPage: string = null;

  defaultUser = './assets/images/profile/default_user.jpg';

  constructor(
    private config: ImuConfigService,
    private util: UtilService,
    private chref: ChangeDetectorRef,
    private postService: PostService,
    private channelService: ChannelService,
    private channelAPIService: ChannelsAPIService,
    private postsApiService: PostAPIService,
    private apiHandlerService: APIHandlerService,
    private store: Store<any>,
    private route: ActivatedRoute,
  ) {
    super();
  }

  ngOnInit() {
    this.channelsList = this.store.select('channelsListReducer');
    this.postsListObservable = this.store.select('postsListReducer');

    this.route.params
      .filter(params => params.id)
      .subscribe(params => {
        this.store.dispatch({type: SET_SELECTED_CHANNEL_BY_ID, payload: params.id});
        this.chref.detectChanges();
      });


    this.loading = false;

    this.subscribers.channelsListReducer = this.channelsList.subscribe(
      channelsList => {
        this.channel = channelsList.selectedChannel;
        if (channelsList.selectedChannel && channelsList.selectedChannel.id !== -1) {
          if (this.currentChannel === channelsList.selectedChannel.id) {
            return;
          }
          this.currentChannel = +channelsList.selectedChannel.id;
        }
        this.nextPage = null;
        this.selectChannel(this.currentChannel);
      }
    );
  }

  ngAfterViewChecked() {
    this.chref.detectChanges();
  }

  selectChannel(channelId) {
    if (channelId > 0) {
      this.loading = true;
      this.channelAPIService.getChannelPosts(channelId).subscribe(
        data => {
          this.loading = false;

          const postsList: PostsList = new PostsList();
          const result = data['results'];
          this.nextPage = data['next'];
          for (const post in result) {
            postsList.posts.push(
              this.getPostObject(result, post)
            );
          }
          this.store.dispatch({type: SET_POSTS_LIST, payload: postsList});
        }, err => {
          this.loading = false;
        }
      );
    } else {
      // load all posts into general channel
      this.loading = true;
      this.postsApiService.getAllPosts().subscribe(
        data => {
          this.loading = false;

          const postsList: PostsList = new PostsList();
          const result = data['results'];
          this.nextPage = data['next'];
          for (const post in result) {
            postsList.posts.push(
              this.getPostObject(result, post)
            );
          }
          this.store.dispatch({type: SET_POSTS_LIST, payload: postsList});
        }, err => {
          this.loading = false;
        }
      );
    }
  }

  getPostObject(result, post) {
    return Object.assign(
      new Post(), result[post], {}
    );
  }

  displayUser(e, user) {
    e.preventDefault();
    this.store.dispatch({type: OPEN_USER_DETAILS_FORM, payload: user});
  }

  onScroll() {
    // load more data if it exists
    if (!this.nextPage) {
      return;
    }

    this.apiHandlerService.getRaw(this.nextPage).subscribe(
      data => {
        const postsList: PostsList = new PostsList();
        const result = data['results'];
        this.nextPage = data['next'];
        for (const post in result) {
          postsList.posts.push(
            this.getPostObject(result, post)
          );
        }

        this.store.dispatch({type: APPEND_TO_POSTS_LIST, payload: postsList});
      }, err => {
        console.log('Failed to fetch next posts ', err);
      }
    );

  }

  floatPlay(event: any, post: any) {
    event.preventDefault();
    this.store.dispatch({type: SET_PLAY_POST, payload: post});
  }
}
