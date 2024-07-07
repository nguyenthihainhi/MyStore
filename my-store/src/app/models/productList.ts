export class ProductList{
    productId : number = 0;
    productName: string = '';
    price: number = 12.34;
    productDetailId : number = 0;
    specialName: string = '';
    size: string = '';
    color: string = '';
    quantity: number = 0;
}
export class Products{
    productList: ProductList[] = [];
}