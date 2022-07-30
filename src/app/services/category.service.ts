import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICategory } from '../Components/Models/icategory';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpclient: HttpClient) { }
  getAllCateogories(): Observable<ICategory[]> {
    return this.httpclient.get<ICategory[]>(`${environment.API_URL}/categories`);
    }
}
