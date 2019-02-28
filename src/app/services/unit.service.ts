import { Injectable } from '@angular/core';

import { map, switchMap, catchError} from 'rxjs/operators'
import { HttpClient } from '@angular/common/http';
import { Unit } from '../model/unit';
import { Army } from '../model/army';

@Injectable({
  providedIn: 'root'
})
export class UnitService {

  constructor(private http: HttpClient) { }

  getUnits() {
      return this.http.get(`http://localhost:3000/unit/get`)
     // return this.http.get('../../data/units.json')
       .pipe(
           map((response) => response)
       );
  }

  
  saveUnit(unit: Unit) {
    return this.http.put(`http://localhost:3000/unit/save/${unit._id}` , unit)
    //  return this.http.get('../../data/units.json')
       .pipe(
           map((response) => response)
       );
  }  
  saveUnitToArmy(unit: Unit) {
    return this.http.put(`http://localhost:3000/unit/savetoarmy/${unit._id}` , unit)
    //  return this.http.get('../../data/units.json')
       .pipe(
           map((response) => response)
       );
  }
   
  deleteUnit(unit: Unit) {
    return this.http.delete(`http://localhost:3000/unit/delete/${unit._id}`)
    //  return this.http.get('../../data/units.json')
       .pipe(
           map((response) => response)
       );
  }



  getWeapons() {
    return this.http.get(`http://localhost:3000/Weapon`)
    //  return this.http.get('../../data/units.json')
       .pipe(
           map((response) => response)
       );
  }

  getWeapon(id: string) {
    return this.http.get(`http://localhost:3000/weapon/` + id )
// return this.http.get('../../data/units.json')
    .pipe(
        map((response) => response)
    );
}

  
  getArmies() {
    return this.http.get(`http://localhost:3000/army`)
   // return this.http.get('../../data/units.json')
     .pipe(
         map((response) => response)
     );
  }
 
  getArmy(id: string) {
    return this.http.get(`http://localhost:3000/army/` + id )
// return this.http.get('../../data/units.json')
    .pipe(
        map((response) => response)
    );
}

saveArmy(army: Army) {
    return this.http.put(`http://localhost:3000/army/${army._id}` , army)
    //  return this.http.get('../../data/units.json')
       .pipe(
           map((response) => response)
       );
}


}
