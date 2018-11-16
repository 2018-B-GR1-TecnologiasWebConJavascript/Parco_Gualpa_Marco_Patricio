var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const inquirer = require('inquirer');
const fs = require('fs');
const menuPrincipal = {
    type: 'list',
    name: 'opcionesMenu',
    message: 'Seleciona una opcion',
    choices: [
        'Ver lista de Restaurantes',
        'Ingresar nuevo Restaurante',
        'Buscar Restaurante',
        'Actualizar Restaurante',
        'Eliminar Restaurante',
    ]
};
const ingresoRestaurante = [
    {
        type: 'input',
        name: 'nombreRestaurante',
        message: "Cual es el nombre del Restaurante ?"
    },
    {
        type: 'input',
        name: 'direccionRestaurante',
        message: "Direccion de ubicacion del Restaurante ?"
    },
    {
        type: 'input',
        name: 'ingresoMesual',
        message: " Cual es el ingreso Mensual?"
    },
    {
        type: 'input',
        name: 'nombreCoordinador',
        message: "Nombre del coordinador jefe del restaurante"
    }
];
const buscarRestaurante = [
    {
        name: 'nombreRestaurante',
        type: 'input',
        message: "Cual es el nombre del Restaurante que desea buscar?"
    }
];
function archivoBaseDatos() {
    return new Promise((resolve, reject) => {
        fs.readFile('fdbb.json', 'utf-8', (error, contenidoArchivo) => {
            if (error) {
                fs.writeFile('fdbb.json', '{"restaurantes":[]}', (error) => {
                    if (error) {
                        reject(error);
                    }
                    else {
                        resolve(contenidoArchivo);
                    }
                });
            }
            else {
                resolve(contenidoArchivo);
            }
        });
    });
}
const agregarRestauranteDB = (restaurante) => {
    return new Promise((resolve, reject) => {
        fs.readFile('fdbb.json', 'utf-8', (error, contenidoArchivo) => {
            if (error) {
                reject();
            }
            else {
                const dbRestaurantes = JSON.parse(contenidoArchivo);
                dbRestaurantes.restaurantes.push(restaurante);
                fs.writeFile('fdbb.json', JSON.stringify(dbRestaurantes), () => {
                    if (error) {
                        reject(error);
                    }
                    else {
                        resolve();
                    }
                });
            }
        });
    });
};
function listarRestauranteDB(nombreArchivo) {
    return new Promise((resolve, reject) => {
        fs.readFile(nombreArchivo, 'utf-8', (error, contenidoLeido) => {
            if (error) {
                reject(error);
            }
            else {
                resolve(contenidoLeido);
                const respuesta = JSON.parse(contenidoLeido);
                console.log(respuesta);
            }
        });
    });
}
function buscarRestauranteDB(nombreRestaurante) {
    return new Promise((resolve, reject) => {
        fs.readFile('fdbb.json', 'utf-8', (error, contenidoArchivo) => {
            if (error) {
                reject();
            }
            else {
                const dbRestaurantes = JSON.parse(contenidoArchivo);
                //dbRestaurantes.restaurantes.findIndex(v=>v.nombreRestaurante===nombreRestaurante);
                const encontro = dbRestaurantes.restaurantes.findIndex(v => v.nombreRestaurante === nombreRestaurante);
                if (encontro === -1) {
                    console.log("No Encontrado");
                }
                else {
                    console.log("Encontrado");
                }
            }
        });
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            archivoBaseDatos();
            const respuesta = yield inquirer.prompt(menuPrincipal);
            console.log(respuesta);
            switch (respuesta.opcionesMenu) {
                case 'Ver lista de Restaurantes':
                    listarRestauranteDB('fdbb.json');
                    main();
                    break;
                case 'Ingresar nuevo Restaurante':
                    console.log('HII');
                    const respuestaIngresoDatosRestaurante = yield inquirer.prompt(ingresoRestaurante);
                    agregarRestauranteDB(respuestaIngresoDatosRestaurante)
                        .then((contenido) => {
                        console.log("IIIIIII   ok", contenido);
                    })
                        .catch((err) => {
                        console.log('Ingresado incorrectamente', err);
                    });
                    /*const respuestaAgregarRestaurante = await agregarRestauranteDB(respuestaIngresoDatosRestaurante);
                    console.log(respuestaAgregarRestaurante);
                    console.log(respuestaAgregarRestaurante);*/
                    main();
                    break;
                case 'Buscar Restaurante':
                    /*const respuestaNombreRestaurante = await inquirer.prompt();
                    console.log(respuestaNombreRestaurante);
                    await buscarRestauranteDB('sxxsd');
                    main();*/
                    break;
                case 'Actualizar Restaurante':
                    break;
                case 'Eliminar Restaurante':
                    break;
                default:
                    console.log("Adios... GOOD BAY");
            }
        }
        catch (e) {
            console.log("Hubo un err");
        }
    });
}
main();
