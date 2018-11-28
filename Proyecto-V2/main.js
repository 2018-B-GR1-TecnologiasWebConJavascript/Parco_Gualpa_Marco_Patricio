//declare var require;
//declare var Promise;
const inquirer = require('inquirer');
const fs = require('fs');
const rxjs = require('rxjs');
const mergeMap = require('rxjs/operators').mergeMap;
const map = require('rxjs/operators').map;
const menuPrincipal = {
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
        name: 'nombreRestaurante',
        type: 'input',
        message: "Cual es el nombre del Banquete que desea buscar?"
    }
];
function main() {
    console.log('Empezo');
    inicializarBase()
        .pipe(preguntarOpcionesMenu(), preguntarDatos(), ejecutarAccion(), actualizarBDD())
        .subscribe((respuesta) => {
        console.log(respuesta);
    }, (error) => {
        console.log('Error');
    }, () => {
        console.log('Completado');
        //main();
    });
}
function inicializarBase() {
    const bddLeida$ = rxjs.from(leerDBB());
    return bddLeida$
        .pipe(mergeMap(//Respuesta Anterior Observable
    (respuestaBDD) => {
        if (respuestaBDD.bdd) {
            return rxjs
                .of(respuestaBDD);
        }
        else {
            //crear la base
            return rxjs
                .from(crearBDD());
        }
    }));
}
function leerDBB() {
    return new Promise((resolve) => {
        fs.readFile('dbb.json', 'utf-8', (error, contenido) => {
            if (error) {
                resolve({
                    mensaje: 'Error al abrir la base de datos',
                    bdd: null
                });
            }
            else {
                resolve({
                    mensaje: 'Base leida correctamente',
                    bdd: JSON.parse(contenido)
                });
            }
        });
    });
}
function crearBDD() {
    const contenido = '{"banquetes":[]}';
    return new Promise((resolve, reject) => {
        fs.writeFile('dbb.json', contenido, (error) => {
            if (error) {
                reject({
                    mensaje: 'Error creando la Base de Datos',
                    error: 500
                });
            }
            else {
                resolve({
                    mensaje: 'Base de Datos creada exitosamente',
                    bdd: JSON.parse(contenido)
                });
            }
        });
    });
}
function guardarBDD(bdd) {
    return new Promise((resolve, reject) => {
        fs.writeFile('dbb.json', JSON.stringify(bdd), (error) => {
            if (error) {
                reject({
                    mensaje: 'Error guardando la Base de Datos',
                    error: 500
                });
            }
            else {
                resolve({
                    mensaje: 'Base de Datos guardada exitosamente',
                    bdd
                });
            }
        });
    });
}
function preguntarOpcionesMenu() {
    return mergeMap((respuesta) => {
        return rxjs
            .from(inquirer.prompt(menuPrincipal))
            .pipe(map((opcionMenu) => {
            respuesta.opcionesdelMenu = opcionMenu;
            return respuesta;
        }));
        /*.pipe(
            mergeMap(
                (opcionMenu: OpcionesDelMenu) => {
                    respuesta.opcionesdelMenu = opcionMenu;
                    return respuesta;
                }
            )
        );*/
    });
}
/*
function preguntarOpcionesMenu() {
    return mergeMap(
        (respuesta: respuestaLeerBDD)=>{
            return rxjs
                .from(inquirer.prompt(menuPrincipal))
                .pipe(
                    map(
                        (opcionMenu)=>{
                            respuesta.opcionMenu=opcionMenu;
                            return respuesta;
                        }
                    )
                )
        }
    )
}
*/
function preguntarDatos() {
    return mergeMap((respuesta) => {
        switch (respuesta.opcionesdelMenu.opcionesdelMenu) {
            case 'Ingresar nuevo Banquete':
                return rxjs
                    .from(inquirer.prompt(preguntaIngresoBanquete))
                    .pipe(map((banquete) => {
                    respuesta.banquete = banquete;
                    return respuesta;
                }));
            /*case 'Buscar Banquetes':
                break;
            case 'Ver Banquetes':
                break;
            case 'Actualizar Banquete':
                break;
            case 'Eliminar Banquete':
                    break;*/
        }
    });
}
function ejecutarAccion() {
    return map((respuesta) => {
        respuesta.bdd.banquetes.push(respuesta.banquete);
        return respuesta;
    });
}
function actualizarBDD() {
    return mergeMap((respuesta) => {
        return rxjs.from(guardarBDD(respuesta.bdd));
    });
}
main();
