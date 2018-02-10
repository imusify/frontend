import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class PlayerService {

  updates: EventEmitter<any> = new EventEmitter<any>();
  track: EventEmitter<any> = new EventEmitter<any>();
  controls: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  setUpdates(data: any) {
  	this.updates.emit(data);
  }

  getUpdates(): EventEmitter<any> {
  	return this.updates;
  }

  setTrack(data: any) {
  	this.track.emit(data);
  }

  getTrack(): EventEmitter<any> {
  	return this.track;
  }

  setControls(data: any) {
  	this.controls.emit(data);
  }

  getControls(): EventEmitter<any> {
  	return this.controls;
  }
}
