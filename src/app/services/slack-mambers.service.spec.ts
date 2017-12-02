import { TestBed, inject } from '@angular/core/testing';

import { SlackMambersService } from './slack-mambers.service';

describe('SlackMambersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SlackMambersService]
    });
  });

  it('should be created', inject([SlackMambersService], (service: SlackMambersService) => {
    expect(service).toBeTruthy();
  }));
});
