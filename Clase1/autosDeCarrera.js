/* Autos de Carrera:
En una prueba, un piloto tiene que completar 4
vueltas
Se necesita un programa que permita ingresar
por teclado el tiempo de cada vuelta
El programa debe retornar el tiempo total y el
promedio de vuelta */

let readline=require("readline-sync");
let tiempoVuelta="Ingrese el tiempo de la vuelta";
let total=0
for(let i=0;i<4;i++){
 let tiempo=+readline.question(tiempoVuelta);
 total+=tiempo
}
let promedio=total/4;
console.log(promedio);
console.log(total);