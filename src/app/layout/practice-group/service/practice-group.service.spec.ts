import { TestBed } from '@angular/core/testing';

import { PracticeGroupService } from './practice-group.service';

describe('PracticeGroupService', () => {
  let service: PracticeGroupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PracticeGroupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
