import { Component, OnInit } from '@angular/core';
import {UsuarioInterface, UsuarioServiceService} from "../../Servicios/usuario-service.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-ruta-ver-detalle-usuario',
  templateUrl: './ruta-ver-detalle-usuario.component.html',
  styleUrls: ['./ruta-ver-detalle-usuario.component.scss']
})
export class RutaVerDetalleUsuarioComponent implements OnInit {
 usuario: UsuarioInterface;
  constructor(
    private readonly _usuarioService: UsuarioServiceService,
    private readonly _route: ActivatedRoute,
  ) { }

  ngOnInit() {
    const rutaActiva$= this._route.params;
    rutaActiva$
      .subscribe(
        (parametros)=>{
          console.log(parametros);
          const usuarioEncontrado= this._usuarioService
            .buscarPorId(+parametros.idUsuario);
            console.log(usuarioEncontrado);
            this.usuario=usuarioEncontrado;
        }
      );
  }

}
