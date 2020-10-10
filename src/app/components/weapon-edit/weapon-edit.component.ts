import { Component, OnInit, Inject } from '@angular/core';
import { Weapon } from 'src/app/units/weapon/weapon.model';
import { MatDialog } from '@angular/material';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/reducers';

import { UnitMessageService, ActionType } from 'src/app/services/unit-message.service';

@Component({
  selector: 'app-Weapon-edit',
  templateUrl: './Weapon-edit.component.html',
  styleUrls: ['./Weapon-edit.component.css']
})
export class WeaponEditComponent implements OnInit {

weapon$: Observable<any> = null;
weaponSub: Subscription = null;
weaponEdit: Weapon;


weaponTypes = [
  { id: '1', name: 'Melee'},
  { id: '2', name: 'Assault'},
  { id: '3', name: 'Heavy'},
  { id: '4', name: 'Rapid Fire'},
  { id: '5', name: 'Grenade'},
  { id: '6', name: 'Pistol'},
]


  constructor(public dialogRef: MatDialogRef<WeaponEditComponent>,
    @Inject(MAT_DIALOG_DATA) public unitData: WeaponEditDlgData,
    private unitMsg: UnitMessageService) { 
       this.weaponEdit = unitData.weapon;
    }

  ngOnInit() {

  }

  save() {
     if (this.unitData.action == ActionType.create) {
        this.unitMsg.sendWeaponCreateMessage(this.weaponEdit);
        this.dialogRef.close();
     }
     else 
        if (this.unitData.action == ActionType.update) {
          this.unitMsg.sendWeaponSaveMessage(this.weaponEdit);
          this.dialogRef.close();
        }
  }

  close() {
    this.dialogRef.close();
  }

}

export class WeaponEditDlgData {
  weapon: Weapon;
  action: ActionType;
}