import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Weapon } from 'src/app/model/Weapon';

@Component({
  selector: 'app-Weapon-list',
  templateUrl: './Weapon-list.component.html',
  styleUrls: ['./Weapon-list.component.css']
})
export class WeaponListComponent implements OnInit {

@Input() Weapons$;
@Input() WeaponListStyle: WeaponListStyles = { listStyles: {}, itemStyles:{}};
@Output() selected = new EventEmitter<Weapon>()


  constructor() { }

  ngOnInit() {
  }


  WeaponSelected(Weapon) {
      this.selected.emit(Weapon);
  }

}

export class WeaponListStyles {
    listStyles: Object;
    itemStyles: Object;
}