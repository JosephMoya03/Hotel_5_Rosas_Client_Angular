import { TestBed } from '@angular/core/testing';

import { RatesServiceService } from './rates-service.service';

describe('RatesServiceService', () => {
  let service: RatesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RatesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
