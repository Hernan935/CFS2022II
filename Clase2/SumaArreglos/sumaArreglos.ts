/* Implementar una función que sume los elementos
de un arreglo
Forzar algún tipo de error a modo de
ejemplificación */

let numeros: number[]=[4,6,8,7];
let resultado: number=0;
function sumarNumeros(){
    for (let i:number=0;i<numeros.length;i++){
        resultado=resultado+numeros[i];
    }
    console.log("el resultado es ",resultado);
}
sumarNumeros();