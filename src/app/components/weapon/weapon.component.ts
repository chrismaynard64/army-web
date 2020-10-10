import { Component, OnInit, Input } from '@angular/core';
import { Weapon } from 'src/app/units/weapon/weapon.model';
import { UnitMessageService, ActionType } from 'src/app/services/unit-message.service';

@Component({
  selector: 'app-Weapon',
  templateUrl: './weapon.component.html',
  styleUrls: ['./weapon.component.css']
})
export class WeaponComponent implements OnInit {

  @Input() Weapon: Weapon;
  @Input() styleObj: Object = { };

  constructor(private wizMsg: UnitMessageService) { }

  ngOnInit() {
  }


  weaponSelected(weapon) {
      this.wizMsg.sendWeaponMessage(weapon);
 }


 edit(weapon: Weapon) {

 }

 /*
 delete()  {
  this.wizMsg.sendWeaponDeleteMessage(weapon);
 }
*/
}
