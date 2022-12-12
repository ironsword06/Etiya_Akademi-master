import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { GetListOptions } from 'src/app/models/get-list-options';
import { Pagination } from 'src/app/models/pagination';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-dashboard-products-list',
  templateUrl: './dashboard-products-list.component.html',
  styleUrls: ['./dashboard-products-list.component.css'],
})
export class DashboardProductsListComponent implements OnInit {
  products: Product[] = [];
  dataLoaded: boolean = false;
  filterProduct: string = '';
  pagination: Pagination = {
    page: 1,
    limit: 10,
  };
  filters: any = [];
  totalProductNumber: number;

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getProductsLength();
    this.activatedRoute.queryParams.subscribe((queryParams) => {
      this.getPagenationParametersFromRoute();
      this.getProducts({ pagination: this.pagination, filters: this.filters });
    });
  }
  getProductsLength() {
    this.productService.getProducts().subscribe(async (response) => {
      this.totalProductNumber = response.length;
    });
  }
  getProducts(options?: GetListOptions) {
    this.productService.getProducts(options).subscribe(async (response) => {
      debugger;
      //await this.delay(1000); // to clearly see the spinner effect
      this.products = response;
      this.dataLoaded = true;
    });
  }

  onPagination(pageNumber: number) {
    debugger;
    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: { _page: pageNumber, _limit: this.pagination.limit },
      queryParamsHandling: 'merge',
    });
  }

  getPagenationParametersFromRoute(): void {
    debugger;
    this.activatedRoute.queryParams.subscribe((queryParams) => {
      if (queryParams['_page']) {
        this.pagination.page = queryParams['_page'];
        this.pagination.limit = queryParams['_limit'] || 10;
      }
    });
  }

  changePageSize(event: Event) {
    this.pagination.limit = Number((event.target as HTMLInputElement).value);
    // For example 5 product per page is selected and we are in the last page 16
    // Then if the product per page is increased such as 10 then current page will be empty
    // To prevent this behavior below two lines are added
    const a = this.pageNumbers;
    if (this.pagination.page > a.length) this.pagination.page = a.length;
  }

  get pageNumbers(): number[] {
    return Array(Math.ceil(this.totalProductNumber / this.pagination.limit))
      .fill(0)
      .map((x, i) => i + 1);
  }

  setActiveToCurrentPage(page: number) {
    if (page == this.pagination.page) {
      return 'page-link active';
    }
    return 'page-link';
  }
  //*********************************** */

  // This function is added to clearly see the spinner effect
  private delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
