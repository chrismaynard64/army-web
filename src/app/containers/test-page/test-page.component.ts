import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/reducers';
import { getAllWeaponEntitiesAsArray } from 'src/app/units/weapon';
import { Observable, Subscription } from 'rxjs';
import { Weapon } from 'src/app/units/weapon/weapon.model';
import { WeaponListStyles } from 'src/app/components/Weapon-list/Weapon-list.component';

@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.css']
})
export class TestPageComponent implements OnInit {


  Weapons$: Observable<any>;
  WeaponSub: Subscription;
  Weapons: Weapon[];
  
  WeaponListStyle: WeaponListStyles = { listStyles: {}, itemStyles: { width: '40px', height: '40px', margin: '3px 3px 3px 3px'}} 
  

  constructor(private store: Store<State>) { }


  ngOnInit() {
    this.Weapons$ = this.store.select(getAllWeaponEntitiesAsArray);
    this.WeaponSub = this.Weapons$.subscribe(s => {
       this.Weapons = s;
     });
 
  }

}
