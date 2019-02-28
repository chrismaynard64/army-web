import { Action } from '@ngrx/store';
import { Army } from 'src/app/model/army';

export enum ArmiesActionTypes {
  LoadArmies = '[Armies] Load Armies',
  LoadArmiesSuccess = '[Armies] Load Armies Success',
  LoadArmiesError = '[Armies] Load Armies Error',

  LoadArmy = '[Army] Load Army',
  LoadArmySuccess = '[Army] Load Army Success',
  LoadArmyError = '[Army] Load Army Error',

  SaveArmy = '[Army] Save Army',
  SaveArmySuccess = '[Army] Save Army Success',
  SaveArmyError = '[Army] Save Army Error',

  DeleteArmy = '[Army] Delete Army',
  DeleteArmySuccess = '[Army] Delete Army Success',
  DeleteArmyError = '[Army] Delete Army Error',
  
  SaveUnitToArmySuccess = '[Units] Save Units Success',
  NewArmy = '[Army] New Army',


}

export class LoadArmies implements Action {
  readonly type = ArmiesActionTypes.LoadArmies;
}

export class LoadArmiesSuccess implements Action {
  readonly type = ArmiesActionTypes.LoadArmiesSuccess;

  constructor( public payload: Army[]) {}
}
export class LoadArmiesError implements Action {
  readonly type = ArmiesActionTypes.LoadArmiesError;

  constructor(public error) {}
}


export class LoadArmy implements Action {
  readonly type = ArmiesActionTypes.LoadArmy;

  constructor( public payload: string) {}
}

export class LoadArmySuccess implements Action {
  readonly type = ArmiesActionTypes.LoadArmySuccess;

  constructor( public payload: Army) {}
}
export class LoadArmyError implements Action {
  readonly type = ArmiesActionTypes.LoadArmyError;

  constructor() {}
}


export class SaveArmy implements Action {
  readonly type = ArmiesActionTypes.SaveArmy;

  constructor( public payload: Army) {}
}

export class SaveArmySuccess implements Action {
  readonly type = ArmiesActionTypes.SaveArmySuccess;

  constructor( public payload: Army) {}
}

export class NewArmy implements Action {
  readonly type = ArmiesActionTypes.NewArmy;

  constructor( public payload: Army) {}
}
export class SaveArmyError implements Action {
  readonly type = ArmiesActionTypes.SaveArmyError;

  constructor() {}
}


export class SaveUnitToArmySuccess implements Action {
  readonly type = ArmiesActionTypes.SaveUnitToArmySuccess;

  constructor( public payload: Army) {}
}

export type ArmiesActions = LoadArmies
| LoadArmiesSuccess
| LoadArmiesError
| LoadArmy
| LoadArmySuccess
| LoadArmyError
| SaveArmy
| SaveArmySuccess
| SaveArmyError
| SaveUnitToArmySuccess
| NewArmy;
  