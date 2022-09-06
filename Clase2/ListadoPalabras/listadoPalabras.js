"use strict";
/* Definir funciones (con todos los tipos necesarios)
para hacer lo siguiente:
Cargar un listado de palabras (por esta vez, usar
el arreglo como variable global)
Insertar/eliminar/buscar/actualizar una palabra del
listado */
exports.__esModule = true;
var ReadlineSync = require("readline-sync");
var palabraAgregada = "Ingrese la palabra que desea agregar";
var posicionCancelada = "Ingrese el numero en el cual se encuentra la palabra que desea eliminar";
var palabraBuscada = "Ingrese la palabra que desea buscar";
var numeroActualizado = "Ingrese el numero en cual se encuentra la palabra que desea actualizar";
var palabraActualizada = "Ingrese la palabra que desea actualizar";
var listaPalabras = ["Manzana", "Pera"];
function agregar() {
    var palabra = ReadlineSync.question(palabraAgregada);
    listaPalabras.push(palabra);
    console.log(listaPalabras);
}
function quitar() {
    var posicion = ReadlineSync.questionInt(posicionCancelada);
    listaPalabras.splice(posicion, 1);
}
;
function buscar() {
    var palabra = ReadlineSync.question(palabraBuscada);
    for (var i = 0; i < listaPalabras.length; i++)
        if (palabra === listaPalabras[i]) {
            console.log("La palabra buscada se encuentra en", i);
        }
}
function Actualizar() {
    var numero = ReadlineSync.question(numeroActualizado);
    var palabra = ReadlineSync.question(palabraActualizada);
    listaPalabras[numero] = palabra;
    console.log(listaPalabras);
}
