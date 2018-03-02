// https://developer.jwplayer.com/jw-player/docs/developer-guide/api/javascript_api_reference/#buffer

import {
  Component,
  EventEmitter,
  Input,
  Output,
  ElementRef,
  AfterViewInit, OnInit
} from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Post } from '../../models/post';
import { ParentComponent } from '../parent/parent.component';
import { SET_PLAY_POST } from '../../reducers/play.reducer';


@Component({
  templateUrl: './floating-player.component.html',
  styleUrls: ['./floating-player.component.scss'],
  selector: 'app-floating-player',
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [   // :enter is alias to 'void => *'
        style({opacity: 0}),
        animate(500, style({opacity: 1}))
      ]),
      transition(':leave', [   // :leave is alias to '* => void'
        animate(500, style({opacity: 0}))
      ])
    ])
  ]
})
export class FloatingPlayerComponent extends ParentComponent implements OnInit {

  observablePost: Observable<Post>;
  post: Post = null;

  constructor(private store: Store<any>) {
    super();
  }

  ngOnInit() {
    this.observablePost = this.store.select('playReducer');

    this.subscribers.postReducer = this.observablePost.subscribe(
      post => {
        console.log('got new post to play ', post);
        this.post = post;
      }
    );
  }

  timeEvent(event: any, post: any) {
    try {
      post.progress = event.position * 100 / event.duration;
    } catch (e) {
      console.log(e);
    }
  }

  close(event: any) {
    event.preventDefault();
    this.store.dispatch({type: SET_PLAY_POST, payload: null});
  }

}
