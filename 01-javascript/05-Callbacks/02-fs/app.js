

const fs = require('fs');
const express = require('express');
//console.log(fs);
//console.log(express);
const nombreArchivo='ejemplo.txt';
const contenidoArchivo = new Date();




console.log('Inicio');
fs.writeFile(nombreArchivo, textoDelArchivoLeido+” +ncontenidoArchivo,
    (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});



fs.readFile('nombreArchivo','utf-8',
    (err, textDelArchivoLeido) => {
      if (err) {
          try {
              throw new Error(error);
          }catch (e) {
              console.error(e);
          }
      }else{
          console.log(textDelArchivoLeido);
      }
});
console.log('Fin');

