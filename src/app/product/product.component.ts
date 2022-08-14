import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuardService } from '../auth/auth-guard.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  productList: any;
  userData: any;
  constructor(public productService: ProductService, public router: Router, public authService: AuthGuardService) { }

  ngOnInit(): void {
    this.ongetTaskList();
  }

  ongetTaskList() {
    this.productService.getProductList().subscribe((res) =>  {
      this.productList = res;
    })
  }

  onCheckUser(product: any) {
    this.userData = this.authService.getTokenData();
    if(product._id === this.userData?.payload?.id)
      return true;
    else
      return false;
  }

  onTaskClick(product: any) {
    this.router.navigate(["edit-product/"+ product._id]);
  }

  onViewProduct(product: any) {
    this.router.navigate(["product-detail/"+ product._id]);
  }

  deleteTask(product: any) {
    if(this.authService.gettoken()) {
      this.productService.deleteProduct(product._id).subscribe((res) =>  {
        this.ongetTaskList();
      })
    } else {
      this.router.navigate(["/login"]);
    }

  }

}
