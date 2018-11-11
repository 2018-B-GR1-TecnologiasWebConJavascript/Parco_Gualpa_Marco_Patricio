

const version =require('./version.js');
const numeroProcesadores =require('./numero-procesadores.js');
const calculadora =require('./calculadoraSimple.js');
const versionNode =require('./version-node/version-node');
//const sinUso = require('../../04-operadores');

console.log('version',version);
console.log('numero Procesadores',numeroProcesadores);
console.log('versionNode',versionNode);

console.log(calculadora.sumar(1,2));
console.log(calculadora.restar(4,2));
console.log(calculadora.multiplicar(2,2));
console.log(calculadora.dividir(2,2));

//const fs=require('fs');
