import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { LoginComponent } from './login/login.component';
import { ManageProductComponent } from './manage-product/manage-product.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContentTabComponent } from './content-tab/content-tab.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

export const routes: Routes = [
    {path: 'product', component: ProductListComponent},
    {path:'product-detail/:skud', component: ProductDetailComponent},
    {path: 'login', component: LoginComponent},
    {path: 'manage/product', component: ManageProductComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'tab', component: ContentTabComponent},
    { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
];
