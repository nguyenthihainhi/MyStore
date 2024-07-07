import {  Component, inject, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ProductService } from '../../service/product.service';
import { ProductList } from '../../models/productList';
import { Category } from '../../models/category';
import { CategoryService } from '../../service/category.service';
import { LocalService } from '../../service/local.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  products: any[] = [];
  genders = [{ id: 'all', name: 'tất cả' }, { id: 'man', name: 'nam' }, { id: 'wonman', name: 'nữ' }]
  categorys: Category[] = [];
  localService = inject(LocalService);
  selectedCategory = this.localService.getData('gender') || 'all';
  selectedItems: Category[] = [];
  

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private categoryService: CategoryService,
  ) { }

  sections = [
    {
      title: 'TRẠNG THÁI',
      items: ['Limited Edition', 'Sale off', 'New Arrival'],
      isOpen: true
    },
    {
      title: 'KIỂU DÁNG',
      items: ['Low Top', 'High Top', 'Slip-on', 'Mid Top'],
      isOpen: true
    },
    {
      title: 'DÒNG SẢN PHẨM',
      items: ['Basas', 'Vintas', 'Urbas', 'Pattas', 'Tote Bag', 'Graphic Tee', 'Hoodie', 'Socks | Vớ', 'Hat', 'Effect Tee', 'Hip Pack', 'Track 6', 'Basic Tee', 'Shoelaces'],
      isOpen: true
    },
    {
      title: 'GIÁ ',
      items: ['500k - 599k', '> 600k', '400k - 499k', '300k - 399k', '200k - 299k', '< 200k'],
      isOpen: true
    },
    {
      title: 'BỘ SƯU TẬP ',
      items: [
        'Randomly',
        'Public 2000s',
        'Ananas Global Goal',
        'Vivu',
        'Ananas Daily Things',
        'Nauda',
        'Ananas Music Fest 2023',
        'Go Skate',
        'Tomo',
        'Ananas Puppet Club',
        '2.Blues',
        'Ananas Outline Typo',
        'Love+',
        'Ananas x Doraemon 50 Years',
        'Irrelevant',
        'Unnamed',
        'DiscoverYou',
        'Ananas Symbol',
        'Ananas Cropped Symbol',
        'Ananas Typo Logo',
        'Bumper Gum'],
      isOpen: true
    },
    {
      title: 'CHẤT LIỆU',
      items: [
        'Canvas',
        'Suede | Da lộn',
        'Leather | Da',
        'Cotton',
        'Taslan',
        'Knit',
        'Ripstop',
        'Single Jersey',
        'Flannel',
        'Acrylic',
        'Corduroy',
        'Polyester'],
      isOpen: true
    },
    {
      title: 'MÀU SẮC',
      items: [
        '#A0927D',  // Màu be
        '#F1F1F1',  // Màu trắng ngà
        '#F5F5DC',  // Màu kem
        '#3E403A',  // Màu xanh rêu
        '#005D5B',  // Màu xanh biển đậm
        '#DCC6AC',  // Màu vàng nhạt
        '#B3B3B3',  // Màu xám nhạt
        '#002147',  // Màu xanh navy
        '#8B4513',  // Màu nâu
        '#FFFFFF', // Màu trắng
        '#6C7156', // Màu xanh lá nhạt
        '#663399', // Màu tím nhạt
        '#FFC0CB', // Màu hồng
        '#F4C542', // Màu vàng
        '#FF4500', // Màu cam đậm
        '#B22222', // Màu đỏ tía
        '#333333'  // Màu đen đậm
      ],
      isOpen: true
    }
  ];

  ngOnInit(): void {
    this.initializeSelectedItems();
    this.getProducts();
    this.getCategories();
  }

  //method: initialize selected item
  private initializeSelectedItems(): void {
    const storedData = this.localService.getData('selectItemCategory');
    this.selectedItems = storedData ? JSON.parse(storedData) as Category[] : [];
    console.log(this.selectedItems);
  }
  //method: get list product
  getProducts() {
    this.products = this.productService.products;
  }

  //method: get list category
  getCategories() {
    this.categorys = this.categoryService.getCategories();
  }

  //click category
  onCategoryClick(category: string) {
    this.localService.saveData('gender', category);
    this.selectedCategory = this.localService.getData('gender') || 'all';
  }

  onItemClick(event: MouseEvent, item: any) {
    const existingItemIndex = this.selectedItems.findIndex(selectedItem => selectedItem === item);
  
    if (existingItemIndex !== -1) {
      // Item already exists, remove it
      this.selectedItems.splice(existingItemIndex, 1);
    } else {
      // Item doesn't exist, add it
      this.selectedItems.push(item);
    }
  
    this.localService.saveData('selectItemCategory', JSON.stringify(this.selectedItems));
    event.stopPropagation();
  }

  isSelected(item: Category | any): boolean {
    console.log(this.selectedItems);
    return this.selectedItems.some(i => i.categoryID === item.categoryID);
}

  toggleSection(section: any) {
    console.log(section);
    section.isOpen = !section.isOpen;
  }
}
