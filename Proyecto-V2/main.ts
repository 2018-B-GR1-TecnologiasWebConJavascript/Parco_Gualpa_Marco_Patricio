
declare var require;
//declare var Promise;
const inquirer = require('inquirer');
const fs = require('fs');

const menuPrincipal =
    {
        type: 'list',
        name: 'opcionesMenu',
        message: 'Seleciona una opcion',
        choices: [
            'Ver Banquetes',
            'Ingresar nuevo Banquete',
            'Buscar Banquetes',
            'Actualizar Banquete',
            'Eliminar Banquete',
        ]
    };

const preguntaIngresoBanquete = [
    {
        type: 'input',
        name: 'nombreBanquete',
        message: "Cual es el nombre del banquete a ingresar ?"
    },
    {
        type: 'input',
        name: 'costoBanquete',
        message: "Ingrese el costo del Banquete?"
    }
];

const preguntaBuscarBanquete = [
    {
        name: 'nombreRestaurante',
        type: 'input',
        message: "Cual es el nombre del Banquete que desea buscar?"
    }
];



