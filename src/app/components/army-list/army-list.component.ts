import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Army } from 'src/app/model/army';

@Component({
  selector: 'app-army-list',
  templateUrl: './army-list.component.html',
  styleUrls: ['./army-list.component.css']
})
export class ArmyListComponent implements OnInit {

  @Input() armies$ =  of([]);

  constructor(private router: Router) { }

  ngOnInit() {
  }


  go(id: string) {
      this.router.navigate(['/army/' + id]);
  }

}
