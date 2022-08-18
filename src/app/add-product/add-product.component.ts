import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../product.service';
import {FormControl, FormGroup, FormsModule, NgForm, Validators} from '@angular/forms';
import { Router, ActivatedRoute} from '@angular/router';
import { AuthGuardService } from '../auth/auth-guard.service';
import { Product } from '../model/product.model';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  @ViewChild('productForm') productForm: any;
  id!: string;
  isEdit!: boolean;
  //productForm!: FormGroup;
  btnName: string = "Save";
  product?: Product;
  constructor(public productService: ProductService,
              public router: Router, public route:ActivatedRoute,
              public authService: AuthGuardService
              ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    if(this.id) {
      this.isEdit = true;
      this.btnName = 'Update';
       this.getProductData();
    } else {
      this.isEdit = false;
      this.btnName = 'Save';
    }
    this.productForm = new FormGroup({
      'name':  new FormControl(['', Validators.required]),
      'description': new FormControl(['', Validators.required]),
      'amount': new FormControl( ['', Validators.required]),
      'status':new FormControl( ['', Validators.required]),
    });
  }

  getProductData() {
    this.productService.getProductData(this.id).subscribe((res) =>  {
      this.product = res;
      if(this.product) {
        this.productForm.setValue({
          name: this.product.name,
          description: this.product.description,
          amount: this.product.amount,
          status: this.product.status,
        });
      }
    })
  }

  addData(value: any) {
    let user = this.authService.getTokenData();
    this.product = {
      name: value.value.name,
      description: value.value.description,
      amount: value.value.amount,
      status: value.value.status,
      userId: user?.payload?.id
    }
    if(this.isEdit) {
      this.productService.updateProduct(this.id, this.product)
        .subscribe(response => {
          this.router.navigate(["/"]);
        })
    } else {
      this.productService.createProduct(this.product)
        .subscribe(response => {
          console.log(response)
          this.router.navigate(["/"]);
        })
    }
  }
}
