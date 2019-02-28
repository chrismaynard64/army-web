import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { ArmiesEffects } from './armies.effects';

describe('ArmiesEffects', () => {
  let actions$: Observable<any>;
  let effects: ArmiesEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ArmiesEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(ArmiesEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
