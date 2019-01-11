import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RutaInicioComponent} from "./rutas/ruta-inicio/ruta-inicio.component";
import {RutaMenuComponent} from "./rutas/ruta-menu/ruta-menu.component";
import {RutaPerfilComponent} from "./rutas/ruta-perfil/ruta-perfil.component";
import {RutaLoginComponent} from "./rutas/ruta-login/ruta-login.component";
import {Ruta404Component} from "./rutas/ruta404/ruta404.component";
import {RutaGestionUsuariosComponent} from "./rutas/ruta-gestion-usuarios/ruta-gestion-usuarios.component";
import {RutaGestionProductosComponent} from "./rutas/ruta-gestion-productos/ruta-gestion-productos.component";
import {RutaCrearUsuariosComponent} from "./rutas/ruta-crear-usuarios/ruta-crear-usuarios.component";
import {RutaActualizarUsuariosComponent} from "./rutas/ruta-actualizar-usuarios/ruta-actualizar-usuarios.component";
import {RutaCrearProductosComponent} from "./rutas/ruta-crear-productos/ruta-crear-productos.component";
import {RutaActualizarProductosComponent} from "./rutas/ruta-actualizar-productos/ruta-actualizar-productos.component";
import {RutaVerDetalleUsuarioComponent} from "./rutas/ruta-ver-detalle-usuario/ruta-ver-detalle-usuario.component";
import {RutaCrearRazaComponent} from "./rutas/ruta-crear-raza/ruta-crear-raza.component";


const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo: 'inicio'
    //componente
  },
  {
    //nombre
    path:'inicio',
    component: RutaInicioComponent
    //componente
  },
  {
    //nombre
    path:'menu',
    component: RutaMenuComponent,
    children:[
      {
        path:'',
        pathMatch:'full',
        redirectTo: 'gestion-productos'
        //componente
      },
      {
        //menu/gestion-usuarios
        path:'gestion-usuarios',
        component:RutaGestionUsuariosComponent,
        children:[
          {
            path:'',
            pathMatch:'full',
            redirectTo: 'actualizar-usuarios'
            //componente
          },
          {
            path:'crear-usuarios',
            component:RutaCrearUsuariosComponent,
          },
          {
            path:'actualizar-usuarios',
            component:RutaActualizarUsuariosComponent,
          },
        ]
      },
      {
        path: 'crear-raza',
        component: RutaCrearRazaComponent,
      },

      {
        path:'ver-usuario/:idUsuario',
        component:RutaVerDetalleUsuarioComponent,
      },
      {
        path:'gestion-productos',
        component:RutaGestionProductosComponent,
        children:[
          {
            path:'',
            pathMatch:'full',
            redirectTo: 'actualizar-productos'
            //componente
          },
          {
            path:'crear-productos',
            component:RutaCrearProductosComponent,
          },
          {
            path:'actualizar-productos',
            component:RutaActualizarProductosComponent,
          }
        ]

      },
      {
        path: 'ver-usuario',
        component: RutaVerDetalleUsuarioComponent
      }
    ]
    //componente
  },
  {
    //nombre
    path:'login',
    component: RutaLoginComponent
    //componente
  },
  {
    //nombre
    path:'perfil',
    component: RutaPerfilComponent
    //componente
  },
  {
    //nombre
    path:'no-encontrado',
    component: Ruta404Component
    //componente
  },
  {
    //nombre
    path:'**',
    redirectTo: 'no-encontrado'
    //componente
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
