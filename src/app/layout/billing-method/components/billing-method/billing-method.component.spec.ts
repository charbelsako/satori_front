import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingMethodComponent } from './billing-method.component';

describe('BillingMethodsComponent', () => {
  let component: BillingMethodComponent;
  let fixture: ComponentFixture<BillingMethodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillingMethodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BillingMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
