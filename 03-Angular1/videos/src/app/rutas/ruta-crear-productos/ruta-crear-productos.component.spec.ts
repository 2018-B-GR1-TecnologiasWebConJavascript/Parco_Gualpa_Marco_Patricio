import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaCrearProductosComponent } from './ruta-crear-productos.component';

describe('RutaCrearProductosComponent', () => {
  let component: RutaCrearProductosComponent;
  let fixture: ComponentFixture<RutaCrearProductosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaCrearProductosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaCrearProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
