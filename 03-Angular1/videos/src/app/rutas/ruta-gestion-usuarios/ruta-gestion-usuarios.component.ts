import {Component, OnInit} from '@angular/core';
import {Usuario} from "../../Servicios/usuario-service.service.spec";
import {UsuarioInterace, UsuarioServiceService} from "../../Servicios/usuario-service.service";

@Component({
  selector: 'app-ruta-gestion-usuarios',
  templateUrl: './ruta-gestion-usuarios.component.html',
  styleUrls: ['./ruta-gestion-usuarios.component.scss']
})
export class RutaGestionUsuariosComponent implements OnInit {

  usuarios = [];

  //Inyeccion de Dependencias
  constructor(
    private readonly _usuarioService: UsuarioServiceService
  ) { // sirve para la inyeccion de dependencias

  }


  ngOnInit() {
    this.usuarios = this._usuarioService.usuarios;
  }


  eliminar(usuario: UsuarioInterace) {
    this._usuarioService.eliminar(usuario.id);

  }

}

