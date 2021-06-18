import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Puntoorigen1Component } from './puntoorigen1.component';

describe('Puntoorigen1Component', () => {
  let component: Puntoorigen1Component;
  let fixture: ComponentFixture<Puntoorigen1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Puntoorigen1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Puntoorigen1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
