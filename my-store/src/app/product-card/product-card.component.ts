import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
@Input() product: any = {
  imageUrl: "https://ananas.vn/wp-content/uploads/pro_AET00001_2-500x500.jpg",
  name: "Pigment Tee - AAA New Standard",
  description: "Kangaroo",
  price: "350.000",
  currency: "VND"
}
}
