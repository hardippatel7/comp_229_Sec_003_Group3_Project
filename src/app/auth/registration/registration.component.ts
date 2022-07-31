import { Component, OnInit } from '@angular/core';
import {AuthGuardService} from "../auth-guard.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor(public authService: AuthGuardService, private router: Router) { }

  ngOnInit(): void {
  }

  addData(formData: any) {
    let body = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      password: formData.password
    }
    this.authService.createUser(body)
      .subscribe(response => {
        console.log(response)
        this.router.navigate(["/"]);
      })
  }
}
