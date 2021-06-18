import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Puntotrabajo2Component } from './puntotrabajo2.component';

describe('Puntotrabajo2Component', () => {
  let component: Puntotrabajo2Component;
  let fixture: ComponentFixture<Puntotrabajo2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Puntotrabajo2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Puntotrabajo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
