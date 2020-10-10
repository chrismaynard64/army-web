import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Unit } from '../model/unit';
import { Weapon } from 'src/app/units/weapon/weapon.model';


export enum ActionType {

    selectAll = 1,
    edit,
    selectOne,
    create,
    update,
    delete,
}

export interface ActionPayload {
    action: ActionType,
    payload: any
}

@Injectable({
  providedIn: 'root'
})
export class UnitMessageService {

  private subject = new Subject<Unit>();
  private WeaponSubject = new Subject<ActionPayload>();
  private saveUnitSubject = new Subject<Unit>();
  private deleteUnitSubject = new Subject<Unit>();
 
  constructor() { }

  public sendMessage(wiz: Unit) {
      this.subject.next(wiz);
  }



  public saveUnitMessage(wiz: Unit) {
    this.saveUnitSubject.next(wiz);
}

public deleteUnitMessage(wiz: Unit) {
    this.deleteUnitSubject.next(wiz);
}

public getSaveUnitMessage(): Observable<Unit> {
    return this.saveUnitSubject.asObservable();
}

public getDeleteUnitMessage(): Observable<Unit> {
    return this.deleteUnitSubject.asObservable();
}

  public clearMessage() {
      this.subject.next();
  }

  public getMessage(): Observable<Unit> {
      return this.subject.asObservable();
  }


  public sendWeaponMessage(weapon: Weapon) {
    this.WeaponSubject.next({action: ActionType.edit, payload: weapon});
}

public sendWeaponSaveMessage(weapon: Weapon) {
    this.WeaponSubject.next({action: ActionType.update, payload: weapon});
}

public sendWeaponCreateMessage(weapon: Weapon) {
    this.WeaponSubject.next({action: ActionType.create, payload: weapon});
}

public sendWeaponDeleteMessage(weapon: Weapon) {
    this.WeaponSubject.next({action: ActionType.delete, payload: weapon});
}

public clearWeaponMessage() {
    this.WeaponSubject.next();
}

public getWeaponMessage(): Observable<ActionPayload> {
    return this.WeaponSubject.asObservable();
}


}
