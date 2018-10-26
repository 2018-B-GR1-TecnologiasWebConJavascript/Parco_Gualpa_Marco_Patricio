

const fs = require('fs');
const express = require('express');
//console.log(fs);
//console.log(express);
console.log('Inicio');
fs.readFile('.gitignore','utf-8',
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

