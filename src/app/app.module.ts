import { UnitsModule } from './units/unit.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { StoreRouterConnectingModule,  routerReducer, RouterStateSerializer } from '@ngrx/router-store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { reducers, metaReducers } from './store/reducers';
import { environment } from '../environments/environment';
import { AppEffects } from './store/effects/app.effects';
import { AuthInterceptor } from './common/auth.interceptor';
import { LoginCallbackComponent } from './containers/login-callback/login-callback.component';
import { HomeComponent } from './containers/home/home.component';
import { UnitsComponent } from './containers/units/units.component';
import { NotfoundComponent } from './containers/notfound/notfound.component';
import { UnitListComponent } from './components/unit-list/unit-list.component';
import { WeaponListComponent } from './components/Weapon-list/Weapon-list.component';
import { UnitComponent } from './components/unit/unit.component';
import { WeaponComponent } from './components/Weapon/Weapon.component';
import { UnitEditComponent } from './components/unit-edit/unit-edit.component';
import { WeaponEditComponent } from './components/Weapon-edit/Weapon-edit.component';
import { UnitEditPageComponent } from './containers/unit-edit-page/unit-edit-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgMatModule } from './ngmat/ngmat.module';
import { WeaponsComponent } from './containers/Weapons/Weapons.component';
import { AccountComponent } from './containers/account/account.component';
import { ArmyComponent } from './components/army/army.component';
import { ArmyListComponent } from './components/army-list/army-list.component';
import { ArmyEditComponent } from './components/army-edit/army-edit.component';
import { ArmiesPageComponent } from './containers/army/army.component';
import { ArmyPageComponent } from './containers/army-page/army-page.component';
import { CustomRouterStateSerializer } from './store/customRouterStateSerializer';
import { WeaponSelectComponent } from './components/weapon-select/weapon-select.component';
import { TestPageComponent } from './containers/test-page/test-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginCallbackComponent,
    HomeComponent,
    UnitComponent,
    NotfoundComponent,
    UnitListComponent,
    WeaponListComponent,
    UnitsComponent,
    WeaponComponent,
    UnitEditComponent,
    WeaponEditComponent,
    UnitEditPageComponent,
    WeaponsComponent,
    AccountComponent,
    ArmyComponent,
    ArmiesPageComponent,
    ArmyListComponent,
    ArmyEditComponent,
    ArmyPageComponent,
    WeaponSelectComponent,
    TestPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreRouterConnectingModule.forRoot({stateKey:'router'}),
    EffectsModule.forRoot([AppEffects]),
    BrowserAnimationsModule,
    NgMatModule,
    UnitsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {provide: RouterStateSerializer, useClass: CustomRouterStateSerializer}
  ],
  bootstrap: [AppComponent],
  entryComponents: [UnitEditComponent, WeaponSelectComponent]
})
export class AppModule { }
