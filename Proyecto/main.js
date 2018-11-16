const inquirer = require('inquirer');
const fs = require('fs');
const menuPrincipal = {
    type: 'list',
    name: 'opcionesMenu',
    message: 'Seleciona una opcion',
    choices: [
        'Ver lista de Restaurantes',
        'Ingresar nuevo Restaurante',
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
function archivoBaseDatos() {
    return new Promise((resolve, reject) => {
        fs.readFile('fdbb.json', 'utf-8', (error, contenidoArchivo) => {
            if (error) {
                fs.writeFile('fdbb.json', '{["Restaurantes:[]"]}', (error) => {
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
function agregarRestauranteDB(restaurante) {
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
                        resolve({ mensaje: "Restaurante ingresado OK" });
                    }
                });
            }
        });
    });
}
function main() {
    try {
        archivoBaseDatos();
        const respuesta = inquirer.prompt(menuPrincipal);
        //console.log(respuesta);
        switch (respuesta.opcionesMenu) {
            case 'Ver lista de Restaurantes':
                break;
            case 'Ingresar nuevo Restaurante':
                console.log('HII');
                const respuestaIngresoDatosRestaurante = inquirer.prompt(ingresoRestaurante);
                const respuestaAgregarRestaurante = agregarRestauranteDB(respuestaIngresoDatosRestaurante);
                console.log(respuestaAgregarRestaurante);
                main();
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
}
main();
