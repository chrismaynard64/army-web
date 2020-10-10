export class Weapon {
  _id: string;
  //id: string;
  name: string = '';
  description: string = '';
  image: string = '';

  type: string = 'melee'  //melee, assault, heavy, rapidFire, grenade, pistol
  range: number = 0;  //0 = melee
  strength: number = 4;
  strengthType: number = 1;   //1 - absolute, 2 - plus, 3 - multiply
  armourPenetration: number = 4;
  damage: number = 4;
  attacks: number = 1;


  constructor() {
      this._id =  '' + (Math.floor(Math.random() * 100) + 1)
  }

}

// for testing

export const generateWeapon = (idOverride?: number): Weapon => (new Weapon());

export const generateWeaponArray = (count = 10): Weapon[] =>
  // Overwrite random id generation to prevent duplicate IDs:
  Array.apply(null, Array(count)).map((value, index) => generateWeapon(index + 1));

export const generateWeaponMap = (
  weaponArray: Array<Weapon> = generateWeaponArray()
): { ids: Array<string>, entities: any } => ({
  entities: weaponArray.reduce(
    (weaponMap, weapon) => ({ ...weaponMap, [weapon._id]: weapon }),
    {}
  ),
  ids: weaponArray.map(weapon => weapon._id)
});

