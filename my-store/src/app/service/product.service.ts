import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, Output } from '@angular/core';
import { Product } from '../models/product';
import { Products } from '../models/productList';
import { ProductURL } from '../url/UrlApi';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private Products = {
    "productList": [
      {
        "productId": 1,
        "productName": "Sample Product",
        "price": 29.99,
        "productDetailId": 2,
        "specialName": "Special Name",
        "size": "M",
        "color": "White",
        "quantity": 50
      },
      {
        "productId": 1,
        "productName": "Sample Product",
        "price": 29.99,
        "productDetailId": 4,
        "specialName": "Croocodie",
        "size": "M",
        "color": "White",
        "quantity": 200
      }
    ]
  }
  constructor(private http: HttpClient) { }
  getProducts(){
    return this.Products;
    // return this.http.get<Products>(ProductURL.ProductsUrl);
  }
  getProduct(id: number){
    return this.http.get<Product>( ProductURL.ProductUrl + `/${id}`);
  }
  addProduct(product: Product){
    return this.http.post(ProductURL.AddProductUrl, product);
  }
  editProduct(product: Product){
    return this.http.put(ProductURL.UpdateProductUrl, product);
  }
  deleteProduct(id: number){
    return this.http.delete(ProductURL.DeleteProductUrl +  `/${id}`);
  }
  searchProduct(search: string){
    return this.http.get<Products>(ProductURL.SearchProductUrl + `/${search}`);
  }
}
