import { Army } from './army';
import { Weapon } from 'src/app/units/weapon/weapon.model';
import { ArgumentType } from '@angular/core/src/view';
export class Unit {
    _id: string = '-1';
    name: string;
    image: string;
    models: UnitModel[] = [];
    Weapons: Weapon[];
    army: any;
    new: boolean = false;
   // army: Army;

    constructor() {
        this.models.push(new UnitModel());
        this.name = 'New Unit'; 
    }
}


export class UnitModel {
    name: string = 'New';
    image: string;
    role: string;
    character: boolean;
    powerRating: number;
    portrait: string;
    movement: number;
    weaponSkill: number;
    ballisticSkill: number;
    strength: number;
    toughness: number;
    wounds: number;
    attacks: number;
    leadership: number;
    saves: number;
    fly: boolean;
    movementMinimum: number;
    psyker: boolean;
    keywords: string[];
    factionKeywords: string[];
    numberMin: number;
    numberMax: number
}

export class UnitWeapon {

}