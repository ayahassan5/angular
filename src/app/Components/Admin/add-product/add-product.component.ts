import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductApiService } from 'src/app/services/product-api.service';
import { ICategory } from '../../Models/icategory';
import { IProduct } from '../../Models/iproduct';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  catList: ICategory[];
  newprd: IProduct = {} as IProduct;

  constructor(private productApiservice: ProductApiService,
    private router: Router) {
       this.catList = [
     { id:1 ,name:'Mobiles'},
     { id:2 ,name:'TV'},
     { id:3 ,name:'Laptops'},
    ]
              }

  ngOnInit(): void {
  }

  InsertNewProduct() {
    let testprd: IProduct =
    {
      id: 4, name: 'Oppo', price: 11000, quantity: 2,CateogryID: 1, img: 'assets/images/oppo.jpg'
    }

    // this.productApiservice.addProduct(testprd).subscribe({
    //   next: (prd) => {
    //     this.router.navigate(['/products'])
    //   },
    //   error: (err) => {
    //     alert("Error occured");
    //   }

    // })

      this.productApiservice.addProduct(this.newprd).subscribe({
      next: (prd) => {
        this.router.navigate(['/products'])
      },
      error: (err) => {
        alert("Error occured");
      }

    })
  }

}
