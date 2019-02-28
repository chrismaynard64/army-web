import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Unit } from '../model/unit';
import { Weapon } from '../model/Weapon';

@Injectable({
  providedIn: 'root'
})
export class UnitMessageService {

  private subject = new Subject<Unit>();
  private WeaponSubject = new Subject<Weapon>();
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


  public sendWeaponMessage(Weapon: Weapon) {
    this.WeaponSubject.next(Weapon);
}

public clearWeaponMessage() {
    this.WeaponSubject.next();
}

public getWeaponMessage(): Observable<Weapon> {
    return this.WeaponSubject.asObservable();
}


}
