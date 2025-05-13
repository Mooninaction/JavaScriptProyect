/**
 * Funcion que obtiene el promedio de dos numeros
 * @param {*} numero1 El primer numero
 * @param {*} numero2 El segundo numero
 * @returns El promedio de dos numeros
 */

function obtenerPromedio(numero1,numero2){
    const divisor = 2;
    let promedio=(numero1+numero2)/divisor;

    return promedio;
}

let promedio1 = obtenerPromedio(10,12);
let promedio2 = obtenerPromedio(8,10);
let promedio3 = obtenerPromedio(10,22);

console.log("El promedio es: " + promedio1);
console.log("El promedio es: " + promedio2);
console.log("El promedio es: " + promedio3);