import { Component, OnInit } from '@angular/core';
import { WeaponListStyles } from 'src/app/components/Weapon-list/Weapon-list.component';
import { Observable, Subscription } from 'rxjs';
import { UnitService } from 'src/app/services/unit.service';
import { UnitMessageService } from 'src/app/services/unit-message.service';
import { MatDialog } from '@angular/material';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/reducers';
import { selectWeapons } from 'src/app/units/units/reducers';
import { Weapon } from 'src/app/model/Weapon';
import { LoadWeapons } from 'src/app/units/weapons/actions/weapon.actions';


@Component({
  selector: 'app-Weapons',
  templateUrl: './Weapons.component.html',
  styleUrls: ['./Weapons.component.css']
})
export class WeaponsComponent implements OnInit {


  Weapons$: Observable<any>;
  WeaponSub: Subscription;
  Weapons: Weapon[];

  WeaponListStyle: WeaponListStyles = { listStyles: {}, itemStyles: { width: '40px', height: '40px', margin: '3px 3px 3px 3px'}} 
   

  constructor(private unitService: UnitService, 
    private wizMsg: UnitMessageService,
    private  dialog: MatDialog,
    private store: Store<State>) { }

  ngOnInit() {
   // this.Weapons$ = this.unitService.getWeapons();

   this.Weapons$ = this.store.select(selectWeapons);
   this.WeaponSub = this.Weapons$.subscribe(s => {
      this.Weapons = s;
    });

    this.store.dispatch(new LoadWeapons());

  }

}
