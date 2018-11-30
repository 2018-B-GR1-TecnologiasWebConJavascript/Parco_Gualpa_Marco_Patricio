//declare var require;
//declare var Promise;


const inquirer = require('inquirer');
const fs = require('fs');
const rxjs = require('rxjs');
const mergeMap = require('rxjs/operators').mergeMap;
const map = require('rxjs/operators').map;
//const switchMap = require('rxjs/operators').switchMap;

const menuPrincipal =
    {
        type: 'list',
        name: 'opcionesdelMenu',
        message: 'Seleciona una opcion',
        choices: [
            'Ver Banquetes',
            'Ingresar nuevo Banquete',
            'Buscar Banquetes',
            'Actualizar Banquete',
            'Eliminar Banquete',
        ]
    };

const preguntaIngresoBanquete = [
    {
        type: 'input',
        name: 'nombreBanquete',
        message: "Cual es el nombre del banquete a ingresar ?"
    },
    {
        type: 'input',
        name: 'costoBanquete',
        message: "Ingrese el costo del Banquete?"
    }
];

const preguntaBuscarBanquete = [
    {
        name: 'nombreBanquete',
        type: 'input',
        message: "Cual es el nombre del Banquete que desea buscar?"
    }
];

const preguntaNuevoCostoBanquete = [
    {
        name: 'costoBanquete',
        type: 'input',
        message: "Cual es el nuevo costo del Banquete que desea actualizar?"
    }
];


function main() {
    console.log('Empezo');
    inicializarBase()
        .pipe(
            preguntarOpcionesMenu(),
            preguntarDatos(),
            ejecutarAccion(),
            actualizarBDD()
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


function inicializarBase() {
    const bddLeida$ = rxjs.from(leerDBB());
    return bddLeida$
        .pipe(
            mergeMap( //Respuesta Anterior Observable
                (respuestaBDD: RespuestaLeerBDD) => {
                    if (respuestaBDD.bdd) {
                        return rxjs
                            .of(respuestaBDD);
                    } else {
                        //crear la base
                        return rxjs
                            .from(crearBDD());

                    }
                }
            ),
        );
}

function leerDBB() {
    return new Promise(
        (resolve) => {
            fs.readFile('dbb.json', 'utf-8',
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

function crearBDD() {
    const contenido = '{"banquetes":[]}';
    return new Promise(
        (resolve, reject) => {
            fs.writeFile(
                'dbb.json',
                contenido,
                (error) => {
                    if (error) {
                        reject({
                            mensaje: 'Error creando la Base de Datos',
                            error: 500
                        });
                    } else {
                        resolve({
                            mensaje: 'Base de Datos creada exitosamente',
                            bdd: JSON.parse(contenido)
                        });
                    }
                }
            );
        }
    );
}

function guardarBDD(bdd: BaseDeDatos) {
    return new Promise(
        (resolve, reject) => {
            fs.writeFile('dbb.json',
                JSON.stringify(bdd),
                (error) => {
                    if (error) {
                        reject({
                            mensaje: 'Error guardando la Base de Datos',
                            error: 500
                        });
                    } else {
                        resolve({
                            mensaje: 'Base de Datos guardada exitosamente',
                            bdd
                        });

                    }
                }
            );
        }
    );
}

function preguntarOpcionesMenu() {
    return mergeMap(
        (respuesta: RespuestaLeerBDD) => {
            return rxjs
                .from(inquirer.prompt(menuPrincipal))
                .pipe(
                    map(
                        (opcionMenu: OpcionesDelMenu) => {
                            respuesta.opcionesdelMenu = opcionMenu;
                            return respuesta;
                        }
                    )
                )
        }
    );
}


interface RespuestaLeerBDD {
    mensaje: string;
    bdd?: BaseDeDatos;
    opcionesdelMenu?: OpcionesDelMenu;
    banquete?: Banquete;
    indiceUsuario?: number;
}

interface BaseDeDatos {
    banquetes: Banquete[];
}

interface Banquete {
    nombre: string,
    costo: number
}

interface BuscarBanqueteNombre {
    nombre: string,
}

interface OpcionesDelMenu {
    opcionesdelMenu: 'Ver Banquetes' | 'Ingresar nuevo Banquete' | 'Buscar Banquetes' | 'Actualizar Banquete' | 'Eliminar Banquete'
}


function preguntarDatos() {
    return mergeMap(
        (respuesta: RespuestaLeerBDD) => {
            switch (respuesta.opcionesdelMenu.opcionesdelMenu) {
                case 'Ingresar nuevo Banquete':
                    return rxjs
                        .from(inquirer.prompt(preguntaIngresoBanquete))
                        .pipe(
                            map(
                                (banquete: Banquete) => {
                                    respuesta.banquete = banquete;
                                    return respuesta;
                                }
                            )
                        );

                case 'Buscar Banquetes':
                //return preguntarNombreBanquete(respuesta);

                case 'Actualizar Banquete':
                    return preguntarNombreBanquete(respuesta);
                case 'Eliminar Banquete':
                    break;
                case 'Ver Banquetes':
                    /*return rxjs.from(leerDBB())
                        .pipe(
                            map(
                                (respuesta: RespuestaLeerBDD) => {
                                    return console.log(respuesta.bdd);
                                }
                            )
                        );*/
                    break;
            }
        }
    );
}

/*
function ejecutarAccion() {
    return map(
        (respuesta: RespuestaLeerBDD) => {

            respuesta.bdd.banquetes.push(respuesta.banquete);
            return respuesta;
        }
    )
}*/

function ejecutarAccion() {
    return map(
        (respuesta: RespuestaLeerBDD) => {
            const opcion = respuesta.opcionesdelMenu.opcionesdelMenu;
            switch (opcion) {
                case 'Ingresar nuevo Banquete':
                    respuesta.bdd.banquetes.push(respuesta.banquete);
                    return respuesta;
                    break;
                case 'Buscar Banquetes':
                    //const indice= respuesta.indiceUsuario;
                    break;
                case 'Actualizar Banquete':
                    const indice = respuesta.indiceUsuario;
                    respuesta.bdd.banquetes[indice].costo = respuesta.banquete.costo;
                    return respuesta;
                    break;
                case 'Eliminar Banquete':
                    break;
                case 'Ver Banquetes':
                    break;
            }
        }
    )
}


function actualizarBDD() {
    return mergeMap(
        (respuesta: RespuestaLeerBDD) => {
            return rxjs.from(guardarBDD(respuesta.bdd));
        }
    )
}

function preguntarNombreBanquete(respuesta: RespuestaLeerBDD) {
    return rxjs
        .from(inquirer.prompt(preguntaBuscarBanquete))
        .pipe(
            mergeMap(
                (resultado: BuscarBanqueteNombre) => {
                    const indiceUsuario = respuesta.bdd.banquetes
                        .findIndex(
                            (banquete) => {
                                return banquete.nombre === resultado.nombre;
                            });
                    console.log(indiceUsuario);
                    if (indiceUsuario === -1) {
                        console.log('Lo sentimos ese Banquete no existe, vuelva intentarlo');
                        return preguntarNombreBanquete(respuesta);
                    } else {
                        respuesta.indiceUsuario = indiceUsuario;
                        return rxjs
                            .from(inquirer.prompt(preguntaNuevoCostoBanquete))
                            .pipe(
                                map(
                                    (costo: { costo: number }) => {
                                        respuesta.banquete = {
                                            nombre: null,
                                            costo: costo.costo
                                        };
                                        return respuesta;
                                    }
                                )
                            )
                    }
                }
            )
        );
}

main();