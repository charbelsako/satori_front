import { TestBed } from '@angular/core/testing';

import { AreaOfLawService } from './area-of-law.service';

describe('AreaOfLawService', () => {
  let service: AreaOfLawService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AreaOfLawService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
