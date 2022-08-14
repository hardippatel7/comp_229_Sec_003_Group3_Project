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
    this.baseUrl = "https://comp229sec003group3backend.herokuapp.com";
  }

  getProductList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/products/list`);
  }

  createProduct(product: any): Observable<Object> {
    return this.http.post(`${this.baseUrl}/products/add `, product);
  }

  updateProduct(id: string, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/products/edit/${id}`, value);
  }

  getProductData(id: any): Observable<any> {
    return this.http.get(`${this.baseUrl}/products/get/${id}`);
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/products/delete/${id}`, { responseType: 'text' });
  }

  getQuestionList(id: string): Observable<any> {
    let body = {
      productId: id
    }
    return this.http.post(`${this.baseUrl}/questions/list`, body);
  }

  createQuestion(question: any): Observable<Object> {
    return this.http.post(`${this.baseUrl}/questions/add `, question);
  }

  replyQuestion(id: string, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/questions/reply/${id}`, value);
  }

}
