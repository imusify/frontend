// https://developer.jwplayer.com/jw-player/docs/developer-guide/api/javascript_api_reference/#buffer

import {
  Component,
  EventEmitter,
  Input,
  Output,
  ElementRef,
  AfterViewInit
} from '@angular/core';

declare var jwplayer: any;

@Component({
  templateUrl: './jw-player.component.html',
  styleUrls: ['./jw-player.component.css'],
  selector: 'app-jw-player'
})
export class JwPlayerComponent implements AfterViewInit {
  constructor(private _elementRef: ElementRef) { }

  @Input() public title: string;

  @Input() public file: string;

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

  public get player(): any {
    this._player = this._player || jwplayer(this._elementRef.nativeElement);
    return this._player;
  }

  ngAfterViewInit() {
    this.player.setup({
      file: this.file,
      height: this.height,
      width: this.width ? this.width : '100%'
    });
    this.handleEventsFor(this.player);
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
