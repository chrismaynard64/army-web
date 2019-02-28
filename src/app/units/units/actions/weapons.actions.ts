import { Action } from '@ngrx/store';


import { Weapon } from '../../../model/Weapon';

export enum WeaponsActionTypes {
  LoadWeapons = '[Weapons] Load Weapons',
  LoadWeaponsSuccess = '[Weapons] Load Weapons Success',
  LoadWeaponsError = '[Weapons] Load Weapons Error'
}

export class LoadWeapons implements Action {
  readonly type = WeaponsActionTypes.LoadWeapons;
}

export class LoadWeaponsSuccess implements Action {
  readonly type = WeaponsActionTypes.LoadWeaponsSuccess;

  constructor( public payload: Weapon[]) {}
}

export class LoadWeaponsError implements Action {
  readonly type = WeaponsActionTypes.LoadWeaponsError;

  constructor() {}
}

export type WeaponsActions = LoadWeapons
  | LoadWeaponsSuccess
  | LoadWeaponsError;
