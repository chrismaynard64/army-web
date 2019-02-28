import {
    ActionReducer,
    ActionReducerMap,
    createFeatureSelector,
    createSelector,
    MetaReducer,
    Action
  } from '@ngrx/store';
  import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
  import { environment } from '../../../../environments/environment';



  import * as fromArmies from './armies.reducer';
  import * as fromRoot from '../../../store/reducers';
import { Army } from 'src/app/model/army';

    // State for feature module
    export interface ArmiesState extends EntityState<Army> {
        allArmies: fromArmies.State;
     }  

    export interface State extends fromRoot.State {   
            armiesState: ArmiesState;
    }
/*
    export const reducers: ActionReducerMap<ArmiesState, Action> = {
        allArmies:   fromArmies.reducer,

      };
*/

  export const adapter: EntityAdapter<Army> = createEntityAdapter<Army>({
      selectId: (army: Army) => army._id
  });
        
   export const selectArmiesState = createFeatureSelector<ArmiesState>('armies');

   export const selectArmyById = (armyId: string) => createSelector(selectArmiesState, (state) => {
    console.log(state);
    return armyId == '-1' ? new Army() : state.entities[armyId];
});

   
  export const selectArmies = createSelector(selectArmiesState, (state) => {
        console.log(state);
        return state.allArmies;
    });
 


/*
export const getAllArmies = createSelector(selectArmies, w =>{
    return  w.allArmies;
});
export const getAllWeapons = createSelector(selectWeapons, s => {
    return s.WeaponState;
});
*/

  