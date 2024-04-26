import { TestBed } from '@angular/core/testing';

import { FixedrecipeService } from './fixedrecipe.service';

describe('FixedrecipeService', () => {
  let service: FixedrecipeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FixedrecipeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
