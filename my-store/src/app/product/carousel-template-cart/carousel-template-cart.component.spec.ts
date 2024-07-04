import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselTemplateCartComponent } from './carousel-template-cart.component';

describe('CarouselTemplateCartComponent', () => {
  let component: CarouselTemplateCartComponent;
  let fixture: ComponentFixture<CarouselTemplateCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselTemplateCartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarouselTemplateCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
