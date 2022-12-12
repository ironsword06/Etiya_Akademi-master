import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';

@Pipe({
  name: 'filterProductByPrice',
})
export class FilterProductByPricePipe implements PipeTransform {
  // transform(
  //   products: Product[],
  //   price: number,
  //   operator: 'gt' | 'lt' | 'gte' | 'lte' | 'eq' = 'eq'
  // ): Product[] {
  //   if (price <= 0) return products;

  //   switch (operator) {
  //     case 'eq':
  //       return products.filter((p) => p.unitPrice === price);
  //     case 'gt':
  //       return products.filter((p) => p.unitPrice > price);
  //     case 'lt':
  //       return products.filter((p) => p.unitPrice < price);
  //     case 'gte':
  //       return products.filter((p) => p.unitPrice >= price);
  //     case 'lte':
  //       return products.filter((p) => p.unitPrice <= price);
  //     default:
  //       return products;
  //   }
  // }

  transform(products: Product[], price: number, operator: any): Product[] {
    switch (operator) {
      case FilterPriceOperator.eq:
        return products.filter((p) => p.unitPrice === price);
      case FilterPriceOperator.gt:
        return products.filter((p) => p.unitPrice > price);
      case FilterPriceOperator.lt:
        return products.filter((p) => p.unitPrice < price);
      case FilterPriceOperator.gte:
        return products.filter((p) => p.unitPrice >= price);
      case FilterPriceOperator.lte:
        return products.filter((p) => p.unitPrice <= price);
      default:
        return products;
    }
  }
}

export enum FilterPriceOperator {
  gt = 'gt',
  lt = 'lt',
  gte = 'gte',
  lte = 'lte',
  eq = 'eq',
}
