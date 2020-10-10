import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Weapon } from 'src/app/units/weapon/weapon.model';

@Component({
  selector: 'app-Weapon-list',
  templateUrl: './Weapon-list.component.html',
  styleUrls: ['./Weapon-list.component.css']
})
export class WeaponListComponent implements OnInit {

@Input() Weapons = [];
@Input() WeaponListStyle: WeaponListStyles = { listStyles: {}, itemStyles:{}};
@Output() selected = new EventEmitter<Weapon>()


  constructor() { }

  ngOnInit() {
      let i = 1;
  }


  WeaponSelected(Weapon) {
      this.selected.emit(Weapon);
  }

}

export class WeaponListStyles {
    listStyles: Object;
    itemStyles: Object;
}