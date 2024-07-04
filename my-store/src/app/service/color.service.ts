import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Color } from '../models/color';
import { UrlApi } from '../url/UrlApi';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  colors: Color[] = [
    { name: 'Beige', code: '#a49e90' },
    { name: 'White', code: '#ffffff' },
    { name: 'Ivory', code: '#f5f1e4' },
    { name: 'Dark Green', code: '#425348' },
    { name: 'Teal', code: '#006965' },
    { name: 'Light Brown', code: '#e0c599' },
    { name: 'Grey', code: '#c4c3c3' },
    { name: 'Navy', code: '#1f3f70' },
    { name: 'Brown', code: '#7c4e3f' },
    { name: 'Purple', code: '#785d99' },
    { name: 'Green', code: '#7baf4e' },
    { name: 'Pink', code: '#f28288' },
    { name: 'Yellow', code: '#f4d33f' },
    { name: 'Orange', code: '#ff7b33' },
    { name: 'Red', code: '#d22d2d' },
    { name: 'Dark Grey', code: '#454545' },
  ];
  url = UrlApi.ApiColor;
  constructor(private http: HttpClient) { }
  getColors(){
    return this.colors;
    // return this.http.get<Color[]>(this.url);
  }
}
