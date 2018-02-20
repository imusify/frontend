import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'underscore';

@Pipe({
  name: 'geners'
})
export class GenersPipe implements PipeTransform {

  transform(value: any, args?: any): Array<Object> {
  	if (!_.isEmpty(value)) {
  		try {
  			const p = JSON.parse('[' + value + ']');
  			return p;
  		} catch (err) {
  			return [];
  		}
  	}
    return [];
  }

}
