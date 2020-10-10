import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { cold, hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';

import {
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
  DeleteWeaponByIdFail
} from './weapon.actions';
import { generateWeapon, generateWeaponArray } from './weapon.model';
// TODO: Change this path when you move your service file:
import { WeaponService } from './weapon.service';
import { WeaponEffects } from './weapon.effects';

describe('WeaponEffects', () => {
  let actions: Observable<any>;
  let effects: WeaponEffects;
  let service;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        WeaponEffects,
        provideMockActions(() => actions),
        {
          provide: WeaponService,
          useValue: jasmine.createSpyObj('service', [
            'create',
            'search',
            'getById',
            'update',
            'deleteById'
          ])
        }
      ]
    });

    effects = TestBed.get(WeaponEffects);
    service = TestBed.get(WeaponService);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('insert', () => {
    it('should return InsertWeaponSuccess action with entity on success', () => {
      const entity = generateWeapon();
      const insertAction = new InsertWeapon({ weapon: entity });
      const successAction = new InsertWeaponSuccess({ result: entity });

      actions = hot('a-', { a: insertAction });
      service.create.and.returnValue(cold('-e|', { e: entity }));
      const expected = cold('-s', { s: successAction });

      expect(effects.insert).toBeObservable(expected);
    });

    it('should return InsertWeaponFail with error object on failure', () => {
      const entity = generateWeapon();
      const insertAction = new InsertWeapon({ weapon: entity });
      const failAction = new InsertWeaponFail({ error: 'fail' });

      actions = hot('i-', { i: insertAction });
      service.create.and.returnValue(cold('-#|', {}, { message: 'fail'}));
      const expected = cold('-f', { f: failAction });

      expect(effects.insert).toBeObservable(expected);
    });
  });

  describe('search', () => {
    it('should return SearchAllWeaponEntitiesSuccess action with entities on success', () => {
      const entities = generateWeaponArray();
      const searchAction = new SearchAllWeaponEntities();
      const successAction = new SearchAllWeaponEntitiesSuccess({ result: entities });

      actions = hot('a-', { a: searchAction });
      service.search.and.returnValue(cold('-e|', { e: entities }));
      const expected = cold('-s', { s: successAction });

      expect(effects.search).toBeObservable(expected);
    });

    it('should return SearchAllWeaponEntitiesFail with error object on failure', () => {
      const searchAction = new SearchAllWeaponEntities();
      const failAction = new SearchAllWeaponEntitiesFail({ error: 'fail' });

      actions = hot('a-', { a: searchAction });
      service.search.and.returnValue(cold('-#|', {}, { message: 'fail'}));
      const expected = cold('-f', { f: failAction });

      expect(effects.search).toBeObservable(expected);
    });
  });

  describe('loadById', () => {
    it('should return LoadWeaponByIdSuccess action with entity on success', () => {
      const entity = generateWeapon();
      const loadAction = new LoadWeaponById({ id: entity.id });
      const successAction = new LoadWeaponByIdSuccess({ result: entity});

      actions = hot('a-', { a: loadAction });
      service.getById.and.returnValue(cold('-e|', { e: entity }));
      const expected = cold('-s', { s: successAction });

      expect(effects.loadById).toBeObservable(expected);
    });

    it('should return LoadWeaponByIdFail with error object on failure', () => {
      const entity = generateWeapon();
      const loadAction = new LoadWeaponById({ id: entity.id });
      const failAction = new LoadWeaponByIdFail({ error: 'fail' });

      actions = hot('a-', { a: loadAction });
      service.getById.and.returnValue(cold('-#|', {}, { message: 'fail'}));
      const expected = cold('-f', { f: failAction });

      expect(effects.loadById).toBeObservable(expected);
    });
  });

  describe('update', () => {
    it('should return UpdateWeaponSuccess action with entity on success', () => {
      const entity = generateWeapon();
      const updateAction = new UpdateWeapon({ weapon: entity });
      const successAction = new UpdateWeaponSuccess({ update: {
        id: entity.id,
        changes: entity
      }});

      actions = hot('a-', { a: updateAction });
      service.update.and.returnValue(cold('-e|', { e: entity }));
      const expected = cold('-s', { s: successAction });

      expect(effects.update).toBeObservable(expected);
    });

    it('should return UpdateWeaponFail with error object on failure', () => {
      const entity = generateWeapon();
      const updateAction = new UpdateWeapon({ weapon: entity });
      const failAction = new UpdateWeaponFail({ error: 'fail' });

      actions = hot('a-', { a: updateAction });
      service.update.and.returnValue(cold('-#|', {}, { message: 'fail'}));
      const expected = cold('-f', { f: failAction });

      expect(effects.update).toBeObservable(expected);
    });
  });

  describe('delete', () => {
    it('should return DeleteWeaponByIdSuccess action with entity ID on success', () => {
      const entity = generateWeapon();
      const deleteAction = new DeleteWeaponById({ id: entity.id });
      const successAction = new DeleteWeaponByIdSuccess({ id: entity.id });

      actions = hot('a-', { a: deleteAction });
      service.deleteById.and.returnValue(cold('-e|', { e: entity.id }));
      const expected = cold('-s', { s: successAction });

      expect(effects.delete).toBeObservable(expected);
    });

    it('should return DeleteWeaponByIdFail with error object on failure', () => {
      const entity = generateWeapon();
      const deleteAction = new DeleteWeaponById({ id: entity.id });
      const failAction = new DeleteWeaponByIdFail({ error: 'fail' });

      actions = hot('a-', { a: deleteAction });
      service.deleteById.and.returnValue(cold('-#|', {}, { message: 'fail'}));
      const expected = cold('-f', { f: failAction });

      expect(effects.delete).toBeObservable(expected);
    });
  });

});
