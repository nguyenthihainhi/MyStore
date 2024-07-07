import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageStyleComponent } from './manage-style.component';

describe('ManageStyleComponent', () => {
  let component: ManageStyleComponent;
  let fixture: ComponentFixture<ManageStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageStyleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManageStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
