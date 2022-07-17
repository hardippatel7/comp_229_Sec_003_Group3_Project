import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(public productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProductList().subscribe((res) =>  {
      console.log(res);
    })
  }


}
