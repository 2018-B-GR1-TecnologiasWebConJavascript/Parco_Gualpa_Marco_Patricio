import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {RazaRestService} from "../../Servicios/rest/raza-rest.service";

@Component({
  selector: 'app-ruta-actualizar-raza',
  templateUrl: './ruta-actualizar-raza.component.html',
  styleUrls: ['./ruta-actualizar-raza.component.scss']
})
export class RutaActualizarRazaComponent implements OnInit {

  constructor(
    private readonly _activatedRoute: ActivatedRoute,
  private readonly _razaRestService:RazaRestService,
  ) { }

  ngOnInit() {

    const rutaActiva$ = this._activatedRoute.params;

    rutaActiva$
      .subscribe(
        (parametros: ParametrosRutaActualizarRaza) => {
          const raza$ = this._razaRestService
            .findOneById(parametros.idRaza);

          raza$
            .subscribe(
              (raza: Raza) => {
                this.razaAActualizar = raza;
              },
              (error) => {
                console.error('Error: ', error);
              }
            );

        }
      );

  }
    buscarRaza(idRaza) {
      const raza$ = this._razaRestService
        .findOneById(idRaza);

      raza$
        .subscribe(
          (raza: Raza) => {
            console.log(raza);
          },
          (error) => {
            console.error('Error: ', error);
          }
        );
    }

    actualizarRaza(formulario: NgForm) {

      const razaActualizada$ = this._razaRestService
        .updateOneById(this.razaAActualizar);

      razaActualizada$
        .subscribe(
          (razaActualizada: Raza) => {

            const url = [
              '/menu',
              'gestion-usuarios'
            ];

            alert('Raza actualizada ' + razaActualizada.nombre);

            this._router.navigate(url);
          },
          (error) => {
            console.error('Error', error);
          }
        );

    }

  }

