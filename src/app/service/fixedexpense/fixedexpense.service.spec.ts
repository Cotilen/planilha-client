import { TestBed } from '@angular/core/testing';

import { FixedexpenseService } from './fixedexpense.service';

describe('FixedexpenseService', () => {
  let service: FixedexpenseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FixedexpenseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
