import { Unit } from 'src/app/model/unit';
import { Component, OnInit, Input } from '@angular/core';
import { UnitMessageService } from 'src/app/services/unit-message.service';

@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.css']
})
export class UnitComponent implements OnInit {

@Input() unit: Unit;

  constructor(private unitMsg: UnitMessageService) { }

  ngOnInit() {
  }
  
  unitSelected(unit) {
    this.unitMsg.sendMessage(unit);
 }
}
