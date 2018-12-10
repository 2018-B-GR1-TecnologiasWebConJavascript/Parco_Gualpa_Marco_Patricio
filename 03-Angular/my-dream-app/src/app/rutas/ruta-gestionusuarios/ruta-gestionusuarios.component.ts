import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ruta-gestionusuarios',
  templateUrl: './ruta-gestionusuarios.component.html',
  styleUrls: ['./ruta-gestionusuarios.component.scss']
})
export class RutaGestionusuariosComponent implements OnInit {
usuarios:Usuario[]=[
  {
    id:1,
    nombre:'Marco'
  },
  {
    id:2,
    nombre:'Pato'
  },
];
  constructor() { }

  ngOnInit() {
  }

  hola(){
    return 'hola'
  }
  imprimir(usuario:Usuario){
    console.log('Imprimir',usuario);
    const indiceUsuarioEliminar= this.usuarios
      .findIndex((usuarioABuscar)=>{return usuarioABuscar.id===usuario.id});
    this.usuarios.splice(indiceUsuarioEliminar,1)
  }
}

interface Usuario {
  nombre?:string,
  id?:number
}
