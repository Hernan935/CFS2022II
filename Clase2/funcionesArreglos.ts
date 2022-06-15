import * as ReadlineSync from "readline-sync";
let palabraAgregada="Ingrese la palabra que desea agregar";
let palabraCancelada="Ingrese la palabra que desea eliminar";
let palabraBuscada="Ingrese la palabra que desea buscar";
let numeroActualizado="Ingrese el numero en cual se encuentra la palabra que desea actualizar";
let palabraActualizada="Ingrese la palabra que desea actualizar";
let listaPalabras:string[]=["Manzana","Pera"];

function agregar(){
let palabra=ReadlineSync.question(palabraAgregada);
listaPalabras.push(palabra);
console.log(listaPalabras);
}

function quitar(){
   let posicion=ReadlineSync.questionInt(palabraCancelada);
      listaPalabras.splice(posicion,1)
   };

function buscar(){
    let palabra=ReadlineSync.question(palabraBuscada);
    for(let i:number=0;i<listaPalabras.length;i++)
    if(palabra=listaPalabras[i]){
            console.log("La palabra buscada se encuentra en",i)
         }
     }

 function Actualizar(){
    let numero=ReadlineSync.question(numeroActualizado);
    let palabra=ReadlineSync.question(palabraActualizada);
     listaPalabras[numero]=palabra;
console.log(listaPalabras);
 }

 quitar();
 console.log(listaPalabras);