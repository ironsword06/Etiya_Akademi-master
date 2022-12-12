import { Pipe, PipeTransform } from '@angular/core';

import { FilterProduct } from '../models/filter-products';
import { Product } from './../models/product';

@Pipe({
  name: 'filterProduct',
})
export class FilterProductPipe implements PipeTransform {
  transform(products: Product[], filter: FilterProduct): Product[] {
    debugger;
    let filteredProducts = products;

    filter.name = filter.name ? filter.name.toLocaleLowerCase() : '';
    filter.categoryId = filter.categoryId ? filter.categoryId : undefined;
    filter.supplierId = filter.supplierId ? filter.supplierId : undefined;
    filter.minPrice = filter.minPrice ? filter.minPrice : 0;
    filter.maxPrice = filter.maxPrice ? filter.maxPrice : Number.MAX_SAFE_INTEGER;

    filteredProducts = filter.name
      ? filteredProducts.filter((p: Product) =>
          p.name.toLocaleLowerCase().includes(filter.name)
        )
      : filteredProducts;
    filteredProducts = filter.categoryId
      ? filteredProducts.filter(
          (p: Product) => p.categoryId === filter.categoryId
        )
      : filteredProducts;
    filteredProducts = filter.supplierId
      ? filteredProducts.filter(
          (p: Product) => p.supplierId === filter.supplierId
        )
      : filteredProducts;
    filteredProducts = filteredProducts.filter(
      (p: Product) =>
        p.unitPrice <= filter.maxPrice && p.unitPrice >= filter.minPrice
    );

    return filteredProducts;

    // return filterText
    //   ? value.filter((product: Product) =>
    //       product.name.toLocaleLowerCase().includes(filterText)
    //     )
    //   : value;
  }
}
