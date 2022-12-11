import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from 'src/app/models/heroes';

@Pipe({ name: 'appFilter' })
export class FilterPipe implements PipeTransform {
  /**
   * Pipe filters the list of elements based on the search text provided
   *
   * @param items list of elements to search in
   * @param searchText search string
   * @returns list of elements filtered by search text or []
   */
  transform(items: Heroe[], searchText: string): Heroe[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();

    return items.filter(it => {
      return it.hero.toLocaleLowerCase().includes(searchText);
    });
  }
}
