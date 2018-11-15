// 06 Callbacks-propio

const fs =require('fs');
let contenidoFinal='Inicial';

function appendFile(nombreArchivo, contenido, callback) {
    //leer archivo
    //2.1 Si existe , le añado el contenido al contenido del archivo
    //2.2 si no existe le creo al archivo con el contenido
    //**Devuelvam el contenido completo del aarchivo

    fs.readFile(
        nombreArchivo,
        'utf-8',
        (error,contenidoLeidoDelArchivo)=>{
            if(error){
                //escribimos el archivo
                fs.writeFile(
                    nombreArchivo,
                    contenido,
                    (err)=>{
                       if(err){
                           callback(undefined,err);
                       } else{
                           //devolver el contenido
                           //return contenido;
                           //contenidoFinal=contenido;
                           callback(contenido);
                       }
                    }
                )
            }else{
                fs.writeFile(
                    nombreArchivo,
                    contenidoLeidoDelArchivo+contenido,
                    (err)=>{
                        if(err){
                            callback(undefined,err);
                        } else{
                            //return contenidoLeidoDelArchivo+contenido;
                            //contenidoFinal= contenidoLeidoDelArchivo+contenido
                            callback(contenidoLeidoDelArchivo+contenido);
                        }
                    }
                )
            }
        }

    )

}

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



//['A','B','C']
//0-A.txt  'A'
//1-B.txt  'B'
//2-C.txt  'C'

const respuesta={
    nombreArchivo:'',
    contenidoArchivo:'',
    error:'',
};
//[respuesta,respuesta,respuesta,respuesta]

function ejercicio(arreglotrings,callback){
    const respuestas=[];
    arreglotrings
        .forEach(
            (string, indice)=>{
                const nombreArchivo=`${indice}-${string}.txt`;
                const contenido = string;
                fs.writeFile(
                    nombreArchivo,
                    contenido,
                    (err)=>{
                        const respuesta={
                            nombreArchivo:nombreArchivo,
                            contenidoArchivo:contenido,
                            error:err,
                        };
                        respuestas.push(respuesta);
                        const estaCompletoArreglo = respuetas.length === arreglotrings.length;
                        if(estaCompletoArreglo){
                            callback(respuestas);
                        }
                    }
                )

            }
        )
}

ejercicio(
    ['A','B','C'],
        (respuetaEjercicio)=>{
        console.log(respuetaEjercicio);
        }
);
