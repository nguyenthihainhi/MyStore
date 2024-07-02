import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

export const routes: Routes = [
    {path: 'product', component: ProductListComponent},
    { path: '', redirectTo: '/product', pathMatch: 'full'},
    {path:'product-detail/:skud', component: ProductDetailComponent}
];
