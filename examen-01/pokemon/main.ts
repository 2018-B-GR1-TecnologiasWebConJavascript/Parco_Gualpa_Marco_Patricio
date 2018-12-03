//declare var require;
//declare var Promise;
//import {pipe} from "rxjs";

const inquirer = require('inquirer');
const fs = require('fs');
const rxjs = require('rxjs');
const mergeMap = require('rxjs/operators').mergeMap;
const map = require('rxjs/operators').map;

//const resultadoFilter = arregloNumeros.filter(n => (n % 2) === 0);

function main() {
    console.log('Empezo');
    inicializarBase()
        .pipe(
           /*
            map(
                pipe(
                    (respuesta:RespuestaLeerBDD)=>{
                        const resultadoFilter =respuesta.bdd.tipos
                            .filter(
                                (tipo:any)=>{
                                    return tipo.tipo === respuesta.opciones;
                                }
                            );
                        console.log(resultadoFilter);
                    }
                )
            ),
            */

           /*
           map(
               ()=>{
                   pipe(
                       (respuesta:RespuestaLeerBDD2)=>{
                           const resultadoFilter =respuesta.bdd.nombres
                               .filter(
                                   (tipo:any)=>{
                                       return tipo.tipo === respuesta.opciones;
                                   }
                               );
                           console.log(resultadoFilter);
                       }
                   )
               }
           )*/

        )
        .subscribe(
            (respuesta) => {
                console.log(respuesta);
            },
            (error) => {
                console.log('Error');
            },
            () => {
                console.log('Completado');
                main();
            }
        )
}
---------------------------------------------------------------------------------------------------------------
const arregloRespuestaTypes =[
    {
        tipo:'grass',
    },
    {
        tipo:'ground',
    }
];

interface RespuestaLeerBDD {
    mensaje: string;
    bdd?: BaseDeDatos;
    tipo?:Types;
    opciones?: OpcionesTipos;

}
interface BaseDeDatos {
    tipos: Types[]|any;
}

interface Types{
    tipo: string;
}

interface OpcionesTipos {
    opciones: 'grass'|'ground';
}
---------------------------------------------------------------------------------------------------------------------------
const arregloRespuestaAbilities =[
    {
        nombre:'leaf-guard',
    },
    {
        nombre:'overgrow',
    }
];

interface RespuestaLeerBDD2 {
    mensaje: string;
    bdd?: BaseDeDatos;
    nombre?:Abilities;
    opciones?:OpcionesAbilities;
}

    interface BaseDeDatos {
    nombres: Abilities[]|any;
}

interface Abilities{
    nombre: string;
}

interface OpcionesAbilities {
    opciones: 'leaf-guard'|'overgrow';
}
------------------------------------------------------------------------------------------------------------------------
const arregloRespuestaMove =[
    {
        nombre:'swords-dance',
    },
    {
        nombre:'cut',
    }
];

interface RespuestaLeerBDD3 {
    mensaje: string;
    bdd?: BaseDeDatos;
    nombre?:Abilities;
    opciones?:OpcionesAbilities;
}

interface BaseDeDatos {
    nombres: Move[]|any;
}

interface Move{
    nombre: string;
}

interface OpcionesMove {
    opciones: 'swords-dance'|'cut';
}
















function leerDBB() {
    return new Promise(
        (resolve) => {
            fs.readFile('data.json', 'utf-8',
                (error, contenido) => {
                    if (error) {
                        resolve({
                            mensaje: 'Error al abrir la base de datos',
                            bdd: null
                        });
                    } else {
                        resolve({
                            mensaje: 'Base leida correctamente',
                            bdd: JSON.parse(contenido)
                        });
                    }
                }
            );

        }
    );
}


function inicializarBase() {
    const bddLeida$ = rxjs.from(leerDBB());
    return bddLeida$
        .pipe(
            mergeMap( //Respuesta Anterior Observable
                (respuestaBDD:RespuestaLeerBDD) => {
                    if (respuestaBDD.bdd) {
                        return rxjs
                            .of(respuestaBDD);
                    } else {
                      console.log('Ya esta creada');
                    }
                }
            ),
        );
}


