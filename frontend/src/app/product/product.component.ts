import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  productList: any;
  constructor(public productService: ProductService, public router: Router) { }

  ngOnInit(): void {
    this.ongetTaskList();
  }

  ongetTaskList() {
    this.productService.getProductList().subscribe((res) =>  {
      this.productList = res;
    })
  }

  onTaskClick(product: any) {
    this.router.navigate(["edit-product/"+ product._id]);
  }

  deleteTask(product: any) {
    this.productService.deleteProduct(product._id).subscribe((res) =>  {
      this.ongetTaskList();
    })
  }

}
