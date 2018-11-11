
holaMundo();
function holaMundo(){
    console.log("Hola Mundo");
}

console.log(holaMundo());

function sumarDosNumeros(numeroUno,numeroDos) {
    var numeroUnoEsValido =typeof numeroUno=='number';
    var numeroDosEsValido =typeof numeroDos=='number';
    if(numeroUnoEsValido && numeroDosEsValido){
        return numeroUno+numeroDos;
    }else{
        console.error("Parrametros no son numeros");
        return 0;
    }
}

console.log(sumarDosNumeros(1,2, 2,3,4,4));
console.log(sumarDosNumeros(true,0,undefined,null,"ASD",6,7));

function sumarNNumeros(...numeros) {
    var resultado = calcularResultadoSumarNNumeros(numeros);
    if (resultado.esValido) {
        return resultado.suma;
    } else {
        return 0;
    }
}

/*function sumarNNumeros(...numeros) {  //destruccturacion de argumentos
    var suma=0;
    var todosLosNumerosSonValidos=true;
    for(var i=0;i<numeros.length;i++){
        var numeroEsValido= typeof numeros[i]=='number';
        if(numeroEsValido){
            suma=suma+numeros[i];
        }else{
            todosLosNumerosSonValidos=false;
            break;
        }
    }
    if(todosLosNumerosSonValidos){
        return suma;
    }else{
        return 0;
    }

    //console.log(numeros);
}*/

function calcularResultadoSumarNNumeros(numeros) {
    var suma = 0;
    var todosLosNumerosSonValidos = true;
    for (var i = 0; i < numeros.length; i++) {
        var numeroEsvalido = typeof numeros[i] == 'number';
        if (numeroEsvalido) {
            suma = suma + numeros[i];
        } else {
            todosLosNumerosSonValidos = false;
            break;
        }
    }
    var resultado = {
        suma: suma,
        esValido: todosLosNumerosSonValidos
    };
    return resultado;
}

console.log(sumarNNumeros(true,1,2,3));

/*
function saludar(nombre) {
return `Hola ${nombre.toUpperCase()}`;
}

console.log(saludar("Marco"));
*/

function saludar(nombre, funcion) {
    return `Hola ${funcion(nombre)}`; //templete string
}

function nombreEnMayusculas(nombre) {
    return nombre.toUpperCase();
}
function nombreEnMinusculas(nombre) {
    return nombre.toLowerCase();
}
function nombreConPuntoAlFinal(nombre) {
    return nombre + ".";
}
function primeraLetraEnMayuscula(nombre){
    var primeraLetra = nombre[0].toUpperCase();
    var restoPalabra = nombre.slice(1,nombre.length);
    return primeraLetra+restoPalabra;
}

console.log(saludar("Marco",nombreEnMayusculas));
console.log(saludar("Marco",nombreEnMinusculas));
console.log(saludar("marco",nombreConPuntoAlFinal));
console.log(saludar("marco",primeraLetraEnMayuscula));

var arreglo=[1,2,3];

arreglo.findIndex(
    function (valorDelArreglo,indice,arreglo) {
        return 2;
    }
);//1

function restar(a,b){
    return a-b;
}
console.log(restar(4,2));//Ejecucion 2  devuelve unifined or return
console.log(typeof restar);//Tipo function
console.log(restar); // definicion de la funcion

//Anonymous Function
function nombre(){

}

/*function () {

}*/ // no existe declaracion

var ejemplo = function () {

}; // funcion anonima

var marco={
    trabajo:function () {
        //implementacion
    }
};

marco.trabajo();

var arreglo =[
    function () {
        //implementacion
    }
];

arreglo[0]();

saludar("Marco",function (nombre) {
   return nombre+ "Marco"
}); //enviar la funcion como parametros

//tipos de variables

var variable;

let variableDos=2;
variableDos=3;
const edad=29;
//edad=30;

const marco = {
    nombre:'Marco'
};
marco.nombre='patricio';
/*marco={
    nombre:'Pato'
}*/

const arregloUnoDos=[1,2];
arregloUnoDos[0]=3;
//arregloUnoDos=[1,2,3,4];

const nombre1='Marco';
//nombre1='Pato';

const casado=false;
//casado=true;

const hijos=null;
//hijos=2;

const ganarDinero=function () {
    return 1;
};
/*ganarDinero=function () {
    return 2;
};*/


//NUNCA MAS UTILIZAR FUNCIONES ANONIMAS
const elevarAlCuadrado=function (numero) {
    return numero* numero;
};

// FAT ARROW FUNCTION  =>
const elevarAlCuadrado=(numero)=>{
    return numero * numero;
};

const elevarAlCuadradoV2=(numero)=> numero * numero;
const elevarAlCuadradoV3=numero=> numero * numero;
const restarNumeros=(numeroUno,numeroDos)=>numeroUno-numeroDos;