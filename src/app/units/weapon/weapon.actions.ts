import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Weapon } from './weapon.model';
import { WeaponSearchQuery } from './weapon.reducer';

export enum WeaponActionTypes {
  InsertWeapon = '[Weapon] Insert',
  InsertWeaponSuccess = '[Weapon] Insert Success',
  InsertWeaponFail = '[Weapon] Insert Fail',

  SearchAllWeaponEntities = '[Weapon] Search',
  SearchAllWeaponEntitiesSuccess = '[Weapon] Search Success',
  SearchAllWeaponEntitiesFail = '[Weapon] Search Fail',

  LoadWeaponById = '[Weapon] Load By ID',
  LoadWeaponByIdSuccess = '[Weapon] Load Success',
  LoadWeaponByIdFail = '[Weapon] Load Fail',

  UpdateWeapon = '[Weapon] Update',
  UpdateWeaponSuccess = '[Weapon] Update Success',
  UpdateWeaponFail = '[Weapon] Update Fail',

  DeleteWeaponById = '[Weapon] Delete By ID',
  DeleteWeaponByIdSuccess = '[Weapon] Delete Success',
  DeleteWeaponByIdFail = '[Weapon] Delete Fail',

  SetSearchQuery = '[Weapon] Set Search Query',
  SelectWeaponById = '[Weapon] Select By ID'
}

// ========================================= INSERT

export class InsertWeapon implements Action {
  readonly type = WeaponActionTypes.InsertWeapon;
  constructor(public payload: { weapon: Weapon }) {}
}

export class InsertWeaponSuccess implements Action {
  readonly type = WeaponActionTypes.InsertWeaponSuccess;
  constructor(public payload: { result: Weapon }) {}
}

export class InsertWeaponFail implements Action {
  readonly type = WeaponActionTypes.InsertWeaponFail;
  constructor(public payload: { error: string }) {}
}

// ========================================= SEARCH

export class SearchAllWeaponEntities implements Action {
  readonly type = WeaponActionTypes.SearchAllWeaponEntities;
}

export class SearchAllWeaponEntitiesSuccess implements Action {
  readonly type = WeaponActionTypes.SearchAllWeaponEntitiesSuccess;
  constructor(public payload: { result: Array<Weapon> }) {}
}

export class SearchAllWeaponEntitiesFail implements Action {
  readonly type = WeaponActionTypes.SearchAllWeaponEntitiesFail;
  constructor(public payload: { error: string }) {}
}

// ========================================= LOAD BY ID

export class LoadWeaponById implements Action {
  readonly type = WeaponActionTypes.LoadWeaponById;
  constructor(public payload: { id: string }) {}
}

export class LoadWeaponByIdSuccess implements Action {
  readonly type = WeaponActionTypes.LoadWeaponByIdSuccess;
  constructor(public payload: { result: Weapon }) {}
}

export class LoadWeaponByIdFail implements Action {
  readonly type = WeaponActionTypes.LoadWeaponByIdFail;
  constructor(public payload: { error: string }) {}
}

// ========================================= UPDATE

export class UpdateWeapon implements Action {
  readonly type = WeaponActionTypes.UpdateWeapon;
  constructor(public payload: { weapon: Weapon }) {}
}

export class UpdateWeaponSuccess implements Action {
  readonly type = WeaponActionTypes.UpdateWeaponSuccess;
  constructor(public payload: { update: Update<Weapon> }) {}
}

export class UpdateWeaponFail implements Action {
  readonly type = WeaponActionTypes.UpdateWeaponFail;
  constructor(public payload: { error: string }) {}
}

// ========================================= DELETE

export class DeleteWeaponById implements Action {
  readonly type = WeaponActionTypes.DeleteWeaponById;
  constructor(public payload: { id: string }) {}
}

export class DeleteWeaponByIdSuccess implements Action {
  readonly type = WeaponActionTypes.DeleteWeaponByIdSuccess;
  constructor(public payload: { id: string }) {}
}

export class DeleteWeaponByIdFail implements Action {
  readonly type = WeaponActionTypes.DeleteWeaponByIdFail;
  constructor(public payload: { error: string }) {}
}

// ========================================= QUERY

export class SetSearchQuery implements Action {
  readonly type = WeaponActionTypes.SetSearchQuery;
  constructor(public payload: Partial<WeaponSearchQuery>) {}
}

// ========================================= SELECTED ID

export class SelectWeaponById implements Action {
  readonly type = WeaponActionTypes.SelectWeaponById;
  constructor(public payload: { id: string }) {}
}

export type WeaponActions =
  | InsertWeapon
  | InsertWeaponSuccess
  | InsertWeaponFail
  | SearchAllWeaponEntities
  | SearchAllWeaponEntitiesSuccess
  | SearchAllWeaponEntitiesFail
  | LoadWeaponById
  | LoadWeaponByIdSuccess
  | LoadWeaponByIdFail
  | UpdateWeapon   
  | UpdateWeaponSuccess
  | UpdateWeaponFail
  | DeleteWeaponById
  | DeleteWeaponByIdSuccess
  | DeleteWeaponByIdFail
  | SetSearchQuery
  | SelectWeaponById;
