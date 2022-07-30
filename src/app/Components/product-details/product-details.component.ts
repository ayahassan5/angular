import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Location} from '@angular/common';
import { ProductsService } from 'src/app/services/products.service';
import { IProduct } from '../Models/iproduct';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  prd: IProduct | undefined = undefined;
  prdidList: number[] = [];
  currentprdID: number = 0;
  currentIndex: number = 0;
  constructor(
    private prdService: ProductsService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private Location: Location,
  ) { }

  ngOnInit(): void {
    // let sendPrdId = this.activatedRoute.snapshot.paramMap.get('pid');
    // let sendPrdId: number = (this.activatedRoute.snapshot.paramMap.get('pid')) ? Number(this.activatedRoute.snapshot.paramMap.get('pid')) : 0;
    // let foundedprd = this.prdService.getProductByID(sendPrdId);
    // if (foundedprd) {
    //   this.prd = foundedprd;
    //   console.log(this.prd);

    // }
    // else {
    //   alert("Product Not Found");
    //   this.Location.back();

    // }

    this.prdidList = this.prdService.getproductList();
   console.log(this.prdidList);
      this.currentprdID= (this.activatedRoute.snapshot.paramMap.get('pid')) ? Number(this.activatedRoute.snapshot.paramMap.get('pid')) : 0;
    let foundedprd = this.prdService.getProductByID(this.currentprdID);
    if (foundedprd) {
      this.prd = foundedprd;
      console.log(this.prd);

    }
    else {
      alert("Product Not Found");
      this.Location.back();

    }

    this.activatedRoute.paramMap.subscribe(paramMap => {
    this.currentprdID= (paramMap.get('pid')) ? Number(paramMap.get('pid')) : 0;
    let foundedprd = this.prdService.getProductByID(this.currentprdID);
    if (foundedprd) {
      this.prd = foundedprd;
      console.log(this.prd);

    }
    else {
      alert("Product Not Found");
      this.Location.back();

    }
    })

  }



  backFunc() {
    this.Location.back();
  }

  nextFunc() {
    this.currentIndex = this.prdidList.findIndex((item) => item == this.currentprdID);
        this.router.navigate(['/products', this.prdidList[++this.currentIndex]]);
  }

  prevFunc() {
    this.currentIndex = this.prdidList.findIndex((item) => item == this.currentprdID);
    this.router.navigate(['/products', this.prdidList[--this.currentIndex]]);
  }


}
