import { MatDialog } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { State } from 'src/app/store/reducers';
import { LoadArmy, SaveArmy, NewArmy } from 'src/app/units/armies/actions/armies.actions';
import { selectArmyById } from 'src/app/units/armies/reducers';
import { tap } from 'rxjs/operators';
import { Observable, of, timer, Subscription } from 'rxjs';
import { Army } from 'src/app/model/army';
import { Unit } from 'src/app/model/unit';
import { UnitMessageService, ActionType } from 'src/app/services/unit-message.service';
import { timeout } from 'q';
import { WeaponSelectComponent } from 'src/app/components/weapon-select/weapon-select.component';
import { InsertWeapon, UpdateWeapon, DeleteWeaponById } from 'src/app/units/weapon/weapon.actions';
import { Weapon } from 'src/app/units/weapon/weapon.model';
import { WeaponEditComponent } from 'src/app/components/Weapon-edit/Weapon-edit.component';
import { WeaponListStyles } from 'src/app/components/Weapon-list/Weapon-list.component';
import { getAllWeaponEntitiesAsArray } from 'src/app/units/weapon';

@Component({
  selector: 'app-army-page',
  templateUrl: './army-page.component.html',
  styleUrls: ['./army-page.component.css']
})
export class ArmyPageComponent implements OnInit {

  army$: Observable<Army>;
  army: Army = null;

  WeaponSub: Subscription;
  weaponMessageSub: Subscription = null;
  weaponEdit: Weapon = null;

  Weapons$: Observable<any>;
  Weapons: Weapon[];

  WeaponListStyle: WeaponListStyles = { listStyles: {}, itemStyles: { width: '40px', height: '40px', margin: '3px 3px 3px 3px'}} 


  constructor(private store: Store<State>, private route: ActivatedRoute,
    private router: Router,
    private unitMsg: UnitMessageService,
    private  dialog: MatDialog
    ) { }



  ngOnInit() {
    this.route.paramMap.subscribe(params => {
        let id = params.get('id');


  /*      if (id == '-1') {
            this.army$ = of(new Army);
        } else {  */
            this.army$ = this.store.pipe(
              select(selectArmyById(id)),
              tap(army => {
                if (!army) {
                      this.store.dispatch(new LoadArmy(id));
                } else {
                  this.army = army;
                }
              })
            );
    //    }
        this.army$.subscribe(a => {
          this.army = a;
        });

        this.Weapons$ = this.store.select(getAllWeaponEntitiesAsArray);
  
        this.WeaponSub = this.Weapons$.subscribe(s => {
          this.Weapons = s;
        }); 

    });


    this.weaponMessageSub = this.unitMsg.getWeaponMessage().subscribe((w) => {
      switch (w.action) {
        case ActionType.edit:
          this.appendWeapon({action: ActionType.update, payload: w.payload});
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

  save() {
     this.store.dispatch(new SaveArmy(this.army));
    // this.router.navigate(['/armies']);


     let timerSub = timer(1000).subscribe(() => { 
       this.router.navigate(['/armies']);
       timerSub.unsubscribe();
     });
  
  }


  addUnit() {
     let unit = new Unit();

     unit.new = true;
     unit.army = this.army._id ;

    //this.army.units.push(unit);

    this.unitMsg.sendMessage(unit);

    //this.army$ = of(this.army);


  }


  addWeapon() {
    const dialogRef = this.dialog.open(WeaponSelectComponent, {
      width: '250px',
      height: '350px',
      data: {armyId: this.army._id, Weapons: this.Weapons }
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  appendWeapon(action) {
    this.weaponEdit = action.payload;

   let f =  this.army.weapons.find(w => w._id == this.weaponEdit._id);

   if (f === undefined)
      this.army.weapons.push(this.weaponEdit);

  }

}
  