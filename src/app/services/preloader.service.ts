import {Injectable} from '@angular/core';

@Injectable()
export class PreloaderService {

  private _selector: string = 'preloader';
  private _element: HTMLElement;

  constructor() {
    this._element = document.getElementById(this._selector);
    console.log(`Hello World`, this._element);
  }

  public show() {
    this._element.style['display'] = 'block';
  }

  public hide() {
      this._element.style['display'] = 'none';
  }
}
