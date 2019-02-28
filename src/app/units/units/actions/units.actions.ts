import { Action } from '@ngrx/store';


import { Unit } from '../../../model/unit';
import { Army } from 'src/app/model/army';

export enum UnitsActionTypes {
  LoadUnits = '[Units] Load Units',
  LoadUnitsSuccess = '[Units] Load Units Success',
  LoadUnitsError = '[Units] Load Units Error',

  SaveUnit = '[Units] Save Units',
  SaveUnitSuccess = '[Units] Save Units Success',
  SaveUnitError = '[Units] Save Units Error',

  DeleteUnit = '[Units] Delete Unit',
  DeleteUnitSuccess = '[Units] Delete Unit Success',
  DeleteUnitError = '[Units] Delete Unit Error',

  SaveUnitToArmy = '[Units] Save Units to Army',


}

export class LoadUnits implements Action {
  readonly type = UnitsActionTypes.LoadUnits;
}

export class LoadUnitsSuccess implements Action {
  readonly type = UnitsActionTypes.LoadUnitsSuccess;

  constructor( public payload: Unit[]) {}
}


export class LoadUnitsTestSuccess implements Action {
  readonly type = 'REALLY JUST TESTING';

  constructor( public payload: Unit[]) {}
}



export class SaveUnit implements Action {
  readonly type = UnitsActionTypes.SaveUnit;
  constructor( public payload: Unit) {}
}

export class SaveUnitSuccess implements Action {
  readonly type = UnitsActionTypes.SaveUnitSuccess;

  constructor( public payload: Unit) {}
}


export class SaveUnitToArmy implements Action {
  readonly type = UnitsActionTypes.SaveUnitToArmy;
  constructor( public payload: Unit) {}
}



export class SaveUnitError implements Action {
  readonly type = UnitsActionTypes.SaveUnitError;

  constructor() {}
}



export class DeleteUnit implements Action {
  readonly type = UnitsActionTypes.DeleteUnit;
  constructor( public payload: Unit) {}
}

export class DeleteUnitSuccess implements Action {
  readonly type = UnitsActionTypes.DeleteUnitSuccess;

  constructor( public payload: Unit) {}
}

export class DeleteUnitError implements Action {
  readonly type = UnitsActionTypes.DeleteUnitError;

  constructor() {}
}


export type UnitsActions = LoadUnits
  | LoadUnitsSuccess
  | SaveUnit
  | SaveUnitSuccess
  | SaveUnitError
  | DeleteUnit
  | DeleteUnitSuccess
  | DeleteUnitError
  | SaveUnitToArmy


  ;
