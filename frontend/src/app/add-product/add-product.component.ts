import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import {FormGroup, FormsModule, NgForm} from '@angular/forms';
import { Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  id!: string;
  isEdit!: boolean;
  loginForm!: FormGroup;
  btnName: string = "Save";
  constructor(public productService: ProductService, public router: Router, public route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    if(this.id) {
      this.isEdit = true;
      this.btnName = 'Edit';
    } else {
      this.isEdit = false;
      this.btnName = 'Save';
    }
  }

  addData(value: any) {
    let body = {
      name: value.name,
      description: value.desc,
      amount: value.amount,
      status: value.status
    }
    if(this.isEdit) {
      this.productService.updateProduct(this.id, value.value)
        .subscribe(response => {
          this.router.navigate(["/"]);
        })
    } else {
      this.productService.createProduct(value.value)
        .subscribe(response => {
          console.log(response)
          this.router.navigate(["/"]);
        })
    }
  }
}
