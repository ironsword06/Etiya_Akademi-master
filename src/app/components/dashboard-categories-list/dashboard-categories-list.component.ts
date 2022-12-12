import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-dashboard-categories-list',
  templateUrl: './dashboard-categories-list.component.html',
  styleUrls: ['./dashboard-categories-list.component.css'],
})
export class DashboardCategoriesListComponent implements OnInit {
  categories: Category[] = [];
  dataLoaded: boolean = false;
  filterCategory: string = '';

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.categoryService.getCategories().subscribe((response) => {
      debugger;
      //await this.delay(1000); // to clearly see the spinner effect
      this.categories = response;
      this.dataLoaded = true;
    });
  }
}
