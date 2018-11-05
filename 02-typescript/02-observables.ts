// 02 -observables.ts
declare var require:any;
const rxjs = require('rxjs');

const numeros$ =rxjs.of(1,2,3,4,5,6);
console.log(numeros$);

numeros$
    . subscribe(
    next:(ok)=>{
        console.log('en OK',ok);
},
    error:(error)=>{
        console.log('error',error);
},
    complete:()=>{
        console.log('Completado');
}
);