// https://developer.jwplayer.com/jw-player/docs/developer-guide/api/javascript_api_reference/#buffer

import {
  Component,
  EventEmitter,
  Input,
  Output,
  ElementRef,
  OnInit
} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {Post} from '../../models/post';
import {ParentComponent} from '../parent/parent.component';

declare var jwplayer: any;

@Component({
  templateUrl: './jw-player.component.html',
  styleUrls: ['./jw-player.component.scss'],
  selector: 'app-jw-player'
})
export class JwPlayerComponent extends ParentComponent implements OnInit {

  constructor(private _elementRef: ElementRef,
              private store: Store<any>) {
    super();
  }

  @Input() public height: string;

  @Input() public width: string;

  @Output() public bufferChange: EventEmitter<any> = new EventEmitter();

  @Output() public complete: EventEmitter<any> = new EventEmitter();

  @Output() public buffer: EventEmitter<any> = new EventEmitter();

  @Output() public error: EventEmitter<any> = new EventEmitter<any>();

  @Output() public play: EventEmitter<any> = new EventEmitter<any>();

  @Output() public time: EventEmitter<any> = new EventEmitter<any>();

  @Output() public start: EventEmitter<any> = new EventEmitter<any>();

  @Output() public fullscreen: EventEmitter<any> = new EventEmitter<any>();

  private _player: any = null;
  observablePost: Observable<any>;
  post: any = null;

  public get player(): any {
    this._player = this._player || jwplayer(this._elementRef.nativeElement);
    return this._player;
  }

  ngOnInit() {
    this.observablePost = this.store.select('playReducer');

    this.subscribers.postReducer = this.observablePost.subscribe(
      post => {
        if (this.post) {
          // clean up any old data
          this.post.progress = 0;
        }
        this.post = post;
        if (this.post) {
          this.player.setup({
            file: post.attachment_url,
            title: post.title,
            height: this.height,
            width: this.width ? this.width : '100%'
          });
          this.handleEventsFor(this.player);
          this.player.play();
        } else {
          if (this._player) {
            // destroy old player
            this._player.remove();
          }
        }
      }
    );
  }

  public handleEventsFor = (player: any) => {
    player.on('bufferChange', options => {
      this.onBufferChange(options);
    });
    player.on('buffer', options => {
      this.onBuffer(options);
    });
    player.on('complete', options => {
      this.onComplete(options);
    });
    player.on('error', options => {
      this.onError();
    });
    player.on('fullscreen', options => {
      this.onFullScreen(options);
    });
    player.on('play', options => {
      this.onPlay(options);
    });
    player.on('time', options => {
      this.onTime(options);
    });
    player.on('start', options => {
      this.onStart(options);
    });
  }

  public onComplete = (options: {}) => this.complete.emit(options);

  public onError = () => this.error.emit();

  public onBufferChange = (options: {
    duration: number,
    bufferPercent: number,
    position: number,
    metadata?: number
  }) => this.bufferChange.emit(options)

  public onTime = (options: {
    duration: number,
    position: number,
    viewable: number
  }) => this.time.emit(options)

  public onBuffer = (options: {
    oldState: string,
    newState: string,
    reason: string
  }) => this.buffer.emit(options)

  public onStart = (options: {
    oldState: string,
    newState: string,
    reason: string
  }) => this.buffer.emit(options)

  public onFullScreen = (options: {
    oldState: string,
    newState: string,
    reason: string
  }) => this.buffer.emit(options)

  public onPlay = (options: {
    oldState: string,
    viewable: number
  }) => this.play.emit(options)
}
