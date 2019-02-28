import { Component, OnInit } from '@angular/core';
import { Unit } from 'src/app/model/unit';
import { UnitService } from 'src/app/services/unit.service';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/reducers';
import { SaveUnit } from 'src/app/units/units/actions/units.actions';
import { UnitMessageService } from 'src/app/services/unit-message.service';

@Component({
  selector: 'app-unit-edit-page',
  templateUrl: './unit-edit-page.component.html',
  styleUrls: ['./unit-edit-page.component.css']
})
export class UnitEditPageComponent implements OnInit {


  constructor(private store: Store<State>, private wizMsg: UnitMessageService) {


   }

  ngOnInit() {

  }

  save(wiz: Unit) {
      
  }

}
