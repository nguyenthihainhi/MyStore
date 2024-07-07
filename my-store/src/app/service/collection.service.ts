import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, Output } from '@angular/core';
import { Collection, Collections } from '../models/collection';
import { CollectionURL } from '../url/UrlApi';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {
  private Collections = {
    "collectionList": [
      {
        "collectionID": 1,
        "name": "Summer Collection",
        "slug": "summer-collection"
      },
      {
        "collectionID": 2,
        "name": "Winter Collection",
        "slug": "winter-collection"
      },
      {
        "collectionID": 3,
        "name": "Autumn Collection",
        "slug": "autumn-collection"
      }
    ]
  };

  constructor(private http: HttpClient) { }
  getCollections(){
    return this.Collections;
    // return this.http.get<Collections>(CollectionURL.CollectionsUrl);
  }
  getCollection(id: number){
    return this.http.get<Collection>( CollectionURL.CollectionUrl + `/${id}`);
  }
  addCollection(collection: Collection){
    return this.http.post(CollectionURL.AddCollectionUrl, collection);
  }
  editCollection(collection: Collection){
    return this.http.put(CollectionURL.UpdateCollectionUrl, collection);
  }
  deleteCollection(id: number){
    return this.http.delete(CollectionURL.DeleteCollectionUrl +  `/${id}`);
  }
  searchCollection(search: string){
    return this.http.get<Collections>(CollectionURL.SearchCollectionUrl + `/${search}`);
  }
}
