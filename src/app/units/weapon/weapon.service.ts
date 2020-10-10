/*
 * TODO:
 * This file should not remain in the state folder. Move it to somewhere within
 * your app code.
 */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Weapon } from './weapon.model';
import { Config } from 'src/app/common/config';

@Injectable({
  providedIn: 'root'
})
export class WeaponService {
  BASE_URL = Config.BASE_URL;

  constructor(private httpClient: HttpClient) {}

  create(weapon: Weapon): Observable<Weapon> {
    return this.httpClient.post<Weapon>(`${this.BASE_URL}weapon`, {
      ...weapon,
      // We clear out the ID to indicate that this should be a new entry:
      id: null
    });
  }

  search(): Observable<Array<Weapon>> {
    // TODO: get based on state.paging (filter, sorting, page, limit)
    return this.httpClient.get<Array<Weapon>>(`${this.BASE_URL}weapon`);
  }

  getById(id: string): Observable<Weapon> {
    return this.httpClient.get<Weapon>(`${this.BASE_URL}weapon/${id}`);
  }

  update(weapon: Weapon): Observable<Weapon> {
    return this.httpClient
      .put<Weapon>(`${this.BASE_URL}weapon/${weapon._id}`, weapon)
      // The following pipe can be removed if your backend service returns the
      // edited value:
      .pipe(switchMap(() => of(weapon)));
  }

  deleteById(id: string): Observable<string> {
    return this.httpClient.delete<void>(`${this.BASE_URL}weapon/${id}`)
      // The following pipe can be removed if your backend service returns the
      // ID or body of the deleted entity:
      .pipe(switchMap(() => of(id)));
  }
}
