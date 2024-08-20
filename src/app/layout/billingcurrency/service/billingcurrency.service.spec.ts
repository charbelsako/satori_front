import { TestBed } from '@angular/core/testing';

import { BillingcurrencyService } from './billingcurrency.service';

describe('BillingcurrencyService', () => {
  let service: BillingcurrencyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BillingcurrencyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
