import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';

export const routes: Routes = [
    {path: 'product', component: ProductListComponent},
    { path: '', redirectTo: '/product', pathMatch: 'full'},
];
