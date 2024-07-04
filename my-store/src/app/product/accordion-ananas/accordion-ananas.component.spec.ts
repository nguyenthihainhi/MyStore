import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionAnanasComponent } from './accordion-ananas.component';

describe('AccordionAnanasComponent', () => {
  let component: AccordionAnanasComponent;
  let fixture: ComponentFixture<AccordionAnanasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccordionAnanasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccordionAnanasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
