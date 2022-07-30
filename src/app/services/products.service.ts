import { Injectable } from '@angular/core';
import { IProduct } from '../Components/Models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  productList: IProduct[];
  constructor() {
     this.productList = [
      { id: 1, name: 'LG', price: 12000, quantity: 4,CateogryID: 2, img: 'assets/images/s.jpg' },
      { id: 2, name: 'Samsaung', price: 10000, quantity: 5,CateogryID: 1, img: 'assets/images/s.jpg' },
      { id: 3, name: 'Fresh', price: 9000, quantity: 3,CateogryID: 2, img: 'assets/images/s.jpg' },
      { id: 4, name: 'Oppo', price: 11000, quantity: 2,CateogryID: 1, img: 'assets/images/s.jpg' },
      { id: 5, name: 'Tornado', price: 5000, quantity: 0,CateogryID: 2, img: 'assets/images/s.jpg' },
      { id: 7, name: 'HP', price: 8000, quantity: 1,CateogryID: 3, img: 'assets/images/s.jpg' },
      { id: 8, name: 'Lenovo', price: 7000, quantity: 0,CateogryID: 3, img: 'assets/images/s.jpg' },
    ];
  }

  getAllProducts(): IProduct[]{
    return this.productList;
  }
  
  getProductsByCatID(CateogryID: number): IProduct[]{
    if (CateogryID == 0) {
      return this.getAllProducts();
    }
    else {
      return this.productList.filter(prd => prd.CateogryID == CateogryID);
    }
  }

  getProductByID(prdID: number):IProduct|undefined{
    return this.productList.find(prd=>prd.id==prdID);
  }

  getproductList(): number[]
  {
    return this.productList.map(prd=>prd.id)
  }
  
}
