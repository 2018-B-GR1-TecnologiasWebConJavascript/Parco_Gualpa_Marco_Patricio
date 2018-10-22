
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
function sumarNNumeros(...numeros) {  //destruccturacion de argumentos
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
}
console.log(sumarNNumeros(true,1,2,3));

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

//function saludar(nombre) {
//  return `Hola ${nombre.toUpperCase()} `;
//}

console.log(saludar("Marco"));
function saludar(nombre,funcion) {
    return `Hola ${funcion(nombre)} `;
};
console.log(saludar("Marco",));
function nombreEnMayusculas(nombre) {
    return nombre.toUpperCase();
};
function nombreEnMinusculas(nombre) {
    return nombre.toLowerCase();
}
function nombreConPuntoAlFinal(nombre) {
    return nombre + ".";
}

console.log(saludar("Marco",nombreEnMayusculas));
console.log(saludar("Marco",nombreEnMinusculas));
console.log(saludar("Marco",nombreConPuntoAlFinal));

var arreglo=[1,2,3];
arreglo.findIndex(
    function (valorDelArreglo,indice,arreglo) {
        return 2;
    }
);


nsbnjb