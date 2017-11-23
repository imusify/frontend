import { TestBed, inject } from '@angular/core/testing';

import { PageActionsService } from './page-actions.service';

describe('PageActionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PageActionsService]
    });
  });

  it('should be created', inject([PageActionsService], (service: PageActionsService) => {
    expect(service).toBeTruthy();
  }));
});
