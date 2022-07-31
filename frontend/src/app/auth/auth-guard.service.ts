import { Injectable } from '@angular/core';
import {Observable, ReplaySubject} from 'rxjs';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {
  userSubject = new ReplaySubject();
  readonly baseUrl;

  constructor(public http: HttpClient) { this.baseUrl = "https://comp229sec003group3backend.herokuapp.com/users"; }

  settoken(data: any){
    this.userSubject.next(localStorage.setItem("SeesionUser", data));
  }

  gettoken() {
    if(localStorage.getItem("SeesionUser"))
      return true;
    else
      return false}

  createUser(product: any): Observable<Object> {
    return this.http.post(`${this.baseUrl}/register `, product);
  }
}
