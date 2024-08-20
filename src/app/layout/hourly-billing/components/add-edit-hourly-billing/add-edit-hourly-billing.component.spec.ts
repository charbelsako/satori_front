import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditHourlyBillingComponent } from './add-edit-hourly-billing.component';

describe('AddEditHourlyBillingComponent', () => {
  let component: AddEditHourlyBillingComponent;
  let fixture: ComponentFixture<AddEditHourlyBillingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditHourlyBillingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditHourlyBillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
