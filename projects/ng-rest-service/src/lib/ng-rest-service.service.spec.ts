import { TestBed } from '@angular/core/testing';

import { NgRestServiceService } from './ng-rest-service.service';

describe('NgRestServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgRestServiceService = TestBed.get(NgRestServiceService);
    expect(service).toBeTruthy();
  });
});
