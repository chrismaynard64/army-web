import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmyEditComponent } from './army-edit.component';

describe('ArmyEditComponent', () => {
  let component: ArmyEditComponent;
  let fixture: ComponentFixture<ArmyEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArmyEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArmyEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
