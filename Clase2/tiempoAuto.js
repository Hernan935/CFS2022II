"use strict";
exports.__esModule = true;
var ReadlineSync = require("readline-sync");
var tiempoVuelta = "Ingrese el tiempo de la vuelta";
var total = 0;
for (var i = 0; i < 4; i++) {
    var tiempo = +ReadlineSync.question(tiempoVuelta);
    total += tiempo;
}
var promedio = total / 4;
console.log("El tiempo total es", total, ",y el promedio es", promedio);
