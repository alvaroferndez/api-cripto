import { TestBed } from '@angular/core/testing';

import { PrivacidadGuard } from './privacidad.guard';

describe('PrivacidadGuard', () => {
  let guard: PrivacidadGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PrivacidadGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
