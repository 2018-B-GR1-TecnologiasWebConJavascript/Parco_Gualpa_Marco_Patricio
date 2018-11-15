const fs = require('fs');
/*
const promesa=()=>{
    return new Promise(
        (resolve,reject)=>{
            console.log("Ejecutando");
            resolve(10);
        }
    );
};
console.log(promesa);

promesa()
    .then(
        (numero)=>{
            console.log("ok",numero);
        }
    )
    .catch(
        (error)=>{
            console.log("err",error);
        }
    );
*/

const promesa = (nombreArchivo) => {
    return new Promise(
        (resolve, reject) => {
            fs.readFile(nombreArchivo,
                'utf-8',
                (error, contenidoLeido) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(contenidoLeido);
                    }
                });
        }
    );
};

const promesaEscritura = (nombreArchivo, contenidoArchivo,) => {
    return new Promise(
        (resolve, reject) => {
            fs.writeFile(nombreArchivo,
                contenidoArchivo,
                (error) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(contenidoArchivo);
                    }
                });
        }
    );
};

promesa('06-ejemplo.txt')
    .then(
        (contenido) => {
            console.log("ok",contenido);
            return promesaEscritura("06-ejemplo.txt",
                contenido + "Nuevo contenido");
        }
    )
    .then(
        (contenidoCompleto)=>{
            console.log(contenidoCompleto);
        }
    )
    .catch(
        (err) => {
            console.log("err",err);
        }
    );


/*const nombreArchivo='07-ejemplo.txt';


const nuevaPromesa=(nombreArchivo)=>{
        return new Promise(
            (resolve, reject)=>{
                fs.readFile(
                    nombreArchivo,
                    'utf-8',
                    (err), contenidoDelArchivoLeido=>{
                        if(err){
                            reject(err);
                            console.log('err');
                        }else{
                            resolve(contenidoDelArchivoLeido);
                            console.log('err');
                        }
                    }
                )
                resolve();
            }
        );

    const nuevaPromesaEscritura=(nombreArchivo,contenidoArchivo)=>{
        return new Promise(
            (resolve, reject)=>{
                fs.readFile(
                    nombreArchivo,
                    'utf-8',
                    (err), contenidoDelArchivoLeido=>{
                        if(err){
                            reject(err);
                            console.log('err');
                        }else{
                            resolve(contenidoDelArchivoLeido);
                            console.log('err');
                        }
                    }
                )
                resolve();
            }
        );

nuevaPromesa(nombreArchivo)
.then(
    (contenido)=>{
        console.log('OK',contenido);
        return nuevaPromesaEscritura('07-ejemplo2.txt','Adios Amigos');
    }
);
    .then(
        (contenidoArchivoEscrito)=>{
            console.log(contenidoArchivoEscrito);
        }
    )
.catch(
    (error)=>{
        console.log('mal',error);
    }
);

        appendFile(
            '06-ejemplo.txt',
            '\n hola amigos',
            (contenido,err)=>{
                if(err){
                    console.log(err);
                }else{
                    console.log(contenido);
                }
            });


        promesaAppenFile(nombre)
            .then(
                (contenidoArchivoEscrito)=>{
                    console.log(contenidoArchivoEscrito);
                }
            )
            .catch(
                (error)=>{
                console.log(error);
                }
            );
*/