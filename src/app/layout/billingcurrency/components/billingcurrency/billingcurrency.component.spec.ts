import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingcurrencyComponent } from './billingcurrency.component';

describe('BillingcurrencyComponent', () => {
  let component: BillingcurrencyComponent;
  let fixture: ComponentFixture<BillingcurrencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillingcurrencyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BillingcurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
