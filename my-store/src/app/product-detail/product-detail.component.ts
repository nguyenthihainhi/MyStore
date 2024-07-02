import { Component, ViewChild, viewChild } from '@angular/core';
import { TemplateModalComponent } from '../template-modal/template-modal.component';

type thumbnail = {
  url: string,
  name: string
}

type themeColor = {
  hexColor: string,
  slug: string
}

type productDetail = {
  title: string,
  sku: string,
  thumbnails: thumbnail[],
  price: string | number,
  theme: themeColor[],
  size: (string | number)[],
  quantity: number[],
  description: string
}
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {


  @ViewChild(TemplateModalComponent) imageModal!: TemplateModalComponent;
  itemsPerSlide = 4;
  singleSlideOffset = true;
  noWrap = true;
  imageZoom: string = "https://ananas.vn/wp-content/uploads/Pro_AV00150_3.jpg";

  thumbnailProductDetail: thumbnail[] = [
    {
      url: "https://ananas.vn/wp-content/uploads/Pro_AV00150_3.jpg",
      name: "Pro_AV00150_3.jpg"
    },
    {
      url: "https://ananas.vn/wp-content/uploads/Pro_AV00150_4.jpg",
      name: "Pro_AV00150_4.jpg"
    },
    {
      url: "https://ananas.vn/wp-content/uploads/pro_AV00150_5.jpg",
      name: "pro_AV00150_5.jpg"
    },
    {
      url: "https://ananas.vn/wp-content/uploads/Pro_AV00150_6.jpg",
      name: "Pro_AV00150_6.jpg"
    },
    {
      url: "https://ananas.vn/wp-content/uploads/Pro_AV00150_2.jpg",
      name: "Pro_AV00150_2.jpg"
    },
  ];

  itemProductDetail: productDetail = {
    title: "BASAS WORKADAY - LOW TOP - REAL TEAL",
    sku: "AV00150",
    thumbnails: this.thumbnailProductDetail,
    price: "580.000",
    theme: [
      {
        hexColor: "#405e74",
        slug: ""
      },
      {
        hexColor: "#405e74",
        slug: ""
      },
      {
        hexColor: "#405e74",
        slug: ""
      },
      {
        hexColor: "#2c2f32",
        slug: ""
      }
    ],
    size: [35, 36, 36.5, 37, 38, 38.5, 39, 40, 41, 42, 42.5, 43, 44, 44.5, 45, 46],
    quantity: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    description: ""
  }


  handleChooseImage(nameImage: string) {
    const matchingThumbnail = this.thumbnailProductDetail.find(thumbnail => thumbnail.name === nameImage);
    if (matchingThumbnail) {
      this.imageZoom = matchingThumbnail.url;
    }
  }

  tongleModalImg() {
    this.imageModal.openModal(this.imageModal.template);
  }
}
