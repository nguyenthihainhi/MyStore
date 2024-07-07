import { ProductListComponent } from './product/product-list/product-list.component';
import { LoginComponent } from './authentication/login/login.component';
import { ManageProductComponent } from './management/manage-product/manage-product.component';
import { SideBarComponent } from './nav/side-bar/side-bar.component';
import { DashboardComponent } from './management/dashboard/dashboard.component';
import { ContentTabComponent } from './management/content-tab/content-tab.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: 'product', component: ProductListComponent},
    {path:'product-detail/:skud', component: ProductDetailComponent},
    {path: 'login', component: LoginComponent},
    {path: 'manage/product', component: ManageProductComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'tab', component: ContentTabComponent},
    { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
];
