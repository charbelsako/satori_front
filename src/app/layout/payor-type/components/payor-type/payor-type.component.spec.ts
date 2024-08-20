import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayorTypeComponent } from './payor-type.component';

describe('BillingFrequenciesComponent', () => {
  let component: PayorTypeComponent;
  let fixture: ComponentFixture<PayorTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayorTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayorTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
