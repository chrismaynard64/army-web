import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ArmiesPageComponent } from './army.component';



describe('ArmiesPageComponent', () => {
  let component: ArmiesPageComponent;
  let fixture: ComponentFixture<ArmiesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArmiesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArmiesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
