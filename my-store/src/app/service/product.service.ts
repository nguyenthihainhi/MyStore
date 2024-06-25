import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products = [
    {
      id: 1,
      name: 'Pigment Tee - AAA New Standard',
      description: 'Kangaroo',
      price: 390000,
      currency: 'VND',
      imageUrl: 'https://ananas.vn/wp-content/uploads/pro_AET00001_2-500x500.jpg',
      isFavorite: false,
      label: 'New Arrival'
    },
    {
      id: 2,
      name: 'Vintas Public 2000s - Low Top',
      description: 'Insignia Blue',
      price: 620000,
      currency: 'VND',
      imageUrl: 'https://ananas.vn/wp-content/uploads/Pro_AV00207_2-500x500.jpg',
      isFavorite: false
    },
    {
      id: 3,
      name: 'Vintas Public 2000s - Low Top',
      description: 'Brindle',
      price: 620000,
      currency: 'VND',
      imageUrl: 'https://ananas.vn/wp-content/uploads/Pro_AV00208_2-500x500.jpg',
      isFavorite: false
    },
    {
      id: 4,
      name: 'Classic Hoodie - Comfortable Fit',
      description: 'Jet Black',
      price: 750000,
      currency: 'VND',
      imageUrl: 'https://ananas.vn/wp-content/uploads/Pro_AV00209_2-500x500.jpg',
      isFavorite: true,
      label: 'New Arrival'
    },
    {
      id: 5,
      name: 'Slim Fit Jeans',
      description: 'Dark Denim',
      price: 890000,
      currency: 'VND',
      imageUrl: 'https://ananas.vn/wp-content/uploads/Pro_AHP001_10-1-500x500.jpg',
      isFavorite: false
    },
    {
      id: 6,
      name: 'Casual Sneakers',
      description: 'White',
      price: 580000,
      currency: 'VND',
      imageUrl: 'https://ananas.vn/wp-content/uploads/Pro_AHP002_9-500x500.jpg',
      isFavorite: false
    },
    {
      id: 7,
      name: 'Graphic Tee - Retro Design',
      description: 'Navy Blue',
      price: 320000,
      currency: 'VND',
      imageUrl: 'https://ananas.vn/wp-content/uploads/Pro_AHP003_9-500x500.jpg',
      isFavorite: true
    },
    {
      id: 8,
      name: 'Jogger Pants',
      description: 'Heather Gray',
      price: 550000,
      currency: 'VND',
      imageUrl: 'https://ananas.vn/wp-content/uploads/Pro_AV00205_2-500x500.jpeg',
      isFavorite: false
    },
    {
      id: 9,
      name: 'Baseball Cap - Classic Style',
      description: 'Black',
      price: 200000,
      currency: 'VND',
      imageUrl: 'https://ananas.vn/wp-content/uploads/Pro_AV00206_2-500x500.jpeg',
      isFavorite: true
    },
    {
      id: 10,
      name: 'Ankle Socks - Pack of 3',
      description: 'White',
      price: 150000,
      currency: 'VND',
      imageUrl: 'https://ananas.vn/wp-content/uploads/Pro_AHCS012_2-500x500.jpg',
      isFavorite: false
    },
    {
      id: 11,
      name: 'Leather Belt',
      description: 'Brown',
      price: 420000,
      currency: 'VND',
      imageUrl: 'https://ananas.vn/wp-content/uploads/Pro_AHCS011_2-500x500.jpg',
      isFavorite: true
    },
    {
      id: 12,
      name: 'Aviator Sunglasses',
      description: 'Gold Frame',
      price: 690000,
      currency: 'VND',
      imageUrl: 'https://ananas.vn/wp-content/uploads/Pro_AHCS010_2-500x500.jpg',
      isFavorite: false
    },
    {
      id: 13,
      name: 'Classic Watch',
      description: 'Silver',
      price: 1250000,
      currency: 'VND',
      imageUrl: 'https://ananas.vn/wp-content/uploads/Pro_AHCS009_2-500x500.jpg',
      isFavorite: false
    },
    {
      id: 14,
      name: 'Backpack - Modern Design',
      description: 'Charcoal Gray',
      price: 820000,
      currency: 'VND',
      imageUrl: 'https://ananas.vn/wp-content/uploads/Pro_AHCS008_2-500x500.jpg',
      isFavorite: true,
      label: 'Bestseller'
    },
    {
      id: 15,
      name: 'Canvas Shoes',
      description: 'Olive Green',
      price: 520000,
      currency: 'VND',
      imageUrl: 'https://ananas.vn/wp-content/uploads/Hover-2-500x500.jpg',
      isFavorite: false
    }
  ];
  constructor(private http: HttpClient) { }
  getProducts(){
    return this.products;
  }
}
