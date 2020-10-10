

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';

import { Observable, Subscription } from 'rxjs';

import { WeaponListStyles } from 'src/app/components/Weapon-list/Weapon-list.component';
import { UnitService } from 'src/app/services/unit.service';
import { UnitMessageService, ActionType } from 'src/app/services/unit-message.service';
import { State } from 'src/app/store/reducers';

import { SearchAllWeaponEntities, InsertWeapon, UpdateWeapon, DeleteWeaponById } from 'src/app/units/weapon/weapon.actions';
import { getAllWeaponEntitiesAsArray } from 'src/app/units/weapon';
import { WeaponEditComponent } from 'src/app/components/Weapon-edit/Weapon-edit.component';

import { Weapon } from 'src/app/units/weapon/weapon.model';


@Component({
  selector: 'app-Weapons',
  templateUrl: './Weapons.component.html',
  styleUrls: ['./Weapons.component.css']
})
export class WeaponsComponent implements OnInit {


  Weapons$: Observable<any>;
  WeaponSub: Subscription;
  Weapons: Weapon[];
  weaponEdit: Weapon = null;
  weaponMessageSub: Subscription = null;

  WeaponListStyle: WeaponListStyles = { listStyles: {}, itemStyles: { width: '40px', height: '40px', margin: '3px 3px 3px 3px'}} 
   

  constructor(private unitService: UnitService, 
    private unitMsg: UnitMessageService,
    private  dialog: MatDialog,
    private store: Store<State>,
    private router: Router) { }

  ngOnInit() {
   // this.Weapons$ = this.unitService.getWeapons();

   this.Weapons$ = this.store.select(getAllWeaponEntitiesAsArray);
   this.WeaponSub = this.Weapons$.subscribe(s => {
      this.Weapons = s;
    });

    //this.store.dispatch(new SearchAllWeaponEntities());

    this.weaponMessageSub = this.unitMsg.getWeaponMessage().subscribe((w) => {
      switch (w.action) {
        case ActionType.edit:
          this.editWeapon({action: ActionType.update, payload: w.payload});
          break;
        case ActionType.create:
          this.store.dispatch(new InsertWeapon({weapon: w.payload}));      
          break;
        case ActionType.update:
          this.store.dispatch(new UpdateWeapon({weapon: w.payload}));      
          break;
        case ActionType.delete:
          this.store.dispatch(new DeleteWeaponById({id: w.payload._id}));      
          break;
            
      }
   
    });

  }

  ngOnDestroy() {
    this.weaponMessageSub.unsubscribe();
    this.WeaponSub.unsubscribe();
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