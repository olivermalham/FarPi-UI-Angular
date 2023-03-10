import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchToggleComponent } from './switch-toggle.component';

describe('SwitchMomentaryComponent', () => {
  let component: SwitchToggleComponent;
  let fixture: ComponentFixture<SwitchToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwitchToggleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
