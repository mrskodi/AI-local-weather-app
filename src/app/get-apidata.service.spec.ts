import { TestBed } from '@angular/core/testing';

import { GetAPIdataService } from './get-apidata.service';

describe('GetAPIdataService', () => {
  let service: GetAPIdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAPIdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
