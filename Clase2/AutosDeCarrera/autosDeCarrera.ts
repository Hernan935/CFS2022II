/* En una prueba, un piloto tiene que completar 4
vueltas
Se necesita un programa que permita ingresar por
teclado el tiempo de cada vuelta
El programa debe retornar el tiempo total y el
promedio de vuelta */

import * as ReadlineSync from 'readline-sync';

let total:number=0;
for(let i:number=0;i<4;i++){
    let tiempo=+ReadlineSync.questionInt("Ingrese el tiempo de la vuelta");
    total+=tiempo;
   };
let promedio:number=total/4;
console.log(promedio);
console.log(total);