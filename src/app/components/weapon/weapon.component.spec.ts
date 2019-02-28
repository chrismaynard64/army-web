import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeaponComponent } from './Weapon.component';

describe('WeaponComponent', () => {
  let component: WeaponComponent;
  let fixture: ComponentFixture<WeaponComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeaponComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeaponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
