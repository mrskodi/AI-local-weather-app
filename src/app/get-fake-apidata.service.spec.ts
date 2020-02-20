import { TestBed } from '@angular/core/testing';

import { GetFakeApidataService } from './get-fake-apidata.service';

describe('GetFakeApidataService', () => {
  let service: GetFakeApidataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetFakeApidataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
