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
  user: any = "nisha";
  constructor(public router: Router, public authService: AuthGuardService) { }

  ngOnInit(): void {
  }

  submit() {
    this.authService.settoken(this.user);
    this.router.navigate(["/"]);
  }

}
