import {
    ActionReducer,
    ActionReducerMap,
    createFeatureSelector,
    createSelector,
    MetaReducer
  } from '@ngrx/store';
  import { environment } from '../../../../environments/environment';

  import * as fromUnits from './units.reducer';
  import * as fromWeapons from '../../weapon/weapon.reducer';
  import * as fromRoot from '../../../store/reducers';

    // State for feature module
    export interface UnitsState {
        allUnits: fromUnits.State;
      }

    export interface State extends fromRoot.State {
        unitState: UnitsState;
    }

    export const reducers: ActionReducerMap<UnitsState> = {
        allUnits:   fromUnits.reducer,
      };

        
    export const selectUnitsState = createFeatureSelector<UnitsState>('units');
   
    export const selectUnits = createSelector(selectUnitsState, (state) => {
        console.log(state);
        return state.allUnits;
    });

/*
export const getAllUnits = createSelector(selectUnits, w =>{
    return  w.allUnits;
});

*/

  