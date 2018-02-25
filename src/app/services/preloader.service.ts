import {Injectable} from '@angular/core';

@Injectable()
export class PreloaderService {

  private _selector: string = 'preloader';
  private _element: HTMLElement;

  constructor() {
    this._element = document.getElementById(this._selector);
  }

  public show() {
    this._element.style['display'] = 'block';
  }

  public hide(delay: number = 0) {
    setTimeout(() => {
      this._element.style['display'] = 'none';
    }, delay);
  }
}
