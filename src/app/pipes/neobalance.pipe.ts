import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'neobalance'
})
export class NeobalancePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!value) {
      return '';
    }
    return (value / 100000000).toFixed(2);
  }

}
