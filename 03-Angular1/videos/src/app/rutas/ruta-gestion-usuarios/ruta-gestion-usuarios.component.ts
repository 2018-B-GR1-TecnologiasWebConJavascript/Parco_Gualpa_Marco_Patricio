import {Component, OnInit} from '@angular/core';
import {UsuarioInterface, UsuarioServiceService} from "../../Servicios/usuario-service.service";
import {RazaRestService} from "../../Servicios/rest/raza-rest.service";
import {Raza} from "../../interfaces/raza";
import {subscribeTo} from "rxjs/internal-compatibility";

@Component({
  selector: 'app-ruta-gestion-usuarios',
  templateUrl: './ruta-gestion-usuarios.component.html',
  styleUrls: ['./ruta-gestion-usuarios.component.scss']
})
export class RutaGestionUsuariosComponent implements OnInit {

  usuarios = [];

  //Inyeccion de Dependencias
  constructor(
    private readonly _razaRestService: RazaRestService
  ) { // sirve para la inyeccion de dependencias

  }

  ngOnInit() { // Cuando esta listo el Web Component para Mostrarse
    const razas$ = this._razaRestService.fincAll();
    razas$
      .subscribe(
        (razas: Raza[])=>{
          console.log(razas);
          this.usuarios=razas;
        },
        (error)=>{
          console.log('Error',error);
        }
      )
  }


  eliminar(usuario: UsuarioInterface) {
   razaEliminada$
    .subscribe(
      (razaEliminada: Raza)=>{
        console.log('Se Elimino',razaEliminada);
        const indice = this.usuarios
          .findIndex((r)=>r.id===raza.id);
      },
      (error)=>{
        console.error('Error',error);
      }
    )

  }

}

