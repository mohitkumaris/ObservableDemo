import { TestBed } from '@angular/core/testing';

import { SharedserviceService } from './shareds.service';

describe('SharedserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SharedserviceService = TestBed.get(SharedserviceService);
    expect(service).toBeTruthy();
  });
});
