import { UnitMessageService } from 'src/app/services/unit-message.service';
import { Component, OnInit, Input } from '@angular/core';
import { Observable, of, Subscription } from 'rxjs';
import { Army } from 'src/app/model/army';
import { Unit } from 'src/app/model/unit';
import { Store } from '@ngrx/store';
import { State } from 'src/app/units/units/reducers';
import { SaveUnit, DeleteUnit } from 'src/app/units/units/actions/units.actions';
import { UnitEditComponent } from '../unit-edit/unit-edit.component';
import { MatDialog } from '@angular/material';
import { Weapon } from 'src/app/model/Weapon';

@Component({
  selector: 'app-army-edit',
  templateUrl: './army-edit.component.html',
  styleUrls: ['./army-edit.component.css']
})
export class ArmyEditComponent implements OnInit {

  @Input() army$: Observable<Army>;
  army: Army = null;

  units$: Observable<any>;
  unit$: Observable<Unit>;

  editSub: Subscription = null;
  
  unitSub: Subscription;
  unitEdit: Unit;
  Weapons: Weapon[];

  of = of;

  constructor(  private unitMsg: UnitMessageService,
    private  dialog: MatDialog,
    private store: Store<State>) { }

  ngOnInit() {

    this.unit$ = this.unitMsg.getMessage();

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
  

}
