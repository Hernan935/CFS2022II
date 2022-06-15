import * as ReadlineSync from "readline-sync";
let tiempoVuelta="Ingrese el tiempo de la vuelta";
let total:number=0;
for(let i:number=0;i<4;i++){
 let tiempo=+ReadlineSync.question(tiempoVuelta);
 total+=tiempo
}
let promedio=total/4;
console.log("El tiempo total es",total,",y el promedio es",promedio);