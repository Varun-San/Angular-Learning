import { TestBed } from '@angular/core/testing';

import { CurstomerService } from './curstomer.service';

describe('CurstomerService', () => {
  let service: CurstomerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurstomerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
