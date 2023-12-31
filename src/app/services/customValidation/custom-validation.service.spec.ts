import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { CustomValidationService } from './custom-validation.service';

describe('CustomValidationService', () => {
  let service: CustomValidationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(CustomValidationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
