import { TestBed } from '@angular/core/testing';

import { GetAPIdataService } from './get-apidata.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('GetAPIdataService', () => {
  let service: GetAPIdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(GetAPIdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
