import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LandingComponent} from "./landing/landing.component";
import {ContactComponent} from "./contact/contact.component";
import {AboutComponent} from "./about/about.component";
import { AddProductComponent } from './add-product/add-product.component';

const routes: Routes = [
  {path: '', component : LandingComponent},
  {path: 'contact', component : ContactComponent},
  {path: 'about', component: AboutComponent},
  {path: 'add-product', component: AddProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
