import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Category } from './../../models/category';
import { CategoryService } from 'src/app/services/category.service';
import { FilterProduct } from 'src/app/models/filter-products';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { Supplier } from 'src/app/models/supplier';
import { SupplierService } from 'src/app/services/supplier.service';

@Component({
  selector: 'app-filter-products',
  templateUrl: './filter-products.component.html',
  styleUrls: ['./filter-products.component.css'],
})
export class FilterProductsComponent implements OnInit {
  categories: Category[];
  suppliers: Supplier[];
  products: Product[];
  suppliersId: number[];

  @Output() filterApplied = new EventEmitter<FilterProduct>();

  isInStock: boolean = true;
  currentName: string;
  currentCategoryId: 0;
  currentSupplierId: 0;
  minPrice: number;
  maxPrice: number;

  constructor(
    private categoryService: CategoryService,
    private supplierService: SupplierService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    debugger;
    this.getCategories();
    this.getSuppliers();
  }

  getCategories() {
    this.categoryService.getCategories().subscribe((response) => {
      this.categories = response;
    });
  }

  getSuppliers() {
    this.supplierService.getSuppliers().subscribe((response) => {
      this.suppliers = response;
    });
  }

  onApplyFilter() {
    debugger;
    let obj: FilterProduct = {
      name: this.currentName,
      categoryId: Number(this.currentCategoryId),
      supplierId: Number(this.currentSupplierId),
      minPrice: Number(this.minPrice),
      maxPrice: Number(this.maxPrice),
    };
    this.filterApplied.emit(obj);
  }
}
