const inquirer = require('inquirer');
const fs = require('fs');

const menuPrincipal =
    {
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
    }
];

const buscarRestaurante = [
    {
        name: 'nombreRestaurante',
        type: 'input',
        message: "Cual es el nombre del Restaurante que desea buscar?"
    }
];

const nuevoNombreRestaurante = [
    {
        name: 'nuevoNombreRestaurante',
        type: 'input',
        message: "Ingrese el nuevo nombre?"
    }
];

const nuevaDireccionRestaurante = [
    {
        name: 'nuevoDireccionRestaurante',
        type: 'input',
        message: "Ingrese el nuevo direccion?"
    }
];



function archivoBaseDatos() {
    return new Promise(
        (resolve, reject) => {
            fs.readFile('fdbb.json',
                'utf-8',
                (error, contenidoArchivo) => {
                    if (error) {
                        fs.writeFile('fdbb.json',
                            '{"restaurantes":[]}',
                            (error) => {
                                if (error) {
                                    reject(error);
                                } else {
                                    resolve(contenidoArchivo);
                                }
                            });
                    } else {
                        resolve(contenidoArchivo);
                    }
                });
        }
    );
}

function agregarRestauranteDB(restaurante) {
    return new Promise(
        (resolve, reject) => {
            fs.readFile('fdbb.json',
                'utf-8',
                (error, contenidoArchivo) => {
                    if (error) {
                        reject();
                    } else {
                        const dbRestaurantes = JSON.parse(contenidoArchivo);
                        dbRestaurantes.restaurantes.push(restaurante);
                        fs.writeFile(
                            'fdbb.json',
                            JSON.stringify(dbRestaurantes),
                            () => {
                                if (error) {
                                    reject(error);
                                } else {
                                    resolve({mensaje: "Restaurante ingresado OK"});
                                }
                            }
                        );

                    }
                });
        }
    );
}


function listarRestauranteDB(nombreArchivo) {
    return new Promise(
        (resolve, reject) => {
            fs.readFile(nombreArchivo,
                'utf-8',
                (error, contenidoLeido) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(contenidoLeido);
                        const respuesta = JSON.parse(contenidoLeido);
                        console.log(respuesta);
                    }
                });
        }
    );
}

function buscarRestauranteDB(nombreRestaurante) {
    return new Promise(
        (resolve, reject) => {
            fs.readFile('fdbb.json',
                'utf-8',
                (error, contenidoArchivo) => {
                    if (error) {
                        reject();
                    } else {
                        const dbRestaurantes = JSON.parse(contenidoArchivo);
                        //dbRestaurantes.restaurantes.findIndex(v=>v.nombreRestaurante===nombreRestaurante);
                        const encontro = dbRestaurantes.restaurantes.findIndex(v=>v.nombreRestaurante===nombreRestaurante);
                        if (encontro===-1) {
                            console.log("No Encontrado");
                        } else {
                            console.log("Encontrado");
                        }
                    }
                });
        }
    );
}

function actualizarRestauranteDB(nombreRestaurante,nuevoNombre,nuevaDireccion) {
    return new Promise(
        (resolve, reject) => {
            fs.readFile('fdbb.json',
                'utf-8',
                (error, contenidoArchivo) => {
                    if (error) {
                        reject();
                    } else {
                        const dbRestaurantes = JSON.parse(contenidoArchivo);
                        //dbRestaurantes.restaurantes.findIndex(v=>v.nombreRestaurante===nombreRestaurante);
                        const encontro = dbRestaurantes.restaurantes.findIndex(v=>v.nombreRestaurante===nombreRestaurante);
                        if (encontro===-1) {
                            console.log("No Encontrado");
                        } else {
                            console.log("Encontrado");
                            dbRestaurantes.restaurantes.forEach((v)=> {v.nombreRestaurante=nuevoNombre; v.direccionRestaurante=nuevaDireccion});
                            console.log('Datos actualizados correctamente')
                        }
                    }
                });
        }
    );
}


function eliminarRestauranteDB(nombreRestaurante) {
    return new Promise(
        (resolve, reject) => {
            fs.readFile('fdbb.json',
                'utf-8',
                (error, contenidoArchivo) => {
                    if (error) {
                        reject();
                    } else {
                        const dbRestaurantes = JSON.parse(contenidoArchivo);
                        //dbRestaurantes.restaurantes.findIndex(v=>v.nombreRestaurante===nombreRestaurante);
                        const encontro = dbRestaurantes.restaurantes.findIndex(v=>v.nombreRestaurante===nombreRestaurante);
                        if (encontro===-1) {
                            console.log("No Encontrado");
                        } else {
                            console.log("Encontrado");
                            dbRestaurantes.restaurantes.splice(nombreRestaurante.indexOf(),nombreRestaurante.indexOf());
                            console.log("Eliminado");
                        }
                    }
                });
        }
    );
}






async function main() {
    try {
        archivoBaseDatos();
        const respuesta = await inquirer.prompt(menuPrincipal);
        console.log(respuesta);

        switch (respuesta.opcionesMenu) {
            case 'Ver lista de Restaurantes':
                listarRestauranteDB('fdbb.json');
                main();
                break;
            case 'Ingresar nuevo Restaurante':
                console.log('HII');
                const respuestaIngresoDatosRestaurante = await inquirer.prompt(ingresoRestaurante);
                const respuestaAgregarRestaurante = await agregarRestauranteDB(respuestaIngresoDatosRestaurante);
                console.log(respuestaAgregarRestaurante);
                console.log(respuestaAgregarRestaurante);
                main();
                break;
            case 'Buscar Restaurante':
                const vari = await inquirer.prompt(buscarRestaurante).then((a)=>{return a.nombreRestaurante});
                console.log(vari);
                const marc= await buscarRestauranteDB(vari);
                console.log(marc);
                main();
                break;
            case 'Actualizar Restaurante':
                const nuevoNombre = await inquirer.prompt(nuevoNombreRestaurante).then((a)=>{return a.nombreRestaurante});
                const nuevaDireccion=await inquirer.prompt(nuevaDireccionRestaurante).then((a)=>{return a.nombreRestaurante});
                const nombreRestaurante = await inquirer.prompt(buscarRestaurante).then((a)=>{return a.nombreRestaurante});
                await actualizarRestauranteDB(nombreRestaurante,nuevoNombre,nuevaDireccion);

                break;
            case 'Eliminar Restaurante':
                const eliminarRestaurante= await inquirer.prompt(buscarRestaurante).then((a)=>{return a.nombreRestaurante});
                await eliminarRestauranteDB(eliminarRestaurante);
                main();
                break;
            default:
                console.log("Adios... GOOD BAY");
        }
    } catch (e) {
        console.log("Hubo un err");
    }

}

main();
