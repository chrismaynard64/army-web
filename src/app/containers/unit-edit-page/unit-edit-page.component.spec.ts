import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitEditPageComponent } from './unit-edit-page.component';

describe('UnitEditPageComponent', () => {
  let component: UnitEditPageComponent;
  let fixture: ComponentFixture<UnitEditPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitEditPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
