import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Unit } from 'src/app/model/unit';

@Component({
  selector: 'app-unit-list',
  templateUrl: './unit-list.component.html',
  styleUrls: ['./unit-list.component.css']
})
export class UnitListComponent implements OnInit {


  @Input() units;
  @Output() selected = new EventEmitter<Unit>()


  constructor() { }

  ngOnInit() {
  }


}
