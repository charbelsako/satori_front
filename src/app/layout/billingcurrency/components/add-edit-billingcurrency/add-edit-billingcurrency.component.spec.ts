import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditBillingcurrencyComponent } from './add-edit-billingcurrency.component';

describe('AddEditBillingcurrencyComponent', () => {
  let component: AddEditBillingcurrencyComponent;
  let fixture: ComponentFixture<AddEditBillingcurrencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditBillingcurrencyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditBillingcurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
