var numeros = [4, 6, 8, 7];
var resultado = 0;
function sumarNumeros() {
    for (var i = 0; i < numeros.length; i++) {
        resultado = resultado + numeros[i];
    }
    ;
    console.log("El resultado es", resultado);
}
sumarNumeros();
