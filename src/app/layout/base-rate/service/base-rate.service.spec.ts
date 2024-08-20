import { TestBed } from '@angular/core/testing';

import { BaseRateService } from './base-rate.service';

describe('BaseRateService', () => {
  let service: BaseRateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseRateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
