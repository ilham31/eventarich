import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'breaklinePipe',
})
export class BreaklinePipe implements PipeTransform {

  transform(value: string) {  
    value.replace(/(?:\r\n|\r|\n)/g, "<br />");
    console.log(value);
    return value;
  }
}
