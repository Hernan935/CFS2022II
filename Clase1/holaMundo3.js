/* Modificar el ejemplo de secuencia:
Qué cada mensaje se almacene en una variable a mostrar
por consola y que el funcionamiento del script sea el
mismo */

let readline=require("readline-sync");
let escribeMensaje="Ingrese el Mensaje que desea monstrar";
let mensaje=readline.question(escribeMensaje);
console.log(mensaje);