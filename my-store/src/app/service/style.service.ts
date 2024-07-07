import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, Output } from '@angular/core';
import { StyleURL } from '../url/UrlApi';
import { Style, Styles } from '../models/style';

@Injectable({
  providedIn: 'root'
})
export class StyleService {
  private Styles = {
    "styleList": [
      {
        "styleId": 1,
        "name": "Classic",
        "slug": "classic"
      },
      {
        "styleId": 2,
        "name": "Modern",
        "slug": "modern"
      },
      {
        "styleId": 3,
        "name": "Minimalist",
        "slug": "minimalist"
      }
    ]
  }

  constructor(private http: HttpClient) { }
  getStyles(){
    return this.Styles;
    // return this.http.get<Styles>(StyleURL.StylesUrl);
  }
  getStyle(id: number){
    return this.http.get<Style>( StyleURL.StyleUrl + `/${id}`);
  }
  addStyle(style: Style){
    return this.http.post(StyleURL.AddStyleUrl, style);
  }
  editStyle(style: Style){
    return this.http.put(StyleURL.UpdateStyleUrl, style);
  }
  deleteStyle(id: number){
    return this.http.delete(StyleURL.DeleteStyleUrl +  `/${id}`);
  }
  searchStyle(search: string){
    return this.http.get<Styles>(StyleURL.SearchStyleUrl + `/${search}`);
  }
}
