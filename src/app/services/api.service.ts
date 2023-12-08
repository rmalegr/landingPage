import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../models/products.models';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseURL = 'https://fakestoreapi.com/products'

  private _httpClient = inject(HttpClient)
  
  getAllProducts():Observable<IProduct[]> {
    return this._httpClient.get<IProduct[]>(this.baseURL)
  }

  getProduct(id:number):Observable<IProduct> {
    return this._httpClient.get<IProduct>(`${this.baseURL}/${id}`)
  }
}
