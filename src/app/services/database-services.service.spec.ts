import { TestBed, inject } from '@angular/core/testing';

import { DatabaseServicesService } from './database-services.service';

describe('DatabaseServicesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatabaseServicesService]
    });
  });

  it('should be created', inject([DatabaseServicesService], (service: DatabaseServicesService) => {
    expect(service).toBeTruthy();
  }));
});
