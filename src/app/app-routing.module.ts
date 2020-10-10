import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './containers/home/home.component';
import { UnitsComponent } from './containers/units/units.component';
import { LoginCallbackComponent } from './containers/login-callback/login-callback.component';
import { NotfoundComponent } from './containers/notfound/notfound.component';
import { UnitEditPageComponent } from './containers/unit-edit-page/unit-edit-page.component';
import { WeaponsComponent } from './containers/Weapons/Weapons.component';
import { AccountComponent } from './containers/account/account.component';
import { ArmiesPageComponent } from './containers/army/army.component';
import { ArmyPageComponent } from './containers/army-page/army-page.component';
import { WeaponEditComponent } from './components/Weapon-edit/Weapon-edit.component';
import { TestPageComponent } from './containers/test-page/test-page.component';

const routes: Routes = [
  { path: '',      component: HomeComponent, pathMatch: 'full' },
  { path: 'home',      component: HomeComponent, pathMatch: 'full' },
  { path: 'armies',      component: ArmiesPageComponent, pathMatch: 'full' },
  { path: 'army/:id',      component: ArmyPageComponent, pathMatch: 'full' },
  { path: 'units',      component: UnitsComponent, pathMatch: 'full' },
  { path: 'weapons',      component: WeaponsComponent, pathMatch: 'full' },
  { path: 'weapon/:id',      component: WeaponEditComponent, pathMatch: 'full' },
  { path: 'logincallback',      component: LoginCallbackComponent, pathMatch: 'full' },
  { path: 'unitedit',      component: UnitEditPageComponent, pathMatch: 'full' },
  { path: 'account',      component: AccountComponent, pathMatch: 'full' },
  { path: 'test',      component: TestPageComponent, pathMatch: 'full' },
  { path: '**',    component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
