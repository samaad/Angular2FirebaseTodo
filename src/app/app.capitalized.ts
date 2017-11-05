/**
 * Created by Dell on 11/6/2017.
 */
import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'capitalized'
})
export class CapitalizedPipe implements PipeTransform{

  transform(value:any, args:any):any {
    var firstChar = value.slice(0,1)
    value = firstChar.toUpperCase()+value.slice(1,value.length);
    return value;
  }

}
