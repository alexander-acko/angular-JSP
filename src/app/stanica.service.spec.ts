import { TestBed } from '@angular/core/testing';

import { StanicaServiceService } from './stanica.service';

describe('StanicaServiceService', () => {
  let service: StanicaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StanicaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
