import { Unit } from "./unit";
import { Weapon } from '../units/weapon/weapon.model';

export class Army {
    _id: string = '-1';
    name: string;
    image: string;
    units: Unit[];
    weapons: Weapon[];
}