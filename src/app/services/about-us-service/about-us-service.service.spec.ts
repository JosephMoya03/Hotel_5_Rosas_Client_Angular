import { TestBed } from '@angular/core/testing';

import { AboutUsServiceService } from './about-us-service.service';

describe('AboutUsServiceService', () => {
  let service: AboutUsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AboutUsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
