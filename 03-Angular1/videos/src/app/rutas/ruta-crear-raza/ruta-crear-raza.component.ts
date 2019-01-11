import { Component, OnInit } from '@angular/core';
import {RazaRestService} from "../../Servicios/rest/raza-rest.service";

@Component({
  selector: 'app-ruta-crear-raza',
  templateUrl: './ruta-crear-raza.component.html',
  styleUrls: ['./ruta-crear-raza.component.scss']
})
export class RutaCrearRazaComponent implements OnInit {
  raza:RazaEjemplo={
    nombre:'',
    apellido:''
  };

  constructor(private  readonly _razaRestService:RazaRestService) { }

  ngOnInit() {
  }
  crearRaza(){
    const crearRaza$ = this._razaRestService
      .create(this.raza.nombre);
    crearRaza$
      .subscribe(
        (raza:Raza)=> {
          console.log('Raza');
          alert(`Raza creada: ${raza.nombre}`);
        },
          (error)=>{
            console.error('Error: 'error);
          }
        }
      )
  }



}

interface RazaEjemplo{
  nombre:string;
  apellido:string;
}
