import { createSelector, createFeatureSelector } from '@ngrx/store';

import * as fromWeaponState from './weapon.reducer';
import { WeaponState } from './weapon.reducer';

export const getWeaponState = createFeatureSelector<WeaponState>('weapons');

export const {
  selectIds: getAllWeaponIds,
  selectEntities: getAllWeaponEntitiesAsMap,
  selectAll: getAllWeaponEntitiesAsArray,
  selectTotal: getTotalWeaponEntities
} = fromWeaponState.adapter.getSelectors(getWeaponState);

export const getSelectedWeaponId = createSelector(
  getWeaponState,
  fromWeaponState.getSelectedId
);

export const getSelectedWeapon = createSelector(
  getSelectedWeaponId,
  getAllWeaponEntitiesAsMap,
  (selectedWeaponId, weaponEntities) =>
    selectedWeaponId && weaponEntities[selectedWeaponId]
);

export const getLoading = createSelector(
  getWeaponState,
  fromWeaponState.getLoading
);

export const getError = createSelector(
  getWeaponState,
  fromWeaponState.getError
);

export const getQuery = createSelector(
  getWeaponState,
  fromWeaponState.getQuery
);
