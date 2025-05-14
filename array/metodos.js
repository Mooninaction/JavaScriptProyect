const paises = ["Colombia", "México", "Argentina", "Peru"];

console.log("Listado original");
console.table(paises);

console.log("Metodo .push()"); // agrega al final
paises.push("Brasil");
console.table(paises);

console.log("Metodo .unshift()"); // agrega al inicio
paises.unshift("Uruguay");
console.table(paises);


console.log("Metodo .shift()"); // elimina el primer elemento
let eliminado = paises.shift();
console.log("Pais eliminado", eliminado);
console.table(paises);

console.log("Metodo .pop()"); // elimina el ultimo elemento
eliminado = paises.pop();
console.log("Pais eliminado", eliminado);
console.table(paises);

console.log("Metodo .sort()"); // ordena alfabeticamente
paises.sort();
console.table(paises);