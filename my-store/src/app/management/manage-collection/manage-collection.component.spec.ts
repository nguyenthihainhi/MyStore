import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCollectionComponent } from './manage-collection.component';

describe('ManageCollectionComponent', () => {
  let component: ManageCollectionComponent;
  let fixture: ComponentFixture<ManageCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageCollectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManageCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
