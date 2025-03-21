import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingFrequencyComponent } from './billing-frequency.component';

describe('BillingFrequenciesComponent', () => {
  let component: BillingFrequencyComponent;
  let fixture: ComponentFixture<BillingFrequencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillingFrequencyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BillingFrequencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
