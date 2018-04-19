import { TestBed, inject } from '@angular/core/testing';

import { AudioCounterService } from './audio-counter.service';

describe('AudioCounterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AudioCounterService]
    });
  });

  it('should be created', inject([AudioCounterService], (service: AudioCounterService) => {
    expect(service).toBeTruthy();
  }));
});
