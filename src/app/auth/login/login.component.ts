import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuardService } from '../auth-guard.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email : string ="";
  password : string ="";
  show: boolean= false;
  user: any = "";
  showError: boolean = false;
  errorMsg: string = "";
  constructor(public router: Router, public authService: AuthGuardService) { }

  ngOnInit(): void {
  }

  submit(formData: any) {
    let body = {
      username: formData.value.email,
      password: formData.value.password
    }
    this.authService.login(body)
      .subscribe((response: any) => {
        if(response) {
          this.authService.settoken(response?.token);
          this.router.navigate(["/"]);
          this.showError = false;
        } else {
          this.showError = true;
        }
      })
  }

}
