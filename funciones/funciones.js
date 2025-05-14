
/* Declaracion de una funcion
    Fuction Declaration
 */

function sumar(num1,num2){
    let resulta = num1+num2;
    return resulta;
}

/**
 * 
 * @param {*} operacion Es una funcion que recibe dos numeros
 * @param {*} num1 numero uno
 * @param {*} num1 numero dos
 * @returns 
 */
function calcular(operacion, num1, num2){
    return operacion(num1,num2)
}

/* Funcion como una Expresión
    Expression Function 
 */

const miSuma = function (num1,num2){
    let resulta = num1+num2;
    return resulta;
}
const miResta = function (num1,num2){
    let resulta = num1-num2;
    return resulta;
}
    /* Arrow Fuction */

const flechaSuma = (num1,num2) => num1+num2;

//Ejecucion
let respuestaSuma = sumar(2,5);
console.log("respuestaSuma: " + respuestaSuma);

let respuestaMiSuma = miSuma(2,5);
console.log("respuesta Mi Suma: " + respuestaMiSuma);

let respuestaflechaSuma = miSuma(2,5);
console.log("respuesta flecha Suma: " + respuestaflechaSuma);

let respuestaCalculo = calcular(flechaSuma,2,5);
console.log("respuesta calculo suma: " + respuestaCalculo);

respuestaCalculo = calcular(miResta,2,5);

/* Declaracion de una funcion
    Fuction Declaration
 */

function sumar(num1,num2){
    let resulta = num1+num2;
    return resulta;
}

/**
 * 
 * @param {*} operacion Es una funcion que recibe dos numeros
 * @param {*} num1 numero uno
 * @param {*} num1 numero dos
 * @returns 
 */
function calcular(operacion, num1, num2){
    return operacion(num1,num2)
}

/* Funcion como una Expresión
    Expression Function 
 */

 miSuma = function (num1,num2){
    let resulta = num1+num2;
    return resulta;
}
 miResta = function (num1,num2){
    let resulta = num1-num2;
    return resulta;
}
    /* Arrow Fuction */

 flechaSuma = (num1,num2) => num1+num2;

//Ejecucion
 respuestaSuma = sumar(2,5);
console.log("respuestaSuma: " + respuestaSuma);

 respuestaMiSuma = miSuma(2,5);
console.log("respuesta Mi Suma: " + respuestaMiSuma);

 respuestaflechaSuma = miSuma(2,5);
console.log("respuesta flecha Suma: " + respuestaflechaSuma);

 respuestaCalculo = calcular(flechaSuma,2,5);
console.log("respuesta calculo suma: " + respuestaCalculo);

respuestaCalculo = calcular(miResta,2,5);
console.log("respuesta calculo resta: " + respuestaCalculo);