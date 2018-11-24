// 01-tipo-variables.ts

let edad: number | string = 13;
edad = 25;
edad = 'Nombre';

let variableLocal: any = '';
variableLocal = false;

let nombre: string = 'marco';
//duck typing->
//nombre=13;

//let casado:boolean = false;
let casado = false;
casado = true;
casado = false;
casado = null;
casado = undefined;

let marcop: { //Interface
    nombre: string;
    apellido?: string;
} = {// JSON
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
let numeros: number[] = [1, 2, 3];


function saludar(
    nombre: string, //requeridos
    apellido?: string,//opcionales
    ...otrosNombres: string[]): string | number {//Infinitos
    return '';
}

let respuestaSaludar = <string> saludar('Marco', 'Parco', 'hbehd');
//respuestaSaludar=1;
// Casteo   let respuestaSaludar:string = <string> saludar() ||  let respuestaSaludar = <string> saludar()
respuestaSaludar = '';

const saludo = (nombre: string): number => {
    return 1;
};

class Usuario {
    public edad: string;
    nombre: any;

    cosntructor() {

    }
}

const marcoIntancia = new Usuario();

interface UsuarioInterface {
    nombre: string;
    apellido?: string;
}

class UsuarioDummy {
    nombre: string;
    apellido?: string;
}

const marco: UsuarioDummy = {
    nombre: 'Marco',
    apellido: 'Parco'
};


//let numeros: number [] = [1, 2, 3, 4];
