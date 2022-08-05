import {AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuardService } from 'src/app/auth/auth-guard.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit, AfterViewInit {
  isUserLogin: boolean = false;
  constructor(public authService: AuthGuardService, public router: Router, public ref: ChangeDetectorRef) {

  }

  ngAfterViewInit(): void {

  }

  ngOnInit(): void {
    this.authService.userSubject.subscribe((data) => {
      this.isUserLogin = !data;
    });
  }

  onLogout() {
    this.authService.settoken("");
    this.isUserLogin = false;
  }
}
