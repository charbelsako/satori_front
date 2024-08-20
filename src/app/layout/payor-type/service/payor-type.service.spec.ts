import { TestBed } from '@angular/core/testing';

import { PayorTypeService } from './payor-type.service';

describe('PayorTypeService', () => {
  let service: PayorTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PayorTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
