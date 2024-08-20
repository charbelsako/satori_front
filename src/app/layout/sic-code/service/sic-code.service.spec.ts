import { TestBed } from '@angular/core/testing';

import { SICCodeService } from './sic-code.service';

describe('SICCodeService', () => {
  let service: SICCodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SICCodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
