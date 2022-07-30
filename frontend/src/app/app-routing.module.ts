import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LandingComponent} from "./landing/landing.component";
import {ContactComponent} from "./contact/contact.component";
import {AboutComponent} from "./about/about.component";
import { AddProductComponent } from './add-product/add-product.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { AuthGuardGuard } from './auth/auth-guard.guard';

const routes: Routes = [
  {path: '', component : LandingComponent},
  {path: 'contact', component : ContactComponent},
  {path: 'about', component: AboutComponent},
  {path: 'add-product', canActivate:[AuthGuardGuard], component: AddProductComponent},
  { path: 'edit-product/:id', canActivate:[AuthGuardGuard], component: AddProductComponent },
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegistrationComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
