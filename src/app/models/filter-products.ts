export interface FilterProduct {
  name: string;
  categoryId: number | undefined;
  supplierId: number | undefined;
  minPrice: number;
  maxPrice: number;
  //   isInStock: boolean;
}
