import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor( private http:HttpClient) { }


  getProductsList(){
    return this.http.get('http://127.0.0.1:8000/api/products');
  }
  setPRoductsList(){
  }
}
