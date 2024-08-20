import { TestBed } from '@angular/core/testing';

import { HourlyBillingService } from './hourly-billing.service';

describe('HourlyBillingService', () => {
  let service: HourlyBillingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HourlyBillingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
