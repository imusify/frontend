import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class ChannelService {

  channelForm: EventEmitter<boolean> = new EventEmitter<boolean>();
  channelList: EventEmitter<boolean> = new EventEmitter<boolean>();
  filterList: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  openForm() {
  	this.channelForm.emit(true);
  }

  closeForm() {
  	this.channelForm.emit(false);
  }

  getForm(): EventEmitter<boolean> {
  	return this.channelForm;
  }

  updateList() {
    this.channelList.emit(true);
  }

  getList(): EventEmitter<boolean> {
    return this.channelList;
  }
}
