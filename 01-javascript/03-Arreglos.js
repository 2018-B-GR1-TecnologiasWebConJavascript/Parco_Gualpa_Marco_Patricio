var arreglo =  [
    1,
    "Marco",
    false,
    null,
    new Date(),
    {nombre:"Marco"},
    [1,2,false,true]]  ;

console.log(arreglo[3]);
var arregloNumeros= [1,2,3];

arregloNumeros.push(4);
console.log(arregloNumeros);

arregloNumeros.pop();
console.log(arregloNumeros);

arregloNumeros.splice(0,2); //agregar o eliminar es importante el indice
console.log(arregloNumeros);

//desde el tercer  argumento los elementos que se van a agregar
arregloNumeros.splice(1,0,4,5,6,7,8,9);
console.log(arregloNumeros);
console.log(arregloNumeros);
arregloNumeros.splice(2,1);
console.log(arregloNumeros);

arregloNumeros.splice(0,2); //agregar o eliminar es importante el indice
console.log(arregloNumeros);

var indiceNumeroSeis = arregloNumeros.indexOf(6);
arregloNumeros.splice(indiceNumeroSeis,1);
console.log(arregloNumeros);

var arregloUno = arregloNumeros.slice(0,3);//devuelve la seccion
var arregloDos = arregloNumeros.slice(3,7);

//arregloDos.push(7);
//var indiceSiete= arreglosDos.indexOf(7);    //devuelve el indice de la primera ocurrencia
//console.log(arregloUno);
//console.log(arregloDos);

//destructuracion de arreglos

var arregloUnoDos=[1,2];
var arregloSeis= [6];

console.log("");
//[1,2,3,4,5,6,,8,9,10]
var arregloTotal=[
    ...arregloUnoDos,
    ...arregloUno,
    ...arregloSeis,
    ...arregloDos];

console.log(arregloTotal);
console.log(...arregloUnoDos);
console.log(1,2);

var arregloSiguientesNumeros=[11,12,13,14,15,16,17,18,19,20,21];
arregloTotal.splice(arregloTotal.length,0,...arregloSiguientesNumeros);
console.log(arregloTotal);


var marco={
    nombre:"Marco",
    apellido:"Parco"
};
var parco={
    sueldo:1.10
};
var patricio={
    edad:20 ,
    casado:false,
    hijos:null,mascota:{
        nombre:"Vale"
    }
};

var marcoPatricioParco={
    ...marco,
    ...patricio,
    ...parco,
    sueldo:2.00
};
console.log(marcoPatricioParco);

// Objetos
 var atributosDelObjeto = Object.keys(marcoPatricioParco);
 console.log(atributosDelObjeto);
console.log(marcoPatricioParco["nombre"]);
console.log(marcoPatricioParco[atributosDelObjeto[0]]); // validar campos



