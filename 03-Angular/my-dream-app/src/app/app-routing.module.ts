import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RutaInicioComponent} from "./rutas/ruta-inicio/ruta-inicio.component";
import {RutaMenuComponent} from "./rutas/ruta-menu/ruta-menu.component";
import {RutaGestionusuariosComponent} from "./rutas/ruta-gestionusuarios/ruta-gestionusuarios.component";
import {RutaGestionProductosComponent} from "./rutas/ruta-gestion-productos/ruta-gestion-productos.component";

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'inicio'
  },
  {
    //nombre
    path:'Inicio',
    component:RutaInicioComponent
    //componente
  },
  {
    //nombre
    path:'menu',
    component:RutaMenuComponent
    //componente
  },
  {
    path:'menu',
    component:RutaMenuComponent,
    children:[
      {
        path:'',
        pathMatch:'full',
        redirectTo:'gestion-productos'
      },
      {
        path:'gestion-usuarios',
        component:RutaGestionusuariosComponent
      },
      {
        path:'gestion-productos',
        component:RutaGestionProductosComponent
      },
    ]
  },
  {
    path:'**',
    redirectTo:'no-encontrada'
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
