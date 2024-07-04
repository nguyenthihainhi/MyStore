import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, RouterOutlet, provideRouter } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { routes } from './app.routes'; 
import { ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AccordionModule } from 'ngx-bootstrap/accordion';

import { AppComponent } from './app.component';
import { NavHeaderComponent } from './nav-header/nav-header.component';
import { ProductListComponent } from './product-list/product-list.component';
import { LoginComponent } from './login/login.component';
import { ManageProductComponent } from './manage-product/manage-product.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContentTabComponent } from './content-tab/content-tab.component';
@NgModule({
  declarations: [
    AppComponent, 
    NavHeaderComponent,
    ProductListComponent,
    LoginComponent,
    ManageProductComponent,
    SideBarComponent,
    DashboardComponent,
    ContentTabComponent,
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    RouterOutlet, 
    HttpClientModule, 
    ReactiveFormsModule,
    RouterModule.forRoot(routes, {enableTracing: true}),
    ModalModule.forRoot(),
    CarouselModule.forRoot(),
    TabsModule.forRoot(),
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    AccordionModule.forRoot(),
  ],
  providers: [
  ],
   
  bootstrap: [AppComponent],
})
export class AppModule {}