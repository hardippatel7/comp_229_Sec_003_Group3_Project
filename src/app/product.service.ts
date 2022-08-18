import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(public http: HttpClient ) {
  }

  getProductList(): Observable<any> {
    return this.http.get(`${environment.apiurl}/products/list`);
  }

  createProduct(product: any): Observable<Object> {
    return this.http.post(`${environment.apiurl}/products/add `, product);
  }

  updateProduct(id: string, value: any): Observable<Object> {
    return this.http.put(`${environment.apiurl}/products/edit/${id}`, value);
  }

  getProductData(id: any): Observable<any> {
    return this.http.get(`${environment.apiurl}/products/get/${id}`);
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete(`${environment.apiurl}/products/delete/${id}`, { responseType: 'text' });
  }

  getQuestionList(id: string): Observable<any> {
    let body = {
      productId: id
    }
    return this.http.post(`${environment.apiurl}/questions/list`, body);
  }

  createQuestion(question: any): Observable<Object> {
    return this.http.post(`${environment.apiurl}/questions/add `, question);
  }

  replyQuestion(id: string, value: any): Observable<Object> {
    return this.http.put(`${environment.apiurl}/questions/reply/${id}`, value);
  }

}
