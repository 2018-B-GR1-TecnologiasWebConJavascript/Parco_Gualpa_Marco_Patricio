import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RutaInicioComponent } from './rutas/ruta-inicio/ruta-inicio.component';
import { RutaLoginComponent } from './rutas/ruta-login/ruta-login.component';
import { RutaPerfilComponent } from './rutas/ruta-perfil/ruta-perfil.component';
import { RutaMenuComponent } from './rutas/ruta-menu/ruta-menu.component';
import { RutaNoEncontradaComponent } from './rutas/ruta-no-encontrada/ruta-no-encontrada.component';
import { RutaGestionusuariosComponent } from './rutas/ruta-gestionusuarios/ruta-gestionusuarios.component';
import { RutaGestionProductosComponent } from './rutas/ruta-gestion-productos/ruta-gestion-productos.component';
//
@NgModule({
  declarations: [
    AppComponent,
    RutaInicioComponent,
    RutaLoginComponent,
    RutaPerfilComponent,
    RutaMenuComponent,
    RutaNoEncontradaComponent,
    RutaGestionusuariosComponent,
    RutaGestionProductosComponent,
  ], //components
  imports: [
    BrowserModule,
    AppRoutingModule
  ], //modulos
  providers: [],// servicios
  bootstrap: [AppComponent] //componente principal

})
export class AppModule { }
