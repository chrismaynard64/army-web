import { State } from './store/reducers/index';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { AuthService } from './auth/auth.service';
import { UnitService } from './services/unit.service';
import { Store } from '@ngrx/store';
import { LoadUnits } from './units/units/actions/units.actions';
import { LoadWeapons } from './units/units/actions/Weapons.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'wiz2';

  loggedIn: boolean = false;

    constructor(private auth: AuthService, private store: Store<State>) {
      this.auth.handleAuthentication();
    }
 

    ngOnInit() {


      
      this.store.dispatch(new LoadUnits());
    //  this.store.dispatch(new LoadWeapons());
    }

    login() {  
        this.auth.login();
    }


    
}
