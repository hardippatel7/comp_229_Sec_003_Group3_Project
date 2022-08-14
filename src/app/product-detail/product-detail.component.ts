import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthGuardService } from '../auth/auth-guard.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  id!: string;
  product: any;
  questionList: any;
  userData: any;

  constructor(public productService: ProductService, public route:ActivatedRoute, public authService: AuthGuardService, public router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getProductData();
    this.ongetQuestionList();
  }

  getProductData() {
    this.productService.getProductData(this.id).subscribe((res) =>  {
      this.product = res;
    })
  }

  onCheckUser() {
    this.userData = this.authService.getTokenData();
    if(this.product?.userId === this.userData?.payload?.id)
      return true;
    else
      return false;
  }

  ongetQuestionList() {
    this.productService.getQuestionList(this.id).subscribe((res) =>  {
      this.questionList = res;
    })
  }

  addQuestion(value: any) {
    let user = this.authService.getTokenData();
    let body = {
      userId: user?.payload?.id,
      productId: this.id,
      question: value?.value?.question,
      reply: value?.value?.reply
    }
    this.productService.createQuestion(body)
      .subscribe(response => {
        this.router.navigate(["/"]);
      })
  }

}
