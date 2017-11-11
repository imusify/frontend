import { TestBed, inject } from '@angular/core/testing';

import { InterceptedHttpService } from './intercepted-http.service';

describe('InterceptedHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InterceptedHttpService]
    });
  });

  it('should be created', inject([InterceptedHttpService], (service: InterceptedHttpService) => {
    expect(service).toBeTruthy();
  }));
});
