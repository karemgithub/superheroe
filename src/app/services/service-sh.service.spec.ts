import { TestBed } from '@angular/core/testing';

import { ServiceSHService } from './service-sh.service';

describe('ServiceSHService', () => {
  let service: ServiceSHService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceSHService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
