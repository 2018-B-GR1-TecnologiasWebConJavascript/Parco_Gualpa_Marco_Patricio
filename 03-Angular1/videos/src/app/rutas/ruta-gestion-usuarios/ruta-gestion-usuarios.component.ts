import {Component, OnInit} from '@angular/core';
import {UsuarioInterface, UsuarioServiceService} from "../../Servicios/usuario-service.service";

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

  ngOnInit() { // Cuando esta listo el Web Component para Mostrarse
    this.usuarios = this._usuarioService.usuarios;
  }


  eliminar(usuario: UsuarioInterface) {
    this._usuarioService.eliminar(usuario.id);

  }

}

