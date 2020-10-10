import { Army } from 'src/app/model/army';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { UnitsActionTypes, SaveUnitSuccess, SaveUnitError, LoadUnitsTestSuccess, SaveUnit,
   DeleteUnitSuccess, SaveUnitToArmy} from '../actions/units.actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { UnitService } from '../../../services/unit.service';
import { Unit } from '../../../model/unit';
import { LoadUnitsSuccess } from '../actions/units.actions';
import { WeaponsActionTypes, LoadWeaponsSuccess, LoadWeaponsError } from '../actions/Weapons.actions';
import { Weapon } from 'src/app/units/weapon/weapon.model';
import { Http } from '@angular/http';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/reducers';
import { SaveArmy, SaveUnitToArmySuccess, LoadArmy } from '../../armies/actions/armies.actions';

@Injectable()
export class UnitsEffects {



  //@Effect({dispatch: false})
  @Effect()
  loadUnits$ = this.actions$.pipe(
    ofType(UnitsActionTypes.LoadUnits),
    switchMap(() => {
   //  return this.http.get(`http://localhost/data/units.json`)
   return this.unitService.getUnits()
   //  return this.http.get('../../data/units.json')
      .pipe(
             map((response) => {
              //let data: Unit[] = response.json();
            // let data: Unit[] = response;
              let data: any = response;
              return new LoadUnitsSuccess(data);
            }),
            catchError((err) => {
              //return  new LoadUnitsSuccess(wizs);
              return of(new LoadUnitsSuccess([]));
            })
          
        )
    })
  );

  @Effect()
  saveUnit$ = this.actions$.pipe(
    ofType(UnitsActionTypes.SaveUnit),
    switchMap((data: SaveUnit) => {
   //  return this.http.get(`http://localhost/data/units.json`)
   let newUnit = data.payload.new;
   return this.unitService.saveUnit(data.payload)
   //  return this.http.get('../../data/units.json')
      .pipe(
          map((response) => {
            //let data: Unit[] = response.json();
           // let data: Unit[] = response;
            let data: any = response;

           // if (newUnit)
             // this.store.dispatch(new SaveUnitToArmy(data))
             if (newUnit) {
              this.store.dispatch(new LoadArmy(typeof data.army == 'object' ? data.army._id : data.army ));
               return new SaveUnitSuccess(data);
               //  return [new SaveUnitSuccess(data), new LoadArmy(data.army)];
             }
              else {
                this.store.dispatch(new LoadArmy(typeof data.army == 'object' ? data.army._id : data.army));
                return new SaveUnitSuccess(data);
              //return [new SaveUnitSuccess(data), new LoadArmy(data.army)];
              }
          }),
          catchError((err) => {
            //return  new LoadUnitsSuccess(wizs);
            return of(new SaveUnitError());
          })
        )
    })
  );


  @Effect()
  saveUnitToArmy$ = this.actions$.pipe(
    ofType(UnitsActionTypes.SaveUnitToArmy),
    switchMap((data: SaveUnit) => {
   //  return this.http.get(`http://localhost/data/units.json`)
   let newUnit = data.payload.new;
   return this.unitService.saveUnitToArmy(data.payload)
   //  return this.http.get('../../data/units.json')
      .pipe(
          map((response) => {
            //let data: Unit[] = response.json();
           // let data: Unit[] = response;
            let data: any = response;

            return [new SaveUnitToArmySuccess(data),
              new LoadArmy(data.army)];
          }),
          catchError((err) => {
            //return  new LoadUnitsSuccess(wizs);
            return of(new SaveUnitError());
          })
        )
    })
  );
  
  @Effect()
  deleteUnit$ = this.actions$.pipe(
    ofType(UnitsActionTypes.DeleteUnit),
    switchMap((data: SaveUnit) => {
   //  return this.http.get(`http://localhost/data/units.json`)
   return this.unitService.deleteUnit(data.payload)
   //  return this.http.get('../../data/units.json')
      .pipe(
          map((response) => {
            //let data: Unit[] = response.json();
           // let data: Unit[] = response;
            //let data: any = response;
            return new DeleteUnitSuccess(data.payload);
          }),
          catchError((err) => {
            //return  new LoadUnitsSuccess(wizs);
            return of(new SaveUnitError());
          })
        )     
    })
  );


  @Effect()
  loadWeapons$ = this.actions$.pipe(
    ofType(WeaponsActionTypes.LoadWeapons),
    switchMap(() => {
   //  return this.http.get(`http://localhost/data/units.json`)
   return this.unitService.getWeapons()
   //  return this.http.get('../../data/units.json')
      .pipe(
          map((response) => {
           // let data: Weapon[] = response.json();
            let data: any = response;
            return new LoadWeaponsSuccess(data);
          }),
          catchError((err) => {
            //return  new LoadUnitsSuccess(wizs);
            return of(new LoadWeaponsError());
          })
        )
    })
  );



  constructor(private actions$: Actions, private unitService: UnitService, private store: Store<State>) {}
}
