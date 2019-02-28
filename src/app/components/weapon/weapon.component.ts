import { Component, OnInit, Input } from '@angular/core';
import { Weapon } from 'src/app/model/Weapon';
import { UnitMessageService } from 'src/app/services/unit-message.service';

@Component({
  selector: 'app-Weapon',
  templateUrl: './Weapon.component.html',
  styleUrls: ['./Weapon.component.css']
})
export class WeaponComponent implements OnInit {

  @Input() Weapon: Weapon;
  @Input() styleObj: Object = { };

  constructor(private wizMsg: UnitMessageService) { }

  ngOnInit() {
  }


  WeaponSelected(Weapon) {
      this.wizMsg.sendWeaponMessage(Weapon);
 }


}
