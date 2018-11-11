/*function ejemplo() {}
var ejemploDos = function () {} //Anonymous function

var arregloFunciones = [function (){
}];


console.log(typeof ejemplo); // Tipo de dato -> function
console.log(ejemplo); //definicion de la funcion
console.log(ejemplo()); //ejecucion funcion

var variableUno; //NUNCA USAR
let variableDos = 2; //USAR MUTABLE(este se asigna a otro valor)
variableDos = variableDos + 1;

const pi =3.1416; //intenten usar const siempre

//operadores

let arregloDeNombres = ['A', 'b', 'C'];

arregloDeNombres[1] = 'B'
arregloDeNombres.push('D');
const andres ={
    nombre: 'Andres'
};
andres.nombre = 'Jimmy'
andres.edad =24;
console.log(arregloDeNombres);
console.log(andres);

arregloDeNombres.forEach(
    function (valoractual,indiceActual, arreglo) {
        console.log('Valor Actual', valoractual);
        console.log('Indice Actual', indiceActual);
        console.log('Arreglo', arreglo);
    }
);

//funciones con nombre
//funaciones anonimas
//fat arrow functions
arregloDeNombres.forEach(
    (valoractual,indiceActual, arreglo) =>{
        console.log('Valor Actual', valoractual);
        console.log('Indice Actual', indiceActual);
        console.log('Arreglo', arreglo);
    }
);

const sumarDosNumeros = (numUno, numDos) => {return numUno + numDos};
const sumarDosNumerosV2 = (numUno, numDos) => numUno + numDos;
const elevarAlCuadrado = (numero) => numero * numero;
const elevarAlCuadradoV2 = numero => numero * numero;

const arregloDeNombresDos = ['E', 'F', 'G', 'H'];
const resultado = arregloDeNombres
    .map(// mutar cada elemnto del arreglo
        valorActual => {
            return valorActual + '.';
        }
    )
    .forEach(
        (valorNuevo)=>console.log(valorNuevo)
    );

console.log(resultado);

const arregloNumeros = [2,3,1,5,6,4,7,8,9,10];

const resultadoFilter = arregloNumeros.filter(n => (n % 2) === 0);
console.log(resultadoFilter);
//triple igual
if('1' === 1){ //falso
    console.log('Es Verdad');
}else {
    console.log("Es falso");
}

//every
const resultadoEvery = arregloNumeros
    .every(n => n>1); //si cumple todos TRUE / False
console.log(resultadoEvery);

//some
const resultadoSome = arregloNumeros
    .some(n => n < 2); // si uno cumple condicion TRUE / FALSE
console.log(resultadoSome);

//findIndex

const resultadoFindIndex = arregloNumeros
    .findIndex(n => n === 7);
arregloNumeros.indexOf(7);
console.log(resultadoFindIndex);
console.log(arregloNumeros.indexOf(7));

//find

const resultadoFind = arregloNumeros
    .find(n => n === 7);
console.log(resultadoFind);

//reduce

const resultadoReduce = arregloNumeros
    .reduce(
        (valorActualDelNumero,valorActualDelArreglo) => {  //1er parametro una funcion
            return valorActualDelNumero - valorActualDelArreglo
        },
        100 //acepta un valor
    );
console.log(resultadoReduce);

const resultadoReduceV2 = arregloNumeros.reduce((a, b, indice)=> {
    if (indice > 4) {
        return a + b;
    } else {
        return a;
    }
}, 0);

console.log(resultadoReduceV2);

//sort

const clonArregloNumeros =  JSON.parse(JSON.stringify(arregloNumeros));
console.log(clonArregloNumeros);
const resultadoSort = arregloNumeros.sort((a, b)=> a - b);
const resultadoSortV2 = clonArregloNumeros.sort((a, b)=> b -a);
console.log(resultadoSort);
console.log(resultadoSortV2);*/

// operadores

const arreglo = ['A', 'b', 'C'];

const respuesta = arreglo
    .forEach(
        (valorActualDeLAIteracion, indice, arreglo) => {
            console.log("Valor", valorActualDeLAIteracion);
            console.log("Indice", indice);
            console.log("Arreglo", arreglo);
        }
    );

console.log(respuesta);
arreglo.forEach(y => console.log(y));

//map Muata el arreglo -> cambiar -> Reasignar nuevo arreglo
const respuestaMap = arreglo
    .map(valorActual => valorActual.toUpperCase());
//.map(valorActual=>true); reasignaria all con true [true,true,true]
console.log(arreglo);
console.log(respuestaMap);
const arregloNumeros = [9, 1, 3, 2, 5, 6, 4, 8, 7, 10];

//filter
const respuestaFilter = arregloNumeros
    .filter(valorActual => valorActual > 5) //true all de arreglo false nada del arreglo
    .map(n => n + 1)
    .filter(n=>n>7)
    .forEach(n=>console.log(n));

console.log(respuestaFilter);

// find
const respuestaFindIndex=arregloNumeros
    .findIndex(v=>v===7);
    //.findIndex(v=>v.id===7);  // buscar objetos completos sabiendo solo un atributo
console.log(arregloNumeros.indexOf(7));
console.log(respuestaFindIndex);

//find  encuentra el objeto que se encuentra en esa posicion
const respuestaFind =arregloNumeros
    .findIndex(v=>v===7);
console.log(respuestaFind);

//some
const respuestaSome=arregloNumeros
    .some(n=>n%11===0);
console.log(respuestaSome);

//every
const respuestaEvery = arregloNumeros
    .every(n=>n<5);
console.log(respuestaEvery);

//reduce operaciones con alguna variable interna
const respuestaReduce=arregloNumeros
    .reduce(
        (valorActualDeLaOperacion,valorActualDelArreglo)=>{
            return valorActualDeLaOperacion+valorActualDelArreglo;
        },
        0 //valor que inicia suma=0;
    );

console.log(respuestaReduce);

const respuestaReduce2=arregloNumeros
    .reduce((a,b)=> a-b,100);
    //.reduce((a,b)=>a+b.sueldo,0);
console.log(respuestaReduce2);

/*if(1==='1'){
    console.log('Es verdad');
}else{
    console.log('No es verdad');
}*/

const respuestaReduce3=arregloNumeros
    .reduce((acumulado,valorActual)=>{
        if(valorActual>7){
            return acumulado+valorActual
        }else{
            return acumulado
        }
    },0

    );
console.log(respuestaReduce3);