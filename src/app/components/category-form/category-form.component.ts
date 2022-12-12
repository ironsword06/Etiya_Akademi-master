import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css'],
})
export class CategoryFormComponent {
  categoryForm!: FormGroup;
  categoryToUpdate: Category | null = null;

  get isEditting(): boolean {
    return this.categoryToUpdate !== null;
  }

  constructor(
    private formBuilder: FormBuilder,
    private categoryService: CategoryService,
    private toastrService: ToastrService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createCategoryForm();
    this.getCategoryIdFromRoute();
  }

  createCategoryForm(): void {
    this.categoryForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]], //: array, form control'ün parametrelerini temsil eder. 1. eleman default değer, 2. eleman validators
      description: ['', [Validators.required, Validators.minLength(5)]], //: array, form control'ün parametrelerini temsil eder. 1. eleman default değer, 2. eleman validators
    });
  }

  getCategoryIdFromRoute(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['categoryId']) this.getCategoryById(params['categoryId']);
    });
  }

  getCategoryById(categoryId: number) {
    this.categoryService.getById(categoryId).subscribe({
      next: (response) => {
        this.categoryToUpdate = response;
        this.categoryForm.patchValue(this.categoryToUpdate);
      },
      error: () => {
        this.toastrService.error('Category not found');
        this.router.navigate(['/dashboard', 'categories']);
      },
    });
  }

  onCategoryFormSubmit(): void {
    if (this.categoryForm.invalid) {
      this.toastrService.error('Please fill in the form correctly');
      return;
    }

    if (this.isEditting) this.update();
    else this.add();
  }

  onDeleteCategory(): void {
    if (confirm('Are you sure you want to delete this category?') === false)
      return;

    this.delete();
  }

  add(): void {
    const request: Category = {
      //: Backend'in product add endpoint'ine gönderilecek olan request modeli.
      ...this.categoryForm.value,
      name: this.categoryForm.value.name.trim(), //= ...this.productForm.value ile gelen 'name' değerinin üzerin tekrar yazıyoruz (overwrite).
    };

    this.categoryService.add(request).subscribe((response) => {
      this.toastrService.success('Category added successfully');
      this.router.navigate(['dashboard', 'category', 'edit', response.id]);
    });
  }

  update(): void {
    const request: Category = {
      id: this.categoryToUpdate!.id,
      description: this.categoryForm.value.description,
      name: this.categoryForm.value.name.trim(),
    };

    this.categoryService.update(request).subscribe((response) => {
      this.categoryToUpdate = response;
      this.toastrService.success('Category updated successfully');
      this.router.navigate(['/dashboard', 'categories']);
    });
  }

  delete(): void {
    this.categoryService.delete(this.categoryToUpdate!.id).subscribe(() => {
      this.toastrService.success('Category deleted successfully');
      this.router.navigate(['/dashboard', 'categories']);
    });
  }
}
