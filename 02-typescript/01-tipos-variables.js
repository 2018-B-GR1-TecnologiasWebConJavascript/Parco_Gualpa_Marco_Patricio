// 01-tipo-variables.ts
let edad = 13;
edad = 25;
edad = 'Nombre';
let variableLocal = false;
let nombre = 'marco';
//duck typing->
//nombre=13;
let casado = false;
let marco = {
    nombre: 'Marco',
    apellido: 'Parco'
};
let fechaNacimiento = new Date();
/*let promesa:Promise<number>=() =>{
    return new Promise(
        executor:(resolve, reject)=>{
            resolve(1);
    };
);*/
function saludar(nombre, //requeridos
apellido, //opcionales
...otrosNombres) {
    return '';
}
let respuestaSaludar = saludar('Marco', 'Parco', 'hbehd');
//respuestaSaludar=1;
//respuestaSaludar='';
const saludo = (nombre) => {
};
class Usuario {
    cosntructores() {
    }
}
const marcoIntancia = new Usuario();
class UsuarioDummy {
}
const marco = {
    nombre: 'Marco',
    apellido: 'Parco'
};
let numeros = [1, 2, 3, 4];
