"use strict";
/* En una prueba, un piloto tiene que completar 4
vueltas
Se necesita un programa que permita ingresar por
teclado el tiempo de cada vuelta
El programa debe retornar el tiempo total y el
promedio de vuelta */
exports.__esModule = true;
var ReadlineSync = require("readline-sync");
var total = 0;
for (var i = 0; i < 4; i++) {
    var tiempo = +ReadlineSync.questionInt("Ingrese el tiempo de la vuelta");
    total += tiempo;
}
;
var promedio = total / 4;
console.log(promedio);
console.log(total);
