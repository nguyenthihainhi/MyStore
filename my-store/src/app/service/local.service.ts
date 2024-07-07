import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  constructor() { }

  public saveData<T>(key: string, value: T): void {
    let dataToStore: string;

    if (typeof value === 'object' ) {
      dataToStore = JSON.stringify(value);
    } else if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
      // These types have built-in toString methods
      dataToStore = value.toString();
    } else {
      // Handle cases where value might not have toString (custom types)
      console.warn("Value type doesn't have a toString method. Consider custom conversion.");
      return; // Or throw an error if strict type checking is required
    }
  
    localStorage.setItem(key, dataToStore);
  }

  public getData(key: string) {
    return localStorage.getItem(key);
  }
  public removeData(key: string) {
    localStorage.removeItem(key);
  }

  public clearData() {
    localStorage.clear();
  }
}
