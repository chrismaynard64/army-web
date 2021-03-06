import { of, Observable, Subscription } from 'rxjs';
import { Component, OnInit, Input, EventEmitter, Output, Inject } from '@angular/core';
import { Unit, UnitWeapon, UnitModel } from 'src/app/model/unit';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material';
import { UnitMessageService } from 'src/app/services/unit-message.service';
import { UnitEditData } from 'src/app/model/unitEditData';
import { Weapon } from 'src/app/units/weapon/weapon.model';
import { WeaponListStyles } from '../Weapon-list/Weapon-list.component';
import { WeaponSelectComponent } from '../weapon-select/weapon-select.component';

@Component({
  selector: 'app-unit-edit',
  templateUrl: './unit-edit.component.html',
  styleUrls: ['./unit-edit.component.css']
})
export class UnitEditComponent implements OnInit {

myof = of;

 // @Input() unit: Unit;
  @Output("change") saved: EventEmitter<Unit> = new EventEmitter<Unit>();

  unit: Unit;
  @Input() Weapons: Weapon[] = [];
  tmpWeapons: Weapon[] = [];
  showWeapons = false;
  WeaponListStyle: WeaponListStyles = { listStyles: {}, itemStyles: { width: '25px', height: '25px', margin: '3px 3px 3px 3px'}} 
 
  unitImage: string = "./assets/PNG2/Female_01.png";

  subWiz: Subscription;

  constructor(public dialogRef: MatDialogRef<UnitEditComponent>,
    @Inject(MAT_DIALOG_DATA) public unitData: UnitEditData,
    private unitMsg: UnitMessageService,
    private  dialog: MatDialog
    ) { 
      this.unit = {...unitData.unit, Weapons: []} ;
      
      this.Weapons = unitData.Weapons;
    }

  ngOnInit() {
     let a = of(this.unit.Weapons);

  }

  ngOnDestroy()  {

  }

  save() {
    //this.saved.emit(this.unit);
    this.unitMsg.saveUnitMessage(this.unit);
    this.dialogRef.close();
 }
 delete() {
    //this.saved.emit(this.unit);
    if (confirm('Delete this entry.\n\nAre you sure?')) {
      this.unitMsg.deleteUnitMessage(this.unit);
      this.dialogRef.close();
    }
 }
   

  cancel() {
    this.dialogRef.close();
 }


 showWeaponList() {
  this.showWeapons = !this.showWeapons;
 }

 showWeaponDlg() {
  const dialogRef = this.dialog.open(WeaponSelectComponent, {
    width: '250px',
    height: '350px',
    data: {armyId: this.unitData.unit.army, Weapons: this.Weapons }
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
  });
 }

 addUnit() {
  this.unit = new Unit();   
}

addUnitModel() {
  this.unit.models.push(new UnitModel());
}

  WeaponSelected(Weapon: Weapon) {
        let s = {...(new UnitWeapon()), WeaponId: Weapon._id, name: Weapon.name, image: Weapon.image};

        if (!this.unit.Weapons) {
            this.unit.Weapons = [];
        }

        //this.unit.Weapons.push(s);
  }


  WeaponDeleted(Weapon: Weapon) {
    
      let Weapons =   this.unit.Weapons.filter(s => {
          return s._id != Weapon._id;
      });
      this.unit.Weapons = Weapons;
  }

  randomise() {
    /*
    this.unit.constitution = this.rndmz();
    this.unit.dexterity = this.rndmz();
    this.unit.intelligence = this.rndmz();
    this.unit.wisdom = this.rndmz();
    */
  }


  rndmz() {
    let ret = 5 + Math.floor(Math.random() * 4) + Math.floor(Math.random() * 4) + Math.floor(Math.random() * 4);
    return ret >= 8 ? ret : 8;
  }

}
