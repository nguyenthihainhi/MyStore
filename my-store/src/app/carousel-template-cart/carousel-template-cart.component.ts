import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel-template-cart',
  templateUrl: './carousel-template-cart.component.html',
  styleUrl: './carousel-template-cart.component.css'
})
export class CarouselTemplateCartComponent {
  slides = [
    { img: "https://ananas.vn/wp-content/uploads/pro_AET00001_2-300x300.jpg" },
    { img: "https://ananas.vn/wp-content/uploads/Pro_AV00207_2-300x300.jpg" },
    { img: "https://ananas.vn/wp-content/uploads/Pro_AV00208_2-300x300.jpg" },
    { img: "https://ananas.vn/wp-content/uploads/Pro_AV00209_2-300x300.jpg" },
    { img: "https://ananas.vn/wp-content/uploads/Pro_AV00209_2-300x300.jpg" },
    { img: "https://ananas.vn/wp-content/uploads/Pro_AV00209_2-300x300.jpg" },
    {img : "https://ananas.vn/wp-content/uploads/Pro_AHP001_10-1-300x300.jpg"},
    {img: "https://ananas.vn/wp-content/uploads/Pro_AHP002_9-300x300.jpg"}


  ];
  slideConfig = {
     "slidesToShow": 4, 
     "slidesToScroll": 4, 
     "autoplaySpeed": 5000,
    "pauseOnHover": true,
  "infinite": true,
"responsive": [
  {
    "breakpoint": 992,
    "setting": {
      "arrows": true,
      "infinite": true,
      "slidesToShow":3,
      "slidesToScroll":3
    }
  },
  {
    "breakpoint": 768,
    "setting": {
      "arrows": true,
      "infinite": true,
      "slidesToShow":1,
      "slidesToScroll":1
    }
  }
]};

// slideConfig = { slidesToShow: 4, slidesToScroll: 4 };

addSlide() {
  this.slides.push({ img: 'http://placehold.it/350x150/777777' });
}

removeSlide() {
  this.slides.length = this.slides.length - 1;
}

slickInit(e: any) {
  // console.log('slick initialized');
}

breakpoint(e: any) {
  // console.log('breakpoint');
}

afterChange(e: any) {
  // console.log('afterChange');
}

beforeChange(e: any) {
  // console.log('beforeChange');
}

constructor() {}


}
