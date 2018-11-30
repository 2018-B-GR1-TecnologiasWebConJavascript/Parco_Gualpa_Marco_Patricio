//declare var require;
//declare var Promise;
const inquirer = require('inquirer');
const fs = require('fs');
const rxjs = require('rxjs');
const mergeMap = require('rxjs/operators').mergeMap;
const map = require('rxjs/operators').map;
//const switchMap = require('rxjs/operators').switchMap;
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
        name: 'nombreBanquete',
        type: 'input',
        message: "Cual es el nombre del Banquete que desea buscar?"
    }
];
const preguntaEliminarBanquete = [
    {
        name: 'nombreBanquete',
        type: 'input',
        message: "Cual es el nombre del Banquete que desea eliminar?"
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
        .pipe(preguntarOpcionesMenu(), preguntarDatos(), ejecutarAccion(), actualizarBDD())
        .subscribe((respuesta) => {
        console.log(respuesta);
    }, (error) => {
        console.log('Error');
    }, () => {
        console.log('Completado');
        main();
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
        fs.readFile('data.json', 'utf-8', (error, contenido) => {
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
    });
}
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
            case 'Buscar Banquetes':
                return preguntarNombreBanqueteBuscar(respuesta);
            case 'Actualizar Banquete':
                return preguntarNombreBanquete(respuesta);
            case 'Eliminar Banquete':
                return eliminarBanquetePorNombre(respuesta);
                break;
            case 'Ver Banquetes':
                break;
        }
    });
}
function ejecutarAccion() {
    return map((respuesta) => {
        const opcion = respuesta.opcionesdelMenu.opcionesdelMenu;
        switch (opcion) {
            case 'Ingresar nuevo Banquete':
                respuesta.bdd.banquetes.push(respuesta.banquete);
                return respuesta;
                break;
            case 'Buscar Banquetes':
                const indic = respuesta.indiceBanquete;
                console.log('respuesta.bdd.banquetes[in]', respuesta.bdd.banquetes[indic]);
                return respuesta;
            case 'Actualizar Banquete':
                const indice = respuesta.indiceBanquete;
                respuesta.bdd.banquetes[indice].costoBanquete = respuesta.banquete.costoBanquete;
                return respuesta;
                break;
            case 'Eliminar Banquete':
                respuesta.bdd.banquetes.splice(respuesta.indiceBanquete, respuesta.indiceBanquete);
                return respuesta;
                break;
            case 'Ver Banquetes':
                break;
        }
    });
}
function actualizarBDD() {
    return mergeMap((respuesta) => {
        return rxjs.from(guardarBDD(respuesta.bdd));
    });
}
function preguntarNombreBanquete(respuesta) {
    return rxjs
        .from(inquirer.prompt(preguntaBuscarBanquete))
        .pipe(mergeMap((resultado) => {
        const indiceBanquete = respuesta.bdd.banquetes
            .findIndex((banquete) => {
            return banquete.nombreBanquete === resultado.nombreBanquete;
        });
        console.log(respuesta.bdd.banquetes);
        console.log(indiceBanquete);
        if (indiceBanquete === -1) {
            console.log('Lo sentimos ese Banquete no existe, vuelva intentarlo');
            return preguntarNombreBanquete(respuesta);
        }
        else {
            respuesta.indiceBanquete = indiceBanquete;
            return rxjs
                .from(inquirer.prompt(preguntaNuevoCostoBanquete))
                .pipe(map((costoBanquete) => {
                respuesta.banquete = {
                    nombreBanquete: null,
                    costoBanquete: costoBanquete.costoBanquete
                };
                return respuesta;
            }));
        }
    }));
}
function preguntarNombreBanqueteBuscar(respuesta) {
    return rxjs
        .from(inquirer.prompt(preguntaBuscarBanquete))
        .pipe(mergeMap((resultado) => {
        const indiceBanquete = respuesta.bdd.banquetes
            .findIndex((banquete) => {
            return banquete.nombreBanquete === resultado.nombreBanquete;
        });
        //console.log(respuesta.bdd.banquetes);
        console.log(indiceBanquete);
        if (indiceBanquete === -1) {
            console.log('Lo sentimos ese Banquete no existe, vuelva intentarlo');
            //preguntarNombreBanqueteBuscar(respuesta);
        }
        else {
            respuesta.indiceBanquete = indiceBanquete;
            return rxjs.of(respuesta);
        }
    }));
}
function eliminarBanquetePorNombre(respuesta) {
    return rxjs
        .from(inquirer.prompt(preguntaEliminarBanquete))
        .pipe(mergeMap((resultado) => {
        const indiceBanquete = respuesta.bdd.banquetes
            .findIndex((banquete) => {
            return banquete.nombreBanquete === resultado.nombreBanquete;
        });
        console.log(indiceBanquete);
        if (indiceBanquete === -1) {
            console.log('Lo sentimos ese Banquete no existe, vuelva intentarlo');
            return preguntarNombreBanquete(respuesta);
        }
        else {
            console.log("El banquete fue eliminado correctamente");
            respuesta.indiceBanquete = indiceBanquete;
            return rxjs.of(respuesta);
        }
    }));
}
main();
