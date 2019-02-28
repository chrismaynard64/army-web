import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { State } from 'src/app/store/reducers';
import { LoadArmy, SaveArmy, NewArmy } from 'src/app/units/armies/actions/armies.actions';
import { selectArmyById } from 'src/app/units/armies/reducers';
import { tap } from 'rxjs/operators';
import { Observable, of, timer } from 'rxjs';
import { Army } from 'src/app/model/army';
import { Unit } from 'src/app/model/unit';
import { UnitMessageService } from 'src/app/services/unit-message.service';
import { timeout } from 'q';

@Component({
  selector: 'app-army-page',
  templateUrl: './army-page.component.html',
  styleUrls: ['./army-page.component.css']
})
export class ArmyPageComponent implements OnInit {

  constructor(private store: Store<State>, private route: ActivatedRoute,
    private router: Router,
    private unitMsg: UnitMessageService) { }

  army$: Observable<Army>;
  army: Army = null;

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
        })
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

}
  