import { Injectable } from '@angular/core';
import {Observable, ReplaySubject} from 'rxjs';
import {HttpClient} from "@angular/common/http";
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {
  userSubject = new ReplaySubject();
  token: any;
  tokenData: any;
  readonly baseUrl;

  constructor(public http: HttpClient, private jwtHelper: JwtHelperService) { this.baseUrl = "https://comp229sec003group3backend.herokuapp.com/users"; }

  settoken(data: any){
    debugger
    this.userSubject.next(localStorage.setItem("SessionUser", data));
  }

  gettoken() {
    if(localStorage.getItem("SessionUser"))
      return true;
    else
      return false
  }

  getTokenData() {
    this.tokenData = (localStorage.getItem("SessionUser"));
      if(this.tokenData) {
      this.token = this.jwtHelper?.decodeToken(this.tokenData);
      return this.token;
    }
    else
      return false
  }

  createUser(user: any): Observable<Object> {
    return this.http.post(`${this.baseUrl}/register `, user);
  }

  login(user: any): Observable<Object> {
    return this.http.post(`${this.baseUrl}/login `, user);
  }

}
