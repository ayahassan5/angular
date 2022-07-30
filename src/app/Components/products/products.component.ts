import { Component, EventEmitter, Input, OnChanges, OnInit, Output  } from '@angular/core';
import { Router } from '@angular/router';
import { ProductApiService } from 'src/app/services/product-api.service';
import { ProductsService } from 'src/app/services/products.service';
import { IProduct } from '../Models/iproduct';
import { Order } from '../Models/order';
import { StoreProduct } from '../Models/store-product';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit, OnChanges {
   NationalId:string = "29906011601918";
  CreditCardNumber: string = "1546223655889741"

  todayDate: Date = new Date();

  ClintName: string = "Thanks for purchasing from our Store youta";
  productList: IProduct[];
  productListOfCat: IProduct[] = [];
  @Input() receivedCatId: number = 0;
  @Output() totalPrice: EventEmitter<number>;
  @Output()totalcart:EventEmitter<Order[]>;

  ordertotalprice: number = 0;
  receivedorder:Order[]=[];
  order:Order[]=[];

  storedata: StoreProduct;
  constructor(private prdService: ProductsService,
    private router: Router,
    private productApiservice:ProductApiService

  ) {
    this.totalPrice = new EventEmitter<number>;
    this.totalcart=new EventEmitter<Order[]>()
    this.productList = [
      { id: 1, name: 'LG', price: 12000, quantity: 4,CateogryID: 2, img: 'assets/images/lg.jpg' },
      { id: 2, name: 'Samsaung', price: 10000, quantity: 5,CateogryID: 1, img: 'assets/images/sam.jpg' },
      { id: 3, name: 'Fresh', price: 9000, quantity: 3,CateogryID: 2, img: 'assets/images/fre.jpg' },
      { id: 4, name: 'Oppo', price: 11000, quantity: 2,CateogryID: 1, img: 'assets/images/oppo.jpg' },
      { id: 5, name: 'Tornado', price: 5000, quantity: 0,CateogryID: 2, img: 'assets/images/images.png' },
      { id: 7, name: 'HP', price: 8000, quantity: 1,CateogryID: 3, img: 'assets/images/hp.jpg' },
      { id: 8, name: 'Lenovo', price: 7000, quantity: 0,CateogryID: 3, img: 'assets/images/images.png' },
    ];

    this.storedata = new StoreProduct('Aya Salama','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReDL4DPLakLtcA4ijvk5PKYPlCGxtDydpurQ&usqp=CAU',['TV','LAP','Mobile']);
  }

  showImg: boolean = true;
  toggleImg() {
    this.showImg = !this.showImg;
  }

  showMsg: boolean = false;
  toggleMsg() {
    this.showMsg = !this.showMsg;
  }


  decProduct(prd:IProduct){
     prd.quantity--
  }

  ngOnChanges():void {
    this.getproductsofCat();
    this.productListOfCat = this.prdService.getProductsByCatID(this.receivedCatId);

      this.productApiservice.getProductsByCatID(this.receivedCatId).subscribe(prdList => {
      this.productListOfCat = prdList;
    })

}

  ngOnInit(): void {
     this.productListOfCat =  this.prdService.getProductsByCatID(this.receivedCatId);
      this.productApiservice.getAllProducts().subscribe(e => {
        this.productListOfCat = e;
        console.log(this.productListOfCat);

    })

   }


  trackByFunc(index: number, item: IProduct) {
    return item.id;
  }

  private getproductsofCat() {
    if (this.receivedCatId == 0)
    {
      this.productListOfCat = Array.from(this.productList);
      return;
    }
  this.productListOfCat= this.productList.filter((prd)=>prd.CateogryID == this.receivedCatId)
  }

  updatetotalprice(prdPrice: number, itemsCount: any){
    this.ordertotalprice += (prdPrice * itemsCount);

    this.totalPrice.emit(this.ordertotalprice);
    }

  openProductDetails(prdID:number) {
    this.router.navigate(['products',prdID])
  }

  updatCart(order:Order){
    this.order.push(order);
    this.totalcart.emit(this.order)
  }
}
