import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import {FormGroup, FormsModule, NgForm} from '@angular/forms';
import { Router, ActivatedRoute} from '@angular/router';
import { AuthGuardService } from '../auth/auth-guard.service';

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
  constructor(public productService: ProductService, public router: Router, public route:ActivatedRoute, public authService: AuthGuardService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    if(this.id) {
      this.isEdit = true;
      this.btnName = 'Update';
    } else {
      this.isEdit = false;
      this.btnName = 'Save';
    }
  }

  addData(value: any) {
    let user = this.authService.getTokenData();
    let body = {
      name: value.value.name,
      description: value.value.description,
      amount: value.value.amount,
      status: value.value.status,
      userId: user?.payload?.id
    }
    if(this.isEdit) {
      this.productService.updateProduct(this.id, body)
        .subscribe(response => {
          this.router.navigate(["/"]);
        })
    } else {
      this.productService.createProduct(body)
        .subscribe(response => {
          console.log(response)
          this.router.navigate(["/"]);
        })
    }
  }
}
