import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../Servicios/rest/auth.service";

@Component({
  selector: 'app-ruta-login',
  templateUrl: './ruta-login.component.html',
  styleUrls: ['./ruta-login.component.scss']
})
export class RutaLoginComponent implements OnInit {

  constructor(private readonly _autService:AuthService) { }

  ngOnInit() {
  }

  const respuestaLogin$ = this._autService
    .login(
      this.usuario.username,
      this.usuario.password
    );

  respuestaLogin

}
