declare var require: any;

const rxjs = require('rxjs');
const map = require('rxjs/operators').map;
const distinct = require('rxjs/operators').distinct;
const concat = require('rxjs/operators').concat;

const promesita =(correcto)=>{
    return new Promise(
        executor:(resolve, reject)=>{
        if(correcto){
            resolve(':)');
        }else{
            reject(':(');
        }
    }
);
};

const promesita$ =rxjs.from(promesita(true));
const promesitaNoOk$ =rxjs.from(promesita(false));
const numeros$ = rxjs.of(
    1,
    "Adrian",
    "Adrian",
    1,
    true,
    {nombre: 'Adrian'},
    [1, 2, 3],
    new Date()
);

numeros$
    .pipe(
        concat(promesita$),
        concat(promesitaNoOk$)
    )
    .pipe(
        distinct(),
        map(
            (valorActual) => {
                return {
                    data: valorActual
                };
            }
        )
    )
    .subscribe(
        (ok) => {
            console.log('En ok', ok);
        },
        (error) => {
            console.log('Error', error);
        },
        () => { // complete
            console.log('Completado');
        }
    );
const promesita =(correcto)=>{
    return new Promise(
        executor:(resolve, reject)=>{
            if(correcto){
                resolve(':)');
            }else{
                reject(':(');
            }
    }
    );
};

const promesita$ = rxjs.from(promesita(true));

promesita$
    .subscribe(
        next:(ok)=>{
            console.log("En promesita",ok);
},
    error:(error)=>{
    console.log("Error en Promesita",error);
},
    complete:()=>{
    console.log();
}

    )