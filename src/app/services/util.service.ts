import { Injectable } from '@angular/core';

@Injectable()
export class UtilService {

  constructor() { }

  toMB(bytes) {
    const kb = bytes / 1024;
    const mb = kb / 1024;
    return mb.toFixed(2);
  }
}
