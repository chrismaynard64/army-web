import { TestBed } from '@angular/core/testing';

import { UnitMessageService } from './unit-message.service';

describe('UnitMessageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UnitMessageService = TestBed.get(UnitMessageService);
    expect(service).toBeTruthy();
  });
});
