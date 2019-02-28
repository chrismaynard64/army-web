import { Action } from '@ngrx/store';
import { WeaponActions, WeaponActionTypes } from '../actions/weapon.actions';

export interface State {

}

export const initialState: State = {

};

export function reducer(state = initialState, action: WeaponActions): State {
  let newState = null;
  switch (action.type) {

    case WeaponActionTypes.LoadWeaponsSuccess:
    newState = {...state};
    newState.allWeapons = action.payload.slice(0);
    //adapter.(action.payload, state);
    return newState;


      return state;


    default:
      return state;
  }
}
