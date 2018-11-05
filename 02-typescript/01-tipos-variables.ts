// 01-tipo-variables.ts

let edad: number|string = 13;
edad= 25;
edad= 'Nombre';
let variableLocal: any=false;


let nombre:string = 'marco';
//duck typing->
//nombre=13;
let casado:boolean = false;

let marco: { //Interface
    nombre:string;
    apellido?:string;
}={// JSON
    nombre:'Marco',
    apellido:'Parco'
};

let fechaNacimiento:Date = new Date();

/*let promesa:Promise<number>=() =>{
    return new Promise(
        executor:(resolve, reject)=>{
            resolve(1);
    };
);*/

function saludar(
    nombre:string, //requeridos
    apellido?:string,//opcionales
    ...otrosNombres:string[]):string |number {//Infinitos
    return '';
}
let respuestaSaludar = <string> saludar('Marco','Parco','hbehd');

//respuestaSaludar=1;
//respuestaSaludar='';

const saludo = (nombre:string):number =>{

}

class Usuario{
    public edad: string ;
    nombre:any;
    cosntructores(){

    }
}

const marcoIntancia = new Usuario();
interface UsuarioInterface{
    nombre:string;
    apellido?:string;
}
class UsuarioDummy{
    nombre:string;
    apellido?:string;
}
const marco:UsuarioDummy={
    nombre:'Marco',
    apellido:'Parco'
};























let numeros: number [] =[1,2,3,4];
