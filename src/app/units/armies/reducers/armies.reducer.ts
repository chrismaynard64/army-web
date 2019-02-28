import { Action } from '@ngrx/store';
import { ArmiesActions, ArmiesActionTypes } from '../actions/armies.actions';
import { Army } from 'src/app/model/army';
import { adapter, ArmiesState } from '.';


export interface State {
  allArmies: Army[]
}


export const initialState: ArmiesState = {
  ...adapter.getInitialState(),
  ...{ allArmies: {allArmies: []}}
}
;

  //


export function reducer(state = initialState, action: ArmiesActions): ArmiesState {
  let newState = null;
  switch (action.type) {

    case ArmiesActionTypes.LoadArmiesSuccess:
      newState = {...state};
      newState.allArmies = action.payload.slice(0);
      //adapter.(action.payload, state);
      return newState;

      
    case ArmiesActionTypes.LoadArmySuccess:
      return adapter.upsertOne(action.payload, state);
   
    case ArmiesActionTypes.NewArmy:
       return state;
  /*
    return adapter.updateOne({
      id: action.payload._id,
      changes: action.payload,
    }, state); */
 

    case ArmiesActionTypes.SaveArmySuccess:
        return adapter.upsertOne(action.payload, state);


    default:
      return state;
  }
}
