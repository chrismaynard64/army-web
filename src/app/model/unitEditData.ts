import { Unit } from "./unit";
import { Weapon } from 'src/app/units/weapon/weapon.model';

export class UnitEditData {
    unit: Unit;
    Weapons: Weapon[];
}

export class WeaponSelectData {
    armyId: string;
    Weapons: Weapon[];
}