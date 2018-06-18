import { TestBed, inject } from '@angular/core/testing';

import { GetOpenIdService } from './get-open-id.service';

describe('GetOpenIdService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetOpenIdService]
    });
  });

  it('should be created', inject([GetOpenIdService], (service: GetOpenIdService) => {
    expect(service).toBeTruthy();
  }));
});
