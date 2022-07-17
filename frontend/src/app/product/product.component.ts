import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  productList: any;
  constructor(public productService: ProductService) { }

  ngOnInit(): void {
    this.ongetTaskList();
  }

  ongetTaskList() {
    this.productService.getProductList().subscribe((res) =>  {
      console.log(res);
      this.productList = res;
    })
  }

  onTaskClick(product: any) {

  }

  deleteTask(product: any) {
    this.productService.deleteProduct(product.id).subscribe((res) =>  {
      console.log(res);
      this.ongetTaskList();
    })
  }

}
