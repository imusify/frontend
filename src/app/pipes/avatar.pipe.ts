import { Pipe, PipeTransform } from '@angular/core';
import { ImuConfigService } from './../services/config.service';

@Pipe({
  name: 'avatar'
})
export class AvatarPipe implements PipeTransform {

  constructor(
    private configService: ImuConfigService
  ) {}

  transform(value: any, args?: any): any {
    return this.configService.getUserAvatar(value)
  }
}
