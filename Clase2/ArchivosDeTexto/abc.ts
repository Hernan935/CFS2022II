import * as fs from 'fs';

let texto:string=fs.readFileSync("Clase2/ArchivosDeTexto/abc.txt", "utf-8");
let palabra:string[]= texto.split(' ');
console.log(palabra);