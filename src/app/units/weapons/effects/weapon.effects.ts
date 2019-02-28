import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { WeaponActionTypes, LoadWeapons, LoadWeaponsSuccess, LoadWeapon, LoadWeaponSuccess, LoadWeaponError } from '../actions/weapon.actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { Weapon } from 'src/app/model/Weapon';
import { of } from 'rxjs';
import { UnitService } from 'src/app/services/unit.service';

@Injectable()
export class WeaponEffects {


  @Effect()
  loadWeapons$ = this.actions$.pipe(ofType(WeaponActionTypes.LoadWeapons),
  
  switchMap(() => {
    //  return this.http.get(`http://localhost/data/units.json`)
    return this.unitService.getWeapons()
    //  return this.http.get('../../data/units.json')
       .pipe(
              map((response) => {
               //let data: Unit[] = response.json();
             // let data: Unit[] = response;
               let data: any = response;
               return new LoadWeaponsSuccess(data);
             }),
             catchError((err) => {
               //return  new LoadWeaponsSuccess(wizs);
               return of(new LoadWeaponsSuccess([]));
             })
           
         )
     })
  
  );



  @Effect()
  loadWeapon$ = this.actions$.pipe(ofType(WeaponActionTypes.LoadWeapons),
  
  
  switchMap((action) => {
    //  return this.http.get(`http://localhost/data/units.json`)
    let weapon = (<LoadWeapon>action).payload;

    if (weapon && weapon == '-1') {
        
        return  of(new LoadWeaponSuccess(new Weapon()));

    }    else
    return this.unitService.getWeapon(weapon)
    //  return this.http.get('../../data/units.json')
       .pipe(
              map((response) => {
               //let data: Unit[] = response.json();
             // let data: Unit[] = response;
               let data: any = response;
               return new LoadWeaponSuccess(data);
             }),
             catchError((err) => {
               //return  new LoadWeaponsSuccess(wizs);
               return of(new LoadWeaponError());
             })
           
         )
     })
  
  
  
  );

  constructor(private actions$: Actions, private unitService: UnitService) {}
}
