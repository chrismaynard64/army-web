import { Component, OnInit } from '@angular/core';
import { UnitService } from 'src/app/services/unit.service';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/reducers';
import { Observable, of } from 'rxjs';
import { Army } from 'src/app/model/army';
import { LoadArmies } from 'src/app/units/armies/actions/armies.actions';
//import { a } from '@angular/core/src/render3';
import { selectArmies } from 'src/app/units/armies/reducers';
import { Router } from '@angular/router';

@Component({
  selector: 'app-army',
  templateUrl: './army.component.html',
  styleUrls: ['./army.component.css']
})
export class ArmiesPageComponent implements OnInit {

  armies$: Observable<any> = of([]);
  armies: Army[] = [];

  constructor(private unitService: UnitService, 
    private store: Store<State>,
    private router: Router) { }

  ngOnInit() {

    this.store.dispatch(new LoadArmies());

     this.armies$ = this.store.select(selectArmies);

     this.armies$.subscribe(a => {

     })


  }


  addArmy() {
      this.router.navigate(['/army', '-1']);
  }

}
  