import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

/**
 * Display the string element with the first letter of each word in uppercase
 * Usage:
 *  value | inTitleCase
 * Exemple:
 *  {{ 'my title' | inTitleCase}}
 *  Display: My Title
 */

@Pipe({
  name: 'inTitleCase'
})
export class InTitleCasePipe implements PipeTransform {

  transform(value: string): string {
    let words:Array<String> = _.split(value, ' ');
    let txt:string = '';
    for(let word of words) {
      txt += _.upperFirst(word) + ' ';
    }
    return txt;
  }

}
