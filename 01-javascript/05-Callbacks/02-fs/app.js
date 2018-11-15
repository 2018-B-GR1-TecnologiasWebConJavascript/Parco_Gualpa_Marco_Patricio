

const fs = require('fs');
const express = require('express');
//console.log(fs);
//console.log(express);

const nombreArchivo='ejemplo.txt';
contenidoArchivo = new Date();

console.log('Inicio');

fs.readFile('nombreArchivo','utf-8',
    (err, textDelArchivoLeido) => {
      if (err) {
          try {
              throw new Error(err);
          }catch (e) {
                console.error("err");
          }
      }else{
          console.log(textDelArchivoLeido);
          fs.writeFile(nombreArchivo, textoDelArchivoLeido+"\n"+contenidoArchivo,
              (err) => {
                  if (err) throw err;
                  console.log('The file has been saved!');
              });
                fs.writeFile(nombreArchivo, textoDelArchivoLeido+” +ncontenidoArchivo,
                    (err) => {
                        if (err) throw err;
                        console.log('The file has been saved!');
                        });

      }
});

console.log('Fin');
