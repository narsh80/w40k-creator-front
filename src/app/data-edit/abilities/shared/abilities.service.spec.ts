import { TestBed, inject } from '@angular/core/testing';

import { AbilitiesService } from './abilities.service';

describe('AbilitiesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AbilitiesService]
    });
  });

  it('should be created', inject([AbilitiesService], (service: AbilitiesService) => {
    expect(service).toBeTruthy();
  }));
});
