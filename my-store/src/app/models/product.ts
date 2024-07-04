import { DecimalPipe } from "@angular/common";
import { ProductDetail } from "./product-detail";

export class Product{
    productID : number = 0;
    product_code: string = ''; 
    name: string = ''; 
    quantity: number = 0;
    size: string = ''; 
    description: string = '';
    price: number = 12.34;
    categoryID: number = 0;
    productDetail: ProductDetail[] = [];
}