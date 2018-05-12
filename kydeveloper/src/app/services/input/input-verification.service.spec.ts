import { TestBed, inject } from '@angular/core/testing';

import { InputVerificationService } from './input-verification.service';

describe('InputVerificationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InputVerificationService]
    });
  });

  it('should be created', inject([InputVerificationService], (service: InputVerificationService) => {
    expect(service).toBeTruthy();
  }));
});
