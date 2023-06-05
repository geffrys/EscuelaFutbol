import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioRegistroCanchasComponent } from './formulario-registro-canchas.component';

describe('FormularioRegistroCanchasComponent', () => {
  let component: FormularioRegistroCanchasComponent;
  let fixture: ComponentFixture<FormularioRegistroCanchasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioRegistroCanchasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioRegistroCanchasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
