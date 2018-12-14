import {Component, OnInit} from '@angular/core';
import {Usuario} from "../../Servicios/usuario-service.service.spec";
import {UsuarioServiceService} from "../../Servicios/usuario-service.service";

@Component({
  selector: 'app-ruta-gestion-usuarios',
  templateUrl: './ruta-gestion-usuarios.component.html',
  styleUrls: ['./ruta-gestion-usuarios.component.scss']
})
export class RutaGestionUsuariosComponent implements OnInit {

  usuarios =[];
  constructor(private readonly _usuarioService: UsuarioServiceService) { // sirve pra inyeccion de dependencias

  }


  ngOnInit() {
    this.usuarios = this._usuarioService.usuarios;
  }


  eliminar(usuario) {

    this._usuarioService.eliminar(usuario.id);

  }

}

