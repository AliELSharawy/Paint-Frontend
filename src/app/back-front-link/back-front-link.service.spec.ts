import { TestBed } from '@angular/core/testing';

import { BackFrontLinkService } from './back-front-link.service';

describe('BackFrontLinkService', () => {
  let service: BackFrontLinkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackFrontLinkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
