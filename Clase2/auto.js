let readline=require("readline-sync");
let tiempoVuelta="Ingrese el tiempo de la vuelta";
let total=0
for(let i=0;i<4;i++){
 let tiempo=+readline.question(tiempoVuelta);
 total+=tiempo
}
let promedio=total/4;
console.log(promedio);