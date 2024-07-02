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
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselPromotionComponent } from './carousel-promotion/carousel-promotion.component';
import { SelectTableComponent } from './select-table/select-table.component';
import { AccordionAnanasComponent } from './accordion-ananas/accordion-ananas.component';
import { TemplateModalComponent } from './template-modal/template-modal.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ProductCardComponent } from './product-card/product-card.component';
import { CarouselTemplateCartComponent } from './carousel-template-cart/carousel-template-cart.component';

@NgModule({
  declarations: [
    AppComponent, 
    NavHeaderComponent,
    ProductListComponent,
    ProductDetailComponent,
    FooterComponent,
    CarouselPromotionComponent,
    SelectTableComponent,
    AccordionAnanasComponent,
    TemplateModalComponent,
    ProductCardComponent,
    CarouselTemplateCartComponent
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
    SlickCarouselModule
    
  ],
  providers: [
  ],
   
  bootstrap: [AppComponent],
})
export class AppModule {}