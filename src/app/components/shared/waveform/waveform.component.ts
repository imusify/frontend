import { ImuConfigService } from './../../../services/config.service';
import { Component, OnInit,ChangeDetectorRef, ElementRef, Input, AfterViewInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { PlayerService } from './../../../services/player.service';
@Component({
  selector: 'app-waveform',
  templateUrl: './waveform.component.html',
  styleUrls: ['./waveform.component.css']
})
export class WaveformComponent implements OnInit, AfterViewInit {

  private colors: any;

  @ViewChild('waveform') waveForm: ElementRef;

  @Input() post: any;
  @Input() updates: any;

  @Output() postInfo: EventEmitter<any> = new EventEmitter<any>()

  progress: number;
  wavesurfer: any;
  playing: boolean;
  paused: boolean;
  loading: boolean;
  update: any;
  startPoint: number;
  upvotecounter: number;
  downvotecounter: number;

  constructor(
   private config: ImuConfigService,
   private playerService: PlayerService) { }

  ngOnInit() {
    this.upvotecounter = 0;
    this.downvotecounter = 0;
    this.progress = 0;
    this.playing = false;
    this.startPoint = 0;
    this.loading = false;
  }

  ngAfterViewInit() {
    setTimeout(_ => {
      this.drawWaveform()
      this.updateProgress();
    });
  }

  updateProgress() {
    this.playerService.getUpdates().subscribe(data => {
      //
      if(data.id === this.post.post_id){
          if(data.hasOwnProperty('loading')) {
            this.playing = false;
            this.loading = true;
          } else {
            this.progress = data.progress
            this.playing = data.playing;
            this.update = data;
            this.loading = false;
          }
      } else {
          this.progress = 0;
          this.playing = false;
          this.update = null;
          this.loading = false;
      }
    })
  }


  pause(event) {
    event.preventDefault();
    this.playing = false;
    this.paused = true;
    this.playerService.setControls({pause:true});

  }

  upvote(event) {
    event.preventDefault();
    this.upvotecounter++;
  }

  downvote(event) {
    event.preventDefault();
    this.downvotecounter--;
  }


  play(event) {
    event.preventDefault();
    if(this.paused) {
      this.playerService.setControls({pause:false});
    } else {
      const type =  this.playing ? 'move' : 'start';
      const url = this.config.getBakend('post/play/' + this.post.file);
      const info = {
        track: url,
        id: this.post.post_id,
        title: this.post.title,
        start: this.startPoint,
        type: type
      }
      this.playerService.setTrack(info);
    }

  }

  resetPosition(event){
    this.progress = 0;
    this.startPoint = 0;
  }

  getPlayingPosition(event) {
    const r = this.waveForm.nativeElement.getBoundingClientRect().width
    const p = (event.offsetX * 100) / r;
    this.startPoint = p;
    this.progress = p;
  }

  drawWaveform() {
      try {
        const buffer = JSON.parse(this.post.waveform)
        const width = this.waveForm.nativeElement.parentElement.clientWidth;
        const height = 40;
        var canvas = this.waveForm.nativeElement;
        canvas.width = width;
        canvas.height = height;
        var context = canvas.getContext("2d");
        var halfHeight = Math.floor(height / 2);
        var middleY = halfHeight;
        context.fillStyle = '#212122';
        context.beginPath();
        let x = 0, v;
        for ( x = 1; x < width; x++ ) {
          v = buffer[Math.round(x / width * buffer.length)] * halfHeight;
          context.fillRect(x, 0, 1, middleY - v);
          context.fillRect(x, middleY + v, 1, height);
        }
        context.fill();
    } catch(e) {
      console.log(e)
    }
  }

}
