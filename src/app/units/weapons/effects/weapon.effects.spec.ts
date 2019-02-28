import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { WeaponEffects } from './weapon.effects';

describe('WeaponEffects', () => {
  let actions$: Observable<any>;
  let effects: WeaponEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        WeaponEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(WeaponEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
