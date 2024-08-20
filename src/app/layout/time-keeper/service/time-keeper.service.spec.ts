import { TestBed } from '@angular/core/testing';

import { TimeKeeperService } from './time-keeper.service';

describe('ClientService', () => {
  let service: TimeKeeperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimeKeeperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
