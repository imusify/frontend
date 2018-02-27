import { ImuConfigService } from './../../../services/config.service';
import { Component, OnInit, ChangeDetectorRef, ElementRef, Input, AfterViewInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { PlayerService } from './../../../services/player.service';
@Component({
  selector: 'app-waveform',
  templateUrl: './waveform.component.html',
  styleUrls: ['./waveform.component.scss']
})
export class WaveformComponent implements OnInit, AfterViewInit {

  private colors: any;

  @ViewChild('waveform') waveForm: ElementRef;

  @Input() post: any;
  @Input() updates: any;

  @Output() seek: EventEmitter<any> = new EventEmitter<any>();

  playing: boolean;
  paused: boolean;
  loading: boolean;
  update: any;
  startPoint: number;
  upvotecounter: number;
  downvotecounter: number;

  constructor(
   private config: ImuConfigService,
   private playerService: PlayerService
  ) { }

  ngOnInit() {
    this.upvotecounter = 0;
    this.downvotecounter = 0;
    this.post.progress = 0;
    this.playing = false;
    this.startPoint = 0;
    this.loading = false;
  }

  ngAfterViewInit() {
    this.drawWaveform();
  }

  pause(event) {
    event.preventDefault();
    this.playing = false;
    this.paused = true;
    this.playerService.setControls({pause: true});

  }

  upvote(event) {
    event.preventDefault();
    this.upvotecounter++;
  }

  downvote(event) {
    event.preventDefault();
    this.downvotecounter--;
  }


  seekEvent(event) {
    const data = {
      startPoint: this.startPoint
    };
    this.seek.emit(data);
  }

  resetPosition(event) {
    this.post.progress = 0;
    this.startPoint = 0;
  }

  getPlayingPosition(event) {
    const r = this.waveForm.nativeElement.getBoundingClientRect().width;
    const p = (event.offsetX * 100) / r;
    this.startPoint = p;
    // this.post.progress = p;
  }

  drawWaveform() {
      if (!this.post.waveform) {
        return;
      }
      try {
        const jsonWaveForm = JSON.parse(this.post.waveform);
        const buffer = jsonWaveForm['points'];
        const width = this.waveForm.nativeElement.parentElement.clientWidth;
        const height = 40;
        const canvas = this.waveForm.nativeElement;
        canvas.width = width;
        canvas.height = height;
        const context = canvas.getContext('2d');
        const halfHeight = Math.floor(height / 2);
        const middleY = halfHeight;
        context.fillStyle = '#212122';
        context.beginPath();
        let x = 0, v;
        for ( x = 1; x < width; x++ ) {
          v = buffer[Math.round(x / width * buffer.length)] * halfHeight;
          context.fillRect(x, 0, 1, middleY - v);
          context.fillRect(x, middleY + v, 1, height);
        }
        context.fill();
    } catch (e) {
      console.log(e);
    }
  }

}
