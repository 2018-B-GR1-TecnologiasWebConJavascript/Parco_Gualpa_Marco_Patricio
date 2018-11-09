// 02 -observables.ts
declare var require:any;
const rxjs = require('rxjs');
const rxjs = require('rxjs/operators').map;

const numeris$=rxjs.of(
    a:1,
    b:'Marco',
    c:true
);


const numeros$ =rxjs.of(1,2,3,4,5,6);
console.log(numeros$);

numeros$
    .pipe(
        map(
            project:(valorActual)=>{
    return{
        data:valorActual
    };
}
)
)
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


numer0$

