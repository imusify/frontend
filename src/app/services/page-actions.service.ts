import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class PageActionsService {

  private pageEvents: EventEmitter<any> = new EventEmitter<any>()

  constructor() { }

  setAction( action ){
  	this.pageEvents.emit(action);
  }

  getEmitter(): EventEmitter<any> {
  	return this.pageEvents;
  }

}
