import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import {FormsModule, NgForm} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  constructor(public productService: ProductService, public router: Router) { }

  ngOnInit(): void {
  }

  addData(value: any) {
    console.log(value.value);
    let body = {
      name: value.name,
      description: value.desc,
      amount: value.amount,
      status: value.status
    }

    this.productService.createProduct(body)
      .subscribe(response => {
        console.log(response)
        this.router.navigate(["/"]);
      })
  }
}
