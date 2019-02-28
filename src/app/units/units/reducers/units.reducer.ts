import { Action } from '@ngrx/store';
import { UnitsActions, UnitsActionTypes } from '../actions/units.actions';

import { Unit } from '../../../model/unit';
import { ArmiesActionTypes } from '../../armies/actions/armies.actions';

export interface State {
  allUnits: Unit[];
}

export const initialState: State = {
  allUnits: []
};

export function reducer(state = initialState, action: UnitsActions): State {
  let newState = null;
  let newWiz: Unit = null;

  switch (action.type) {
    
    case UnitsActionTypes.LoadUnitsSuccess:
         newState = {...state, allUnits: []};
         newState.allUnits = action.payload.slice(0);
        return newState;


    case UnitsActionTypes.SaveUnitSuccess:
        newState = {...state, allUnits: []};
       //newState.unitState = state.unitState.slice(0)
       newWiz = action.payload;
       let addedNew = false;
       state.allUnits.forEach(e => {
           if (e._id != newWiz._id) {
             newState.allUnits.push(e);
           } else {
             newState.allUnits.push(newWiz);
             addedNew = true;
           }
       });

       if (!addedNew) {
        newState.allUnits.push(newWiz);
       }

       return newState;

  //     case ArmiesActionTypes.SaveUnitToArmySuccess:
  //     return state;


    case UnitsActionTypes.DeleteUnitSuccess:
         newState = {...state, allUnits: []};
        //newState.unitState = state.unitState.slice(0)
        newWiz = action.payload;
        state.allUnits.forEach(e => {
            if (e._id != newWiz._id) {
              newState.allUnits.push(e);
            } 
        })

        return newState;

    default:
      return state;
  }
}
