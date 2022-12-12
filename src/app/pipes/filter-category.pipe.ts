import { Pipe, PipeTransform } from '@angular/core';
import { Category } from '../models/category';

@Pipe({
  name: 'filterCategory',
})
export class FilterCategoryPipe implements PipeTransform {
  transform(value: Category[], filterText: string): Category[] {
    filterText = filterText ? filterText.toLocaleLowerCase() : '';
    return filterText
      ? value.filter((category: Category) =>
          category.name.toLocaleLowerCase().includes(filterText)
        )
      : value;
  }
}
