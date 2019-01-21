import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ruta-inicio',
  templateUrl: './ruta-inicio.component.html',
  styleUrls: ['./ruta-inicio.component.scss']
})
export class RutaInicioComponent implements OnInit {

  constructor() { }
imagenes:Imagenes[]=[
  {anio:2016,
  nombreImagen:'01.jpeg',
  nombrePelicula:'lol'
  },
  {anio:2010,
    nombreImagen:'02.jpeg',
    nombrePelicula:'lol'
  },
  {anio:2012,
    nombreImagen:'03.jpeg',
    nombrePelicula:'lol'
  },

];
  ngOnInit() {
  }
  agregarCarrito(pelicula){
    console.log("Agregar al Carrito",pelicula);
  }
}
export interface Imagenes {
  nombreImagen:string,
  nombrePelicula:string,
  anio:number

}
