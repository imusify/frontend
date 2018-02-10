import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';

@Pipe({
  name: 'safe'
})
export class SafePipe implements PipeTransform {

  constructor(
    private sanitizer: DomSanitizer
  ) {}

  transform(src: any): any {
    return this.sanitizer.bypassSecurityTrustResourceUrl(src);
  }

}
