import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Supplier } from '../models/supplier';

@Injectable({
  providedIn: 'root',
})
export class SupplierService {
  apiUrl = 'http://localhost:3000/';

  constructor(private httpClient: HttpClient) {}

  getSuppliers(): Observable<Supplier[]> {
    let newPath = this.apiUrl + 'suppliers';
    return this.httpClient.get<Supplier[]>(newPath);
  }
}
