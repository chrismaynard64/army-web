export class Wizard {
    _id: string = '-1';
    id: string = '01';
    image: string = 'Female_12_R.png';
    name: string = "";
    dexterity: number = 0;
    constitution: number = 0;
    intelligence: number = 0;
    wisdom: number = 0;

    Weapons: WizardWeapon[] = [];
}

export class  WizardWeapon {
    _id: string = undefined;
    power: number = 0;
    level: number = 1;
    name: string;
    image: string;
}

