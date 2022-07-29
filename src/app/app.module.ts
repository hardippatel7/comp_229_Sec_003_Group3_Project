import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { SignInComponent } from './components/auth/signin.component';
import { SignUpComponent } from './components/auth/signup.component';
import { AddEditComponent } from './components/inventory/add_edit.component';
import { ListComponent } from './components/inventory/list.component';
import { IndexComponent } from './components/index.component';

import { IndexModule } from './components/index.module';
import { InventoryModule } from "./components/inventory/inventory.module";
import { AuthModule } from './components/auth/auth.module';
import { AuthGuard } from "./components/auth/auth.guard";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    IndexModule,
    InventoryModule,
    AuthModule,
    RouterModule.forRoot([
      { path: "", component: IndexComponent },
      { path: "inventory/list", component: ListComponent },
      { path: "inventory/:mode", component: AddEditComponent, canActivate: [AuthGuard]},
      { path: "inventory/:mode/:id", component: AddEditComponent, canActivate: [AuthGuard] },
      { path: "users/signin", component: SignInComponent },
      { path: "users/signup", component: SignUpComponent },
      { path: "**", redirectTo: "" }
    ])
  ],
  providers: [
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
