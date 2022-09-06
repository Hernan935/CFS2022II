/* Modificar el ejemplo de base por altura
Almacenar la base y la altura en variables y el resultado y
que el funcionamiento del script sea el mismo */

let readline=require("readline-sync");
let pedirAltura=readline.question("Ingrese la altura");
let pedirBase=readline.question("Ingrese la base");
let base=pedirBase;
let altura=pedirAltura;
let resultado= base*altura;
console.log(resultado);