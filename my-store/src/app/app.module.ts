import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, RouterOutlet, provideRouter } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { routes } from './app.routes'; 
import { ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AccordionModule } from 'ngx-bootstrap/accordion';

import { AppComponent } from './app.component';
import { NavHeaderComponent } from './nav-header/nav-header.component';
import { ProductListComponent } from './product-list/product-list.component';
@NgModule({
  declarations: [
    AppComponent, 
    NavHeaderComponent,
    ProductListComponent,
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
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    AccordionModule.forRoot(),
  ],
  providers: [
  ],
   
  bootstrap: [AppComponent],
})
export class AppModule {}