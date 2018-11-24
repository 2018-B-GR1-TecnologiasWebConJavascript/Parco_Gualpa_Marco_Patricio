const rxjs = require('rxjs');
const map = require('rxjs/operators').map;
const disctinct = require('rxjs/operators').distinct;
/* - Se pueden tratar con objetos infinitos --eventos infinitos
  - Cada dato se lo trata individualmente
 - Aceptan numeros, arreglos, strings, eventos, promesas
 - Programacion funcional

 CALLBACK ----> devolver una respuesta asincrona, variable local
 PROMESA ----> callback hell(codigo ala derecha)y concatenar promesas, separar buena y malo
 OBSERVABLE ----> tratar cualquier tipo de dato como un mismo dato, pipe para transformar

*/
const observableUno$ = rxjs.of([1, 2, 3], 3, 'a', 3, true, { nombre: 'Marco' }, 3, new Date(), 3);
console.log(observableUno$);
observableUno$
    .pipe(disctinct(), map((valor) => {
    console.log('Valor', valor);
    return {
        data: valor
    };
}))
    .pipe()
    //n pipe
    .subscribe(// se ejecuta la funcion .unsubscribe
(ok) => {
    console.log('En oK', ok);
}, (error) => {
    console.log(error);
}, () => {
    console.log('Completado');
});
console.log(observableUno$);
//-----------------------------------------------------------------------
const promesita = (correcto) => {
    return new Promise((resolve, reject) => {
        if (correcto) {
            resolve(':)');
        }
        else {
            reject(':(');
        }
    });
};
const observableDePromesa$ = rxjs.from(promesita(false));
//const observableDePromesa$ = rxjs.from(promesita(false));
observableDePromesa$
    .pipe(map((valor) => {
    return {
        data: valor
    };
}))
    .subscribe((objetoFeliz) => {
    console.log(objetoFeliz);
}, (error) => {
    console.log(error);
});
async function ejecutarCodigoAsincrono() {
    console.log('Inicio');
    try {
        const resultadoPromesa = await promesita(true);
        console.log(resultadoPromesa);
    }
    catch (e) {
        console.log('Error en promesita', e);
    }
    console.log('Fin');
}
ejecutarCodigoAsincrono();
/*
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

*/ 
