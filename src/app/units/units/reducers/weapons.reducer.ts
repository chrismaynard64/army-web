import { Action } from '@ngrx/store';
import { Weapon } from '../../../model/Weapon';
import { WeaponsActionTypes, WeaponsActions } from '../actions/Weapons.actions';


export interface State {
    allWeapons: Weapon[]
}

export const initialState: State = {
  allWeapons: []
};

export function reducer(state = initialState, action: WeaponsActions): State {
  let newState = null;
  let newWeapon: Weapon = null;

  switch (action.type) {
    case WeaponsActionTypes.LoadWeaponsSuccess:
         newState = {...state, allWeapons: []};
         newState.allWeapons = action.payload.slice(0);
        return newState;

/*
        case WizardsActionTypes.SaveWizardSuccess:
        newState = {...state, allWizards: []};
       //newState.wizardState = state.wizardState.slice(0)
       newWiz = action.payload;
       state.allWizards.forEach(e => {
           if (e._id != newWiz._id) {
             newState.allWizards.push(e);
           } else {
             newState.allWizards.push(newWiz);
           }
       })

       return newState;
*/
    default:
      return state;
  }
}
