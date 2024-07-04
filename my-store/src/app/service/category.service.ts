import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../models/category';
import { UrlApi } from '../url/UrlApi';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categories: Category[] = [
    { categoryID: '1', name: 'Accessories' },
    { categoryID: '2', name: 'Footwear' },
    { categoryID: '3', name: 'Top' },
  ];

  url = UrlApi.ApiCategory;
  constructor(private http: HttpClient) { }

  getCategories(){
    return this.categories;
    // return this.http.get<Category[]>(this.url);
  }
}
