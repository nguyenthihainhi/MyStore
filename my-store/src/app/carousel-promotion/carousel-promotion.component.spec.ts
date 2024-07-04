import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselPromotionComponent } from './carousel-promotion.component';

describe('CarouselPromotionComponent', () => {
  let component: CarouselPromotionComponent;
  let fixture: ComponentFixture<CarouselPromotionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselPromotionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarouselPromotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
