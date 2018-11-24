// 01-tipo-variables.ts
let edad = 13;
edad = 25;
edad = 'Nombre';
let variableLocal = '';
variableLocal = false;
let nombre = 'marco';
//duck typing->
//nombre=13;
//let casado:boolean = false;
let casado = false;
casado = true;
casado = false;
casado = null;
casado = undefined;
let marcop = {
    nombre: 'Marco',
    apellido: 'Parco'
};
//let fechaNacimiento: Date = new Date();
/*let promesa:Promise<number>=() =>{
    return new Promise(
        executor:(resolve, reject)=>{
            resolve(1);
    };
);*/
console.log(marcop);
let numeros = [1, 2, 3];
function saludar(nombre, //requeridos
apellido, //opcionales
...otrosNombres) {
    return '';
}
let respuestaSaludar = saludar('Marco', 'Parco', 'hbehd');
//respuestaSaludar=1;
respuestaSaludar = '';
const saludo = (nombre) => {
    return 1;
};
class Usuario {
    cosntructor() {
    }
}
const marcoIntancia = new Usuario();
class UsuarioDummy {
}
const marco = {
    nombre: 'Marco',
    apellido: 'Parco'
};
//let numeros: number [] = [1, 2, 3, 4];
