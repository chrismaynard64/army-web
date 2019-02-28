import { Action } from '@ngrx/store';
import { Weapon } from 'src/app/model/Weapon';

export enum WeaponActionTypes {
  LoadWeapons = '[Weapon] Load Weapons',
  LoadWeaponsSuccess = '[Weapons] Load Weapons Success',
  LoadWeaponsError = '[Weapons] Load Weapons Error',

  
  LoadWeapon = '[Weapon] Load Weapon',
  LoadWeaponSuccess = '[Weapon] Load Weapon Success',
  LoadWeaponError = '[Weapon] Load Weapon Error',
}

export class LoadWeapons implements Action {
  readonly type = WeaponActionTypes.LoadWeapons;

  constructor() {}
}
  
export class LoadWeaponsSuccess implements Action {
  readonly type = WeaponActionTypes.LoadWeaponsSuccess;

  constructor( public payload: Weapon[]) {}
}
export class LoadWeaponsError implements Action {
  readonly type = WeaponActionTypes.LoadWeaponsError;

  constructor(public error) {}
}


export class LoadWeapon implements Action {
  readonly type = WeaponActionTypes.LoadWeapon;

  constructor( public payload: string) {}
}

export class LoadWeaponSuccess implements Action {
  readonly type = WeaponActionTypes.LoadWeaponSuccess;

  constructor( public payload: Weapon) {}
}
export class LoadWeaponError implements Action {
  readonly type = WeaponActionTypes.LoadWeaponError;

  constructor() {}
}


export type WeaponActions = LoadWeapons
| LoadWeaponsSuccess
| LoadWeaponsError
| LoadWeapon
| LoadWeaponSuccess
| LoadWeaponError;
