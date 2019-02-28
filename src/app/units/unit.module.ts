import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromUnits from './units//reducers/units.reducer';
import { EffectsModule } from '@ngrx/effects';
import { UnitsEffects } from './units/effects/units.effects';
import * as fromWeapons from './units/reducers/Weapons.reducer';
import * as fromArmies from './armies/reducers/armies.reducer';
import { ArmiesEffects } from './armies/effects/armies.effects';
import * as fromWeapon from '../units/weapons/reducers/weapon.reducer';
import { WeaponEffects } from '../units/weapons/effects/weapon.effects';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,

    StoreModule.forFeature('units', fromUnits.reducer),
    EffectsModule.forFeature([UnitsEffects, ArmiesEffects, WeaponEffects]),
    StoreModule.forFeature('Weapons', fromWeapons.reducer),
    StoreModule.forFeature('armies', fromArmies.reducer),
    StoreModule.forFeature('weapon', fromWeapon.reducer)],
  declarations: []
})
export class UnitsModule { }
