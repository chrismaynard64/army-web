import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { UnitService } from 'src/app/services/unit.service';
import { UnitMessageService } from 'src/app/services/unit-message.service';
import { Unit } from 'src/app/model/unit';

import { MatDialog } from '@angular/material';
import { UnitEditComponent } from 'src/app/components/unit-edit/unit-edit.component';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/reducers';
import { LoadUnits, SaveUnit, DeleteUnit } from 'src/app/units/units/actions/units.actions';
import { selectUnits, selectUnitsState } from 'src/app/units/units/reducers';
import { WeaponListStyles } from 'src/app/components/Weapon-list/Weapon-list.component';
import { Weapon } from 'src/app/units/weapon/weapon.model';

@Component({
  selector: 'app-units',
  templateUrl: './units.component.html',
  styleUrls: ['./units.component.css']
})
export class UnitsComponent implements OnInit {


  units$: Observable<any>;
  unit$: Observable<Unit>;
  Weapons$: Observable<any>;
  Weapon$: Observable<Weapon>;
  unitname: string = '';
  Weapons: Weapon[];

  WeaponSub: Subscription;
  unitSub: Subscription;
  unitEdit: Unit;
  WeaponListStyle: WeaponListStyles = { listStyles: {}, itemStyles: { width: '20px', height: '20px'}} 


  constructor(private unitMsg: UnitMessageService,
    private  dialog: MatDialog,
    private store: Store<State>) { }

  ngOnInit() {
    //this.units$ = this.unitService.getUnits();
    //this.Weapons$ = this.unitService.getWeapons();

    //this.units$ = this.store.select(selectUnitsState);
    this.units$ = this.store.select(selectUnits);
    //this.units$ = this.store.select('units');
    //this.units$ = this.store.select(getAllUnits);

    this.units$.subscribe(e => {
       let a = e;
    })

    //this.Weapon$ = this.unitMsg.getWeaponMessage();
    this.unit$ = this.unitMsg.getMessage();

/*     this.WeaponSub = this.Weapons$.subscribe(s => {
      this.Weapons = s;  
    }); */

    this.unitSub = this.unit$.subscribe(w => {
        this.unitEdit = {...w};

        this.editUnit(this.unitEdit);
        
    });

    this.unitMsg.getSaveUnitMessage().subscribe(wiz => {
      this.store.dispatch(new SaveUnit(wiz))
    });

    this.unitMsg.getDeleteUnitMessage().subscribe(wiz => {
      this.store.dispatch(new DeleteUnit(wiz))
    });

  }

  ngOnDestroy() {
    this.unitSub.unsubscribe();
   // this.WeaponSub.unsubscribe();
  }

  unitSelected(wiz) {
    console.log(wiz);
}

WeaponSelected(Weapon) {
  console.log(Weapon);
}



addNew() {
  this.unitEdit = new Unit();
  this.editUnit(this.unitEdit);
}

editUnit(wiz) {
  const dialogRef = this.dialog.open(UnitEditComponent, {
    width: '720px',
    data: {unit: wiz, Weapons: this.Weapons}
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    this.unitEdit = null;
  });
}


save() {
  
}

}
