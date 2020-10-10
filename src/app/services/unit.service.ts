import { Injectable } from '@angular/core';

import { map, switchMap, catchError} from 'rxjs/operators'
import { HttpClient } from '@angular/common/http';
import { Unit } from '../model/unit';
import { Army } from '../model/army';
import { Config } from '../common/config';

@Injectable({
  providedIn: 'root'
})
export class UnitService {
  BASE_URL = Config.BASE_URL;

  constructor(private http: HttpClient) { }

  getUnits() {
      return this.http.get(`${this.BASE_URL}unit/get`)
     // return this.http.get('../../data/units.json')
       .pipe(
           map((response) => response)
       );
  }

  
  saveUnit(unit: Unit) {
    return this.http.put(`${this.BASE_URL}unit/save/${unit._id}` , unit)
    //  return this.http.get('../../data/units.json')
       .pipe(
           map((response) => response)
       );
  }  
  saveUnitToArmy(unit: Unit) {
    return this.http.put(`${this.BASE_URL}unit/savetoarmy/${unit._id}` , unit)
    //  return this.http.get('../../data/units.json')
       .pipe(
           map((response) => response)
       );
  }
   
  deleteUnit(unit: Unit) {
    return this.http.delete(`${this.BASE_URL}unit/delete/${unit._id}`)
    //  return this.http.get('../../data/units.json')
       .pipe(
           map((response) => response)
       );
  }



  getWeapons() {
    return this.http.get(`${this.BASE_URL}Weapon`)
    //  return this.http.get('../../data/units.json')
       .pipe(
           map((response) => response)
       );
  }

  getWeapon(id: string) {
    return this.http.get(`${this.BASE_URL}weapon/` + id )
// return this.http.get('../../data/units.json')
    .pipe(
        map((response) => response)
    );
}

  
  getArmies() {
    return this.http.get(`${this.BASE_URL}army`)
   // return this.http.get('../../data/units.json')
     .pipe(
         map((response) => response)
     );
  }
 
  getArmy(id: string) {
    return this.http.get(`${this.BASE_URL}army/` + id )
// return this.http.get('../../data/units.json')
    .pipe(
        map((response) => response)
    );
}

saveArmy(army: Army) {
    return this.http.put(`${this.BASE_URL}army/${army._id}` , army)
    //  return this.http.get('../../data/units.json')
       .pipe(
           map((response) => response)
       );
}


}
