import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {path: 'product', component: ProductListComponent},
    {path: 'login', component: LoginComponent},
    { path: '', redirectTo: '/product', pathMatch: 'full'},
];
