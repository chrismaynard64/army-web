import {
  Weapon,
  generateWeapon,
  generateWeaponMap,
  generateWeaponArray
} from './weapon.model';
import * as actions from './weapon.actions';
import {
  weaponReducer,
  initialState,
  getSelectedId,
  getLoading,
  getError,
  getQuery
} from './weapon.reducer';
import { Update } from '@ngrx/entity';

const INITIAL_STATE_WITH_ERROR = {
  ...initialState,
  error: 'some error'
};
const BLANK_ERROR_MESSAGE = '';

describe('weaponReducer', () => {
  describe('upon an undefined action', () => {
    it('should return the default state upon an undefined action', () => {
      const action = { type: 'NOT DEFINED' } as any;

      expect(weaponReducer(initialState, action)).toEqual(initialState);
    });
  });

  describe('upon InsertWeapon', () => {
    it('should set loading to true and clear any error', () => {
      const action = new actions.InsertWeapon({ weapon: generateWeapon() });

      expect(weaponReducer(INITIAL_STATE_WITH_ERROR, action)).toEqual({
        ...initialState,
        loading: true,
        error: BLANK_ERROR_MESSAGE
      });
    });
  });

  describe('upon InsertWeaponSuccess', () => {
    it('should add the given Weapon, set loading to false, and clear any error', () => {
      const result = generateWeapon();
      const action = new actions.InsertWeaponSuccess({ result });

      expect(weaponReducer(INITIAL_STATE_WITH_ERROR, action)).toEqual({
        ...initialState,
        ...generateWeaponMap([result]),
        loading: false,
        error: BLANK_ERROR_MESSAGE
      });
    });
  });

  describe('upon InsertWeaponFail', () => {
    it('should set loading to true and echo the error', () => {
      const error = 'test insert error';
      const action = new actions.InsertWeaponFail({ error });

      expect(weaponReducer(initialState, action)).toEqual({
        ...initialState,
        loading: false,
        error: `Weapon insert failed: ${error}`
      });
    });
  });

  describe('upon SearchAllWeaponEntities', () => {
    it('should remove Weapon entities, set loading to true, and clear any error', () => {
      const initialStateWithWeaponEntities = {
        ...INITIAL_STATE_WITH_ERROR,
        ...generateWeaponMap()
      };
      const action = new actions.SearchAllWeaponEntities();

      expect(weaponReducer(initialStateWithWeaponEntities, action)).toEqual({
        ...initialState,
        loading: true,
        error: BLANK_ERROR_MESSAGE
      });
    });
  });

  describe('upon SearchAllWeaponEntitiesSuccess', () => {
    it('should add Weapon entities, set loading to false, and clear any error', () => {
      const result = generateWeaponArray();
      const action = new actions.SearchAllWeaponEntitiesSuccess({ result });

      expect(weaponReducer(INITIAL_STATE_WITH_ERROR, action)).toEqual({
        ...initialState,
        ...generateWeaponMap(result),
        loading: false,
        error: BLANK_ERROR_MESSAGE
      });
    });
  });

  describe('upon SearchAllWeaponEntitiesFail', () => {
    it('should set loading to false and echo the error', () => {
      const error = 'test search error';
      const action = new actions.SearchAllWeaponEntitiesFail({ error });

      expect(weaponReducer(initialState, action)).toEqual({
        ...initialState,
        loading: false,
        error: `Weapon search failed: ${error}`
      });
    });
  });

  describe('upon LoadWeaponById', () => {
    it('should remove weapon entities, set selected id, and clear any error', () => {
      const id = 8675309;
      const initialStateWithWeaponEntities = {
        ...INITIAL_STATE_WITH_ERROR,
        ...generateWeaponMap()
      };
      const action = new actions.LoadWeaponById({ id });

      expect(weaponReducer(initialStateWithWeaponEntities, action)).toEqual({
        ...initialState,
        selectedId: id,
        loading: true,
        error: BLANK_ERROR_MESSAGE
      });
    });
  });

  describe('upon LoadWeaponByIdSuccess', () => {
    it('should add the given Weapon, set loading to false, and clear any error', () => {
      const result = generateWeapon();
      const action = new actions.LoadWeaponByIdSuccess({ result });

      expect(weaponReducer(INITIAL_STATE_WITH_ERROR, action)).toEqual({
        ...initialState,
        ...generateWeaponMap([result]),
        loading: false,
        error: BLANK_ERROR_MESSAGE
      });
    });
  });

  describe('upon LoadWeaponByIdFail', () => {
    it('should set loading to false and echo the error', () => {
      const error = 'test load by id error';
      const action = new actions.LoadWeaponByIdFail({ error });

      expect(weaponReducer(initialState, action)).toEqual({
        ...initialState,
        loading: false,
        error: `Weapon load failed: ${error}`
      });
    });
  });

  describe('upon UpdateWeapon', () => {
    it('should set loading to true and clear any errior', () => {
      const weapon = generateWeapon();
      const action = new actions.UpdateWeapon({ weapon });

      expect(weaponReducer(INITIAL_STATE_WITH_ERROR, action)).toEqual({
        ...initialState,
        loading: true,
        error: BLANK_ERROR_MESSAGE
      });
    });
  });

  describe('upon UpdateWeaponSuccess', () => {
    it('should add the given Weapon, set loading to false, and clear any error', () => {
      const weapon = generateWeapon();
      const initialStateWithWeapon = {
        ...INITIAL_STATE_WITH_ERROR,
        ...generateWeaponMap([weapon])
      };
      const updatedWeapon = {
        ...weapon,
        name: weapon.name + ' EDITED',
        description: weapon.description + ' EDITED'
      };
      const update = {
        id: updatedWeapon._id,
        changes: updatedWeapon
      } as Update<Weapon>;
      const action = new actions.UpdateWeaponSuccess({ update });

      expect(weaponReducer(initialStateWithWeapon, action)).toEqual({
        ...initialStateWithWeapon,
        ...generateWeaponMap([updatedWeapon]),
        loading: false,
        error: BLANK_ERROR_MESSAGE
      });
    });
  });

  describe('upon UpdateWeaponFail', () => {
    it('should set loading to false and echo the error', () => {
      const error = 'test update error';
      const action = new actions.UpdateWeaponFail({ error });

      expect(weaponReducer(initialState, action)).toEqual({
        ...initialState,
        loading: false,
        error: `Weapon update failed: ${error}`
      });
    });
  });

  describe('upon DeleteWeaponById', () => {
    it('should set the id, set loading to true, and clear any error', () => {
      const id = 4815162342;
      const action = new actions.DeleteWeaponById({ id });

      expect(weaponReducer(INITIAL_STATE_WITH_ERROR, action)).toEqual({
        ...initialState,
        selectedId: id,
        loading: true,
        error: BLANK_ERROR_MESSAGE
      });
    });
  });

  describe('upon DeleteWeaponByIdSuccess', () => {
    it('should remove the id-given weapon, set loading to false, and clear any error', () => {
      const id = 18009453669;
      const weaponToBeRemoved = generateWeapon(id);
      const expectedWeaponEntities = generateWeaponArray();
      const weaponEntitiesWithWeaponToBeRemoved = [
        ...expectedWeaponEntities,
        weaponToBeRemoved
      ];
      const initialStateWithAllWeaponEntities = {
        ...INITIAL_STATE_WITH_ERROR,
        ...generateWeaponMap(weaponEntitiesWithWeaponToBeRemoved)
      };
      const action = new actions.DeleteWeaponByIdSuccess({ id });

      expect(
        weaponReducer(initialStateWithAllWeaponEntities, action)
      ).toEqual({
        ...initialStateWithAllWeaponEntities,
        ...generateWeaponMap(expectedWeaponEntities),
        loading: false,
        error: BLANK_ERROR_MESSAGE
      });
    });
  });

  describe('upon DeleteWeaponByIdFail', () => {
    it('should set loading to false and echo the error', () => {
      const error = 'test delete error';
      const action = new actions.DeleteWeaponByIdFail({ error });

      expect(weaponReducer(initialState, action)).toEqual({
        ...initialState,
        loading: false,
        error: `Weapon delete failed: ${error}`
      });
    });
  });

  describe('upon SetSearchQuery', () => {
    it('should set the query', () => {
      const query = {
        filter: 'someFilter',
        sorting: 'someSort',
        limit: 1000000000000,
        page: 888888
      };
      const action = new actions.SetSearchQuery(query);

      expect(weaponReducer(initialState, action)).toEqual({
        ...initialState,
        query
      });
    });
  });

  describe('upon SelectWeaponById', () => {
    it('should set the id and clear any error', () => {
      const id = 73;
      const action = new actions.SelectWeaponById({ id });

      expect(weaponReducer(INITIAL_STATE_WITH_ERROR, action)).toEqual({
        ...initialState,
        selectedId: id,
        error: BLANK_ERROR_MESSAGE
      });
    });
  });
});

describe('getters', () => {
  describe('getSelectedId', () => {
    it('should return the selected id', () => {
      expect(getSelectedId(initialState)).toEqual(initialState.selectedId);
    });
  });
  describe('getLoading', () => {
    it('should return the selected id', () => {
      expect(getLoading(initialState)).toEqual(initialState.loading);
    });
  });
  describe('getError', () => {
    it('should return the selected id', () => {
      expect(getError(INITIAL_STATE_WITH_ERROR))
        .toEqual(INITIAL_STATE_WITH_ERROR.error);
    });
  });
  describe('getQuery', () => {
    it('should return the selected id', () => {
      expect(getQuery(initialState))
        .toEqual(initialState.query);
    });
  });
});
