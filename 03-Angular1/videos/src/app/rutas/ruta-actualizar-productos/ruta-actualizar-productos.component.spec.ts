import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaActualizarProductosComponent } from './ruta-actualizar-productos.component';

describe('RutaActualizarProductosComponent', () => {
  let component: RutaActualizarProductosComponent;
  let fixture: ComponentFixture<RutaActualizarProductosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaActualizarProductosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaActualizarProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
