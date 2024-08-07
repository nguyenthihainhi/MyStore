import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';
import { Product } from '../../models/product';
import { ProductDetail } from '../../models/product-detail';
import { ProductService } from '../../service/product.service';
import { Color } from '../../models/color';
import { ColorService } from '../../service/color.service';
import { CategoryService } from '../../service/category.service';
import { Category } from '../../models/category';
import { ProductList, Products } from '../../models/productList';

@Component({
  selector: 'app-manage-product',
  templateUrl: './manage-product.component.html',
  styleUrl: './manage-product.component.css'
})
export class ManageProductComponent implements OnInit{
  isSidebarOpen: boolean = false; // Ban đầu sidebar đóng

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
  products: ProductList[] = [];
  product: Product = new Product();
  colors: Color[] = [];
  categories: Category[] = [];
  selectedColor: string | null = null;
  selectedCategory: string | null = null;
  searchText: string = '';
  showDetails: boolean = false; // Flag to show or hide the "Added Details" section
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productSevice: ProductService,
    private colorSevice: ColorService,
    private categoryService: CategoryService,
    
  ) {}
  ngOnInit(): void{
    this.loadProduct();
    this. colors = this.colorSevice.getColors();
    this.categories = this.categoryService.getCategories();
  }

  addProductDetail() {
    const newDetail = new ProductDetail(
      this.product.productDetail.length + 1, // Example ID, replace with actual logic
      this.colors[0].name, // Default color
      1 // Default quantity
    );
    this.product.productDetail.push(newDetail);

    this.showDetails = true;
  }

  loadProduct(){
    // this.productSevice.getProducts().subscribe((pro: Products) =>{
    //   this.products = pro.productList;
    // });
    this.products = this.productSevice.getProducts().productList;
  }
  // loadColor(){
  //   this.colorSevice.getColors().subscribe((colors: Color[]) =>{
  //     this.colors = colors;
  //   });
  // }
  // loadCategory(){
  //   this.categoryService.getCategories().subscribe((categories: Category[]) =>{
  //     this.categories = categories;
  //   });
  // }
  selectColor(color: any, detail: ProductDetail){
    detail.color = color.name;
  }
  getProduct(id: number, event: any){
    this.productSevice.getProduct(id).subscribe((product: Product) =>{
      this.product = product;
    });
    this.selectedColor = this.product.productDetail.length > 0 ? this.product.productDetail[0].color : null;
    this.showDetails = this.product.productDetail.length > 0; // Show details if any exist
    event.show()
  }
  addProduct(){
    this.productSevice.addProduct(this.product).subscribe(() => {
      this.loadProduct();
      this.clearForm();
    });
  }
  updateProduct(){
    this.productSevice.editProduct(this.product).subscribe(() => {
      this.loadProduct();
      this.clearForm();
    });

  }
  deleteProduct(proId: number){
    this.productSevice.deleteProduct(proId).subscribe(() => {
      this.loadProduct();
    });
  }
  clearForm() {
    this.product = new Product();
    this.selectedColor = '';
    this.showDetails = false;
  }
  removeDetail(i: number){
    this.product.productDetail.splice(i, 1);
    if(this.product.productDetail.length === 0){
      this.showDetails = false;
    }
  }
  // search product name
  onSearch() {
    this.productSevice.searchProduct(this.searchText).subscribe(() => {
      this.loadProduct();
    });
  }


}
