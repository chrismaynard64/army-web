import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { WizardsEffects } from '../wizards.effects';

describe('WizardsEffects', () => {
  let actions$: Observable<any>;
  let effects: WizardsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        WizardsEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(WizardsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
