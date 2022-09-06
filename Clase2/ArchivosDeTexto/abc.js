"use strict";
exports.__esModule = true;
var fs = require("fs");
var texto = fs.readFileSync("Clase2/ArchivosDeTexto/abc.txt", "utf-8");
var palabra = texto.split(' ');
console.log(palabra);
