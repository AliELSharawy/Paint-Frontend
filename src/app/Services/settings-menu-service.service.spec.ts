import { TestBed } from '@angular/core/testing';

import { SettingsMenuServiceService } from './settings-menu-service.service';

describe('SettingsMenuServiceService', () => {
  let service: SettingsMenuServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SettingsMenuServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
