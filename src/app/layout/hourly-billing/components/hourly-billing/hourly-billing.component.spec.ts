import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HourlyBillingComponent } from './hourly-billing.component';

describe('HourlyBillingComponent', () => {
  let component: HourlyBillingComponent;
  let fixture: ComponentFixture<HourlyBillingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HourlyBillingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HourlyBillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
