import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
})

export class SearchPipe implements PipeTransform {
  transform(items: any[], queryText: string): any[] {
    if(!items) return [];
    if(!queryText) return items;
    queryText = queryText.toLowerCase();
    return items.filter( it => {
      return it.title.toLowerCase().includes(queryText);
    });
  }
}
