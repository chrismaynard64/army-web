import { LoadArmyError, LoadArmySuccess, LoadArmy, SaveArmy, SaveArmySuccess, SaveArmyError } from './../actions/armies.actions';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ArmiesActionTypes, LoadArmiesSuccess } from '../actions/armies.actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { UnitService } from 'src/app/services/unit.service';
import { of } from 'rxjs';
import { Army } from 'src/app/model/army';

@Injectable()
export class ArmiesEffects {

  @Effect()
  loadFoos$ = this.actions$.pipe(ofType(ArmiesActionTypes.LoadArmies),
  
  switchMap(() => {
    //  return this.http.get(`http://localhost/data/units.json`)
    return this.unitService.getArmies()
    //  return this.http.get('../../data/units.json')
       .pipe(
              map((response) => {
               //let data: Unit[] = response.json();
             // let data: Unit[] = response;
               let data: any = response;
               return new LoadArmiesSuccess(data);
             }),
             catchError((err) => {
               //return  new LoadArmiesSuccess(wizs);
               return of(new LoadArmiesSuccess([]));
             })
           
         )
     })
  
  );


  @Effect()
  loadArmy$ = this.actions$.pipe(ofType(ArmiesActionTypes.LoadArmy),
  
  switchMap((action) => {
    //  return this.http.get(`http://localhost/data/units.json`)
    let army = (<LoadArmy>action).payload;

    if (army && army == '-1') {
        
        return  of(new LoadArmySuccess(new Army()));

    }    else
    return this.unitService.getArmy(army)
    //  return this.http.get('../../data/units.json')
       .pipe(
              map((response) => {
               //let data: Unit[] = response.json();
             // let data: Unit[] = response;
               let data: any = response;
               return new LoadArmySuccess(data);
             }),
             catchError((err) => {
               //return  new LoadArmiesSuccess(wizs);
               return of(new LoadArmyError());
             })
           
         )
     })
  
  );

  @Effect()
  saveArmy$ = this.actions$.pipe(
    ofType(ArmiesActionTypes.SaveArmy),
    switchMap((data: SaveArmy) => {
   //  return this.http.get(`http://localhost/data/units.json`)

   return this.unitService.saveArmy(data.payload)
   //  return this.http.get('../../data/units.json')
      .pipe(
          map((response) => {
            //let data: Unit[] = response.json();
           // let data: Unit[] = response;
            let data: any = response;

           return new SaveArmySuccess(data);
          }),
          catchError((err) => {
            //return  new LoadUnitsSuccess(wizs);
            return of(new SaveArmyError());
          })
        )
    })
  );


  constructor(private actions$: Actions, private unitService: UnitService) {}
}
