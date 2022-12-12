import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  apiUrl = 'http://localhost:3000/';

  constructor(private httpClient: HttpClient) {}

  getCategories(): Observable<Category[]> {
    let newPath = this.apiUrl + 'categories';
    return this.httpClient.get<Category[]>(newPath);
  }

  getById(categoryId: number): Observable<Category> {
    let newPath = this.apiUrl + 'categories';
    return this.httpClient.get<Category>(`${newPath}/${categoryId}`);
  }

  add(request: Category): Observable<Category> {
    let newPath = this.apiUrl + 'categories';
    return this.httpClient.post<Category>(newPath, request);
  }

  update(request: Category): Observable<Category> {
    let newPath = this.apiUrl + 'categories';
    return this.httpClient.put<Category>(`${newPath}/${request.id}`, request);
  }

  delete(categoryId: number): Observable<Category> {
    let newPath = this.apiUrl + 'categories';
    return this.httpClient.delete<Category>(`${newPath}/${categoryId}`);
  }
}
