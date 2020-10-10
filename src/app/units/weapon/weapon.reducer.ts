import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Weapon } from './weapon.model';
import { WeaponActions, WeaponActionTypes } from './weapon.actions';

export interface WeaponSearchQuery {
  filter: string;
  sorting: string;
  limit: number;
  page: number;
}

export interface WeaponState extends EntityState<Weapon> {
  // additional entities state properties
  selectedId: string;
  loading: boolean;
  error: string;
  query: WeaponSearchQuery;
}

export const adapter: EntityAdapter<Weapon> = createEntityAdapter<Weapon>({
  selectId: (weapon: Weapon) => weapon._id,
});

export const initialState: WeaponState = adapter.getInitialState({
  // additional weapon state properties
  selectedId: null,
  loading: false,
  error: '',
  query: {
    filter: '',
    sorting: '',
    limit: 999,
    page: 1
  }
});

export function weaponReducer(state = initialState, action: WeaponActions): WeaponState {
  switch (action.type) {
    case WeaponActionTypes.InsertWeapon:
      return {
        ...state,
        loading: true,
        error: ''
      };
   
    case WeaponActionTypes.InsertWeaponSuccess:
      return {
        ...adapter.addOne(action.payload.result, state),
        loading: false,
        error: ''
      };

    case WeaponActionTypes.InsertWeaponFail:
      return {
        ...state,
        loading: false,
        error: 'Weapon insert failed: ' + action.payload.error
      };

    case WeaponActionTypes.SearchAllWeaponEntities:
      return {
        ...adapter.removeAll(state),
        loading: true,
        error: ''
      };

    case WeaponActionTypes.SearchAllWeaponEntitiesSuccess:
      return {
        ...adapter.addAll(action.payload.result, state),
        loading: false,
        error: ''
      };

    case WeaponActionTypes.SearchAllWeaponEntitiesFail:
      return {
        ...state,
        loading: false,
        error: 'Weapon search failed: ' + action.payload.error
      };

    case WeaponActionTypes.LoadWeaponById:
      return {
        ...adapter.removeAll(state),
        selectedId: action.payload.id,
        loading: true,
        error: ''
      };

    case WeaponActionTypes.LoadWeaponByIdSuccess:
      return {
        ...adapter.addOne(action.payload.result, state),
        loading: false,
        error: ''
      };

    case WeaponActionTypes.LoadWeaponByIdFail:
      return {
        ...state,
        loading: false,
        error: 'Weapon load failed: ' + action.payload.error
      };

    case WeaponActionTypes.UpdateWeapon:
      return {
        ...state,
        loading: true,
        error: ''
      };

    case WeaponActionTypes.UpdateWeaponSuccess:
      return {
        ...adapter.updateOne(action.payload.update, state),
        loading: false,
        error: ''
      };

    case WeaponActionTypes.UpdateWeaponFail:
      return {
        ...state,
        loading: false,
        error: 'Weapon update failed: ' + action.payload.error
      };

    case WeaponActionTypes.DeleteWeaponById:
      return {
        ...state,
        selectedId: action.payload.id,
        loading: true,
        error: ''
      };

    case WeaponActionTypes.DeleteWeaponByIdSuccess:
      return {
        ...adapter.removeOne(action.payload.id, state),
        loading: false,
        error: ''
      };

    case WeaponActionTypes.DeleteWeaponByIdFail:
      return {
        ...state,
        loading: false,
        error: 'Weapon delete failed: ' + action.payload.error
      };

    case WeaponActionTypes.SetSearchQuery:
      return {
        ...state,
        query: {
          ...state.query,
          ...action.payload
        }
      };

    case WeaponActionTypes.SelectWeaponById:
      return {
        ...state,
        selectedId: action.payload.id,
        error: ''
      };

    default:
      return state;
  }
}

export const getSelectedId = (state: WeaponState) => state.selectedId;
export const getLoading = (state: WeaponState) => state.loading;
export const getError = (state: WeaponState) => state.error;
export const getQuery = (state: WeaponState) => state.query;
