import { TestBed } from '@angular/core/testing';

import { SidenavStateService } from './sidenav-state.service';

describe('SidenavStateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SidenavStateService = TestBed.get(SidenavStateService);
    expect(service).toBeTruthy();
  });
});
