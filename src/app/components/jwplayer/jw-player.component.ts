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
      width: this.width
    });
    this.handleEventsFor(this.player);
  }

  public handleEventsFor = (player: any) => {
    this.onBufferChange = player.onBufferChange;
    this.onBuffer = player.onBuffer;
    this.onComplete = player.onComplete;
    this.onError = player.onError;
    this.onFullScreen = player.onFullScreen;
    this.onPlay = player.onPlay;
    this.onStart = player.onStart;
  }

  public onComplete = (options: {}) => this.complete.emit(options);

  public onError = () => this.error.emit();

  public onBufferChange = (options: {
    duration: number,
    bufferPercent: number,
    position: number,
    metadata?: number
  }) => this.bufferChange.emit(options)

  public onBuffer = (options: {
    oldState: string,
    newState: string,
    reason: string
  }) => this.buffer.emit()

  public onStart = (options: {
    oldState: string,
    newState: string,
    reason: string
  }) => this.buffer.emit()

  public onFullScreen = (options: {
    oldState: string,
    newState: string,
    reason: string
  }) => this.buffer.emit()

  public onPlay = (options: {
  }) => this.play.emit()
}
