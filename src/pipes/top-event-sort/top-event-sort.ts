import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'topEventSort',
})
export class TopEventSortPipe implements PipeTransform {

  transform(value: Array<string>):any {
    value.sort(
      (a : any, b : any) => {
        let likeA = a.likes;
        let likeB = b.likes;
        if(likeA > likeB) {
          return -1;
        } else if(likeA < likeB) {
          return 1;
        } else {
          return 0;
        }
    });
    return value;
  }
}
