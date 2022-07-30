import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { ICategory } from '../Models/icategory';
import { Order } from '../Models/order';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  selectedCatId: number = 0;
  recevidOrderTotalPrice: number = 0;
  totalcost: number = 0;

  catList: ICategory[];
  receivedorder:Order[]=[];

  @ViewChild('clientName') clientNameRef!: ElementRef;
  @ViewChild('ProductsComponent') ProductsRef!: ProductsComponent;
  @ViewChild('total') total!: ElementRef;

  // @ViewChild('clientName') clientNameRef: ElementRef|null=null;
  constructor(private catService:CategoryService) {
    this.catList = [
     { id:1 ,name:'Mobiles'},
     { id:2 ,name:'TV'},
     { id:3 ,name:'Laptops'},
    ]
  }

  ngOnInit(): void {
    this.catService.getAllCateogories().subscribe(e => {
      this.catList = e;
    })
  }

  ngAfterViewInit(): void{
    // if(this.clientNameRef)
    this.clientNameRef.nativeElement.value = "Value From ts file";
  }

  ontotalPrice(totalPrice: number) {
    this.recevidOrderTotalPrice = totalPrice;
  }

  updatCart(order: Order[])
  {
    console.log(order);
    this.receivedorder=order;
  }

  getAllTotal():number {
    this.receivedorder.forEach(Element => {
      this.totalcost += (Element.price * Element.count)
    });
    this.total.nativeElement.innerHTML = this.totalcost;
    return this.totalcost;
  }

}
