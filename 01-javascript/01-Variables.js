// Int edad = 10 ; TIPADO
// NO TIPADO
var edad= 10;
//var edad = "10";
var edadString="10";
var sueldo = 1.23;
var casado = false;
var hijos = null;
var dato= undefined;
var fechaNacimiento = new Date();
var marco={"nombre":"marco",
    "segundoNombre":"Patricio",
    apellidoPaterno:'Eguez',
    apellidoMaterno:'Gualpa',
    edad:21,
    casado:false,
    hijo:null,
    mascota:{
        nombre:"Vale"}
    };//object

console.log("Hola Mundo");
console.log("edad",typeof edad); //number
console.log("edadString",typeof edadString); // string
console.log("sueldo",typeof sueldo); // number
console.log("casado",typeof casado); //boolean
console.log("hijos",typeof hijos); //object
console.log("dato valor ",dato);//undefined
console.log("dato tipo",typeof dato);//undefined
console.log("fecha Nacimiento",typeof fechaNacimiento);//undefined
console.log(marco.mascota.nombre);
console.log(marco);
delete marco.hijo;
console.log(marco);
marco.hija={nombre:'??'};
console.log(marco);
//console.log(marco.abuelo.nombre);
//console.log(undefined.nombre);

if(true){
    console.log("Si");
}else{
    console.log("no");
}
if(1){//Truthy
    console.log("Si");
}else{
    console.log("no");
}
if(0){//falsy
    console.log("Si");
}else{
    console.log("no");
}
if(-1){//Truthy
    console.log("Si");
}else{
    console.log("no");
}
if(""){//falsy
    console.log("Si");
}else{
    console.log("no");
}
if("algo"){//Truty
    console.log("Si");
}else{
    console.log("no");
}
if(null){//falsy
    console.log("Si");
}else{
    console.log("no");
}
if({nombre:'marco'}){//Truty
    console.log("Si");
}else{
    console.log("no");
}
if({}){//Truty
    console.log("Si");
}else{
    console.log("no");
}

if(undefined){ // falsy
    console.log("Si")
}else{
    console.log("No")
}
