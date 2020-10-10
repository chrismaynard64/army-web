import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import {
  exhaustMap,
  map,
  catchError,
  tap,
  switchMap
} from 'rxjs/operators';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import {
  WeaponActionTypes,
  InsertWeapon,
  InsertWeaponSuccess,
  InsertWeaponFail,
  SearchAllWeaponEntities,
  SearchAllWeaponEntitiesSuccess,
  SearchAllWeaponEntitiesFail,
  LoadWeaponById,
  LoadWeaponByIdSuccess,
  LoadWeaponByIdFail,
  UpdateWeapon,
  UpdateWeaponSuccess,
  UpdateWeaponFail,
  DeleteWeaponById,
  DeleteWeaponByIdSuccess,
  DeleteWeaponByIdFail,
  SetSearchQuery,
  SelectWeaponById
} from './weapon.actions';
import { Weapon } from './weapon.model';
import { WeaponService } from './weapon.service';

@Injectable()
export class WeaponEffects {

  // ========================================= INSERT
  @Effect()
  insert: Observable<Action> = this.actions$
    .pipe(
      ofType<InsertWeapon>(WeaponActionTypes.InsertWeapon),
      exhaustMap((action) =>
        this.service.create(action.payload.weapon).pipe(
          map((weapon: Weapon) => new InsertWeaponSuccess({ result: weapon })),
          catchError(({ message }) =>
            of(new InsertWeaponFail({ error: message }))
          )
        )
      )
    );

  // ========================================= SEARCH
  @Effect()
  search: Observable<Action> = this.actions$
  .pipe(
      ofType<SearchAllWeaponEntities>(WeaponActionTypes.SearchAllWeaponEntities),
      // Use the state's filtering and pagination values in this search call
      // here if desired:
      exhaustMap(() =>
        this.service.search().pipe(
          map((entities: Array<Weapon>) =>
            new SearchAllWeaponEntitiesSuccess({ result: entities })
          ),
          catchError(({ message }) =>
            of(new SearchAllWeaponEntitiesFail({ error: message }))
          )
        )
      )
    );

  // ========================================= LOAD BY ID
  @Effect()
  loadById: Observable<Action> = this.actions$
  .pipe(
      ofType<LoadWeaponById>(WeaponActionTypes.LoadWeaponById),
      switchMap((action) =>
        this.service.getById(action.payload.id).pipe(
          map((weapon: Weapon) => new LoadWeaponByIdSuccess({ result: weapon })
          ),
          catchError(({ message }) =>
            of(new LoadWeaponByIdFail({ error: message }))
          )
        )
      )
    );

  // ========================================= UPDATE
  @Effect()
  update: Observable<Action> = this.actions$
  .pipe(
      ofType<UpdateWeapon>(WeaponActionTypes.UpdateWeapon),
      exhaustMap((action) =>
        this.service.update(action.payload.weapon).pipe(
          map((weapon: Weapon) =>
            new UpdateWeaponSuccess({
              update: {
                id: weapon._id,
                changes: weapon
              } as Update<Weapon>
            })
          ),
          catchError(({ message }) =>
            of(new UpdateWeaponFail({ error: message }))
          )
        )
      )
    );

  // ========================================= DELETE
  @Effect()
  delete: Observable<Action> = this.actions$
  .pipe(
      ofType<DeleteWeaponById>(WeaponActionTypes.DeleteWeaponById),
      exhaustMap((action) =>
        this.service.deleteById(action.payload.id).pipe(
          map((id: string) => new DeleteWeaponByIdSuccess({ id })),
          catchError(({ message }) =>
            of(new DeleteWeaponByIdFail({ error: message }))
          )
        )
      )
    );

  // ========================================= QUERY
  @Effect({
    dispatch: false
  })
  paging: Observable<Action> = this.actions$
  .pipe(
      ofType<SetSearchQuery>(WeaponActionTypes.SetSearchQuery),
      tap((action) => {
        // do stuff with: action.payload.limit & action.payload.page
      })
    );

  // ========================================= SELECTED ID
  @Effect({
    dispatch: false
  })
  selectedId: Observable<Action> = this.actions$
  .pipe(
      ofType<SelectWeaponById>(WeaponActionTypes.SelectWeaponById),
      tap((action) => {
        // do stuff with: action.payload.id
      })
    );

  constructor(private actions$: Actions, private service: WeaponService) {}
}
