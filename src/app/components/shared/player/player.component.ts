import { Component, OnInit, OnDestroy, Input, Output, ViewChild, EventEmitter, ElementRef, ChangeDetectorRef  } from '@angular/core';
import * as moment from 'moment';
import {PlayerService} from './../../../services/player.service';
@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit, OnDestroy {

  private player: ElementRef;

  @ViewChild('player') set content(content: ElementRef) {
    this.player = content;
  }

  private canSeek: EventEmitter<boolean> = new EventEmitter<boolean>();
  private done: boolean;

  public postInfo: any;
  public isPlaying: boolean;
  public progress: number;
  public currentTime: any;
  public duration: any;
  public loading: boolean;
  public playerObj: any;


  constructor(
      private chRef: ChangeDetectorRef,
      private playerService: PlayerService
    ) { }

  ngOnInit() {
    this.getTrack();
    this.getControls();
    this.canSeek.subscribe(flag => {
      this.setStartPosition();
    })
  }

  getControls() {
    this.playerService.getControls().subscribe(data => {
      if(data.hasOwnProperty('pause')) {
        this.togglePlayer();
      }
    })
  }

  ngOnDestroy() {
  	this.progress = 0;
  }

  setStartPosition() {
    this.player.nativeElement.currentTime = 15.5;
  }

  togglePlayer() {
  	const player = this.player.nativeElement;
    if(player.paused) {
  		player.play();
  	} else {
  		player.pause();
  	}
  }


  setCurrentTime() {
    const d = this.player.nativeElement.duration;
    const s = this.postInfo.start/100 * d;
    this.player.nativeElement.currentTime = s;
    this.done = true;
  }

  canplay() {
    if(!this.done) {
      this.setCurrentTime();
    }
  }

  getTrack() {
     this.playerService.getTrack().subscribe(data => {

        this.playerService.setUpdates({loading: true, id: data.id});
        this.progress = 0;
        this.currentTime = '-';
        this.duration = '-';
        this.loading = true;
        this.postInfo = data;
        if(data.type === 'start') {
          this.done = false;
        }

        if(this.done) {
           this.setCurrentTime();
        }
    })
  }



  formatTime(duration) {
		const current_hour = parseInt((duration/3600).toString()) % 24;
		const current_minute = parseInt((duration / 60).toString()) % 60;
		const current_seconds_long = duration % 60;
		const current_seconds = current_seconds_long.toFixed(0);
		const cm: any = (current_minute < 10 ) ? current_minute.toString() : current_minute.toString();
		const cs: any = (current_seconds_long < 10 ) ? '0'+ current_seconds.toString() : current_seconds.toString();
		const current_time = `${cm}:${cs}`;
    if(current_time === 'NaN:NaN') {
      return '00:00';
    }
		return current_time;
	}

  updateMeta() {
  	this.loading = false;
  	const plyer = this.player.nativeElement;
  	var currentTime = plyer.currentTime;
		var duration = plyer.duration;
		const p = (currentTime * 100) / duration;
		if(!isNaN(p) && !plyer.paused){
      this.currentTime = this.formatTime(currentTime);
      this.duration = this.formatTime(duration);
      this.progress = p;
      const data = {playing: true ,'current': this.currentTime, 'duration': this.duration, 'progress': this.progress, 'id': this.postInfo.id };
      this.playerService.setUpdates(data);
    }
  }

}
