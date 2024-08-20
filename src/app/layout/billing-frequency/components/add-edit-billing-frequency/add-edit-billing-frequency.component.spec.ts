import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditBillingFrequencyComponent } from './add-edit-billing-frequency.component';

describe('AddEditBillingFrequencyComponent', () => {
  let component: AddEditBillingFrequencyComponent;
  let fixture: ComponentFixture<AddEditBillingFrequencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditBillingFrequencyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditBillingFrequencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
