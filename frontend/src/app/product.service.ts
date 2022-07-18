import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  readonly baseUrl;
  constructor(public http: HttpClient ) {
    this.baseUrl = "http://localhost:3000/products";
  }

  getProductList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/list`);
  }

  createProduct(product: any): Observable<Object> {
    return this.http.post(`${this.baseUrl}/add `, product);
  }

  updateProduct(id: string, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/edit/${id}`, value);
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${id}`, { responseType: 'text' });
  }
}
