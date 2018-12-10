import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaGestionusuariosComponent } from './ruta-gestionusuarios.component';

describe('RutaGestionusuariosComponent', () => {
  let component: RutaGestionusuariosComponent;
  let fixture: ComponentFixture<RutaGestionusuariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaGestionusuariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaGestionusuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
