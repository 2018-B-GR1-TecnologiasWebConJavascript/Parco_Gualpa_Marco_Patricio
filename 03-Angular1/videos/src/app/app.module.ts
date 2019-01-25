import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {RutaInicioComponent} from './rutas/ruta-inicio/ruta-inicio.component';
import {RutaLoginComponent} from './rutas/ruta-login/ruta-login.component';
import {RutaPerfilComponent} from './rutas/ruta-perfil/ruta-perfil.component';
import {RutaMenuComponent} from './rutas/ruta-menu/ruta-menu.component';
import {Ruta404Component} from './rutas/ruta404/ruta404.component';
import {RutaGestionUsuariosComponent} from './rutas/ruta-gestion-usuarios/ruta-gestion-usuarios.component';
import {RutaGestionProductosComponent} from './rutas/ruta-gestion-productos/ruta-gestion-productos.component';
import {RutaCrearUsuariosComponent} from './rutas/ruta-crear-usuarios/ruta-crear-usuarios.component';
import {RutaActualizarUsuariosComponent} from './rutas/ruta-actualizar-usuarios/ruta-actualizar-usuarios.component';
import {RutaCrearProductosComponent} from './rutas/ruta-crear-productos/ruta-crear-productos.component';
import {RutaActualizarProductosComponent} from './rutas/ruta-actualizar-productos/ruta-actualizar-productos.component';
import {UsuarioServiceService} from "./Servicios/usuario-service.service";
import {RutaVerDetalleUsuarioComponent} from './rutas/ruta-ver-detalle-usuario/ruta-ver-detalle-usuario.component';
import {HttpClientModule} from "@angular/common/http";
import {RazaRestService} from "./Servicios/rest/raza-rest.service";
import {RutaCrearRazaComponent} from './rutas/ruta-crear-raza/ruta-crear-raza.component';
import {RutaActualizarRazaComponent} from './rutas/ruta-actualizar-raza/ruta-actualizar-raza.component';
import {ImagenPeliculaComponent} from './componentes/imagen-pelicula/imagen-pelicula.component';
import {FormularioRazaComponent} from './componentes/formulario-raza/formulario-raza.component';
import {LoginComponent} from './componentes/login/login.component';
import {TableModule} from "primeng/table";
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/primeng";

@NgModule({
  declarations: [
    AppComponent,
    RutaInicioComponent,
    RutaLoginComponent,
    RutaPerfilComponent,
    RutaMenuComponent,
    Ruta404Component,
    RutaGestionUsuariosComponent,
    RutaGestionProductosComponent,
    RutaCrearUsuariosComponent,
    RutaActualizarUsuariosComponent,
    RutaCrearProductosComponent,
    RutaActualizarProductosComponent,
    RutaVerDetalleUsuarioComponent,
    RutaCrearRazaComponent,
    RutaActualizarRazaComponent,
    ImagenPeliculaComponent,
    FormularioRazaComponent,
    LoginComponent,
  ], //components
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule,
    ButtonModule,
    InputTextModule//Acceso a un servicio http client
  ], //modulos
  providers: [
    UsuarioServiceService,
    RazaRestService],
    AuthService,
    // servicios

  bootstrap: [AppComponent] //componente principal

})
export class AppModule {
}
