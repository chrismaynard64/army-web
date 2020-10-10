import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { UnitMessageService, ActionType } from './../../services/unit-message.service';
import { Component, OnInit, Inject } from '@angular/core';
import { WeaponListStyles } from '../Weapon-list/Weapon-list.component';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { getAllWeaponEntitiesAsArray } from 'src/app/units/weapon';
import { State } from 'src/app/store/reducers';
import { UnitEditComponent } from '../unit-edit/unit-edit.component';
import { UnitEditData, WeaponSelectData } from 'src/app/model/unitEditData';
import { Weapon } from 'src/app/units/weapon/weapon.model';
import { WeaponEditComponent } from '../Weapon-edit/Weapon-edit.component';

@Component({
  selector: 'app-weapon-select',
  templateUrl: './weapon-select.component.html',
  styleUrls: ['./weapon-select.component.css']
})
export class WeaponSelectComponent implements OnInit {

  WeaponListStyle: WeaponListStyles = { listStyles: {}, itemStyles: { width: '40px', height: '40px', margin: '3px 3px 3px 3px'}} 
  Weapons$: Observable<any>;
 
  WeaponSub: Subscription;
  Weapons: Weapon[] = [];
  weaponEdit: Weapon = null;

  constructor(    private store: Store<State>, public dialogRef: MatDialogRef<UnitEditComponent>,
    private  dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public selectData: WeaponSelectData,
    private unitMsg: UnitMessageService) { 
      this.Weapons = this.selectData.Weapons;
    }

  ngOnInit() {
    /*
    this.Weapons$ = this.store.select(getAllWeaponEntitiesAsArray);
  
    this.WeaponSub = this.Weapons$.subscribe(s => {
      this.Weapons = s;
    });  
    ?*/
    this.Weapons = this.selectData.Weapons;
  }

  ngOnDestroy() {
    this.WeaponSub.unsubscribe();
  }

  
  cancel() {
    if (this.dialogRef) {
        this.dialogRef.close(); 
    } 
 }
 addWeapon() {
    
  this.editWeapon({payload: new Weapon(), action: ActionType.create})
}

editWeapon(action) {
  this.weaponEdit = action.payload;
  const dialogRef = this.dialog.open(WeaponEditComponent, {
    width: '720px',
    height: '600px',
    data: {weapon:  {...this.weaponEdit}, action:action.action }
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    this.weaponEdit = null;
  });
}





}
