import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class PostService {

  updatenow: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  setUpdatenow(status: boolean) {
  	this.updatenow.emit(status);
  }

  getUpdatenow(): EventEmitter<boolean> {
  	return this.updatenow;
  }
}
