
const fs =require('fs');

const nombreArchivo='07-ejemplo.txt';


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
        return nuevaPromesaEscritura('07-ejemplo2.txt','Adiso Amigos');
    }
)
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