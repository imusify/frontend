import { Pipe, PipeTransform } from '@angular/core';
import linkifyStr  from 'linkifyjs/string'


@Pipe({name:'linkify'})
export class LinkifyPipe implements PipeTransform {
    transform(str: string): string {
        console.log(linkifyStr(str))
        return str ? linkifyStr(str): str;
    }
}