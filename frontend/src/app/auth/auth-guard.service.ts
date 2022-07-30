import { Injectable } from '@angular/core';
import {ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {
  userSubject = new ReplaySubject();
  constructor() { }

  settoken(data: any){
    this.userSubject.next(localStorage.setItem("SeesionUser", data));
  }

  gettoken() {
    if(localStorage.getItem("SeesionUser"))
      return true;
    else
      return false
}
}
