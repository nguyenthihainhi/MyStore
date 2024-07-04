export class ProductDetail{
    productDetailId: number = 0;
    color: string = '';
    quantity: number = 0;
    specialname: string = '';
    constructor(
        productDetailId: number = 0,
        color: string = '',
        quantity: number = 1,
        specialname: string = ''
      ) {
        this.productDetailId = productDetailId;
        this.color = color;
        this.quantity = quantity;
        this.specialname = specialname;
      }
}