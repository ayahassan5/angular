import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IProduct } from '../Components/Models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {
  private httpOptions = {};

  constructor(private httpclient: HttpClient) { 
    this.httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json',
  })
}
  }
   getAllProducts(): Observable<IProduct[]> {
    return this.httpclient.get<IProduct[]>(`${environment.API_URL}/products`);  
   }
  
  getProductsByCatID(catID: number): Observable<IProduct[]>  {
      return this.httpclient.get<IProduct[]>(`${environment.API_URL}/products?CateogryID=${catID}`);   
  }

  getProductByID(prdID:number): Observable<IProduct> {
   return this.httpclient.get<IProduct>(`${environment.API_URL}/products/${prdID}`) 
  }

   addProduct(newProduct:IProduct):Observable<IProduct>{
    return this.httpclient.post<IProduct>(`${environment.API_URL}/products`
    ,JSON.stringify(newProduct),this.httpOptions);
  }
}
