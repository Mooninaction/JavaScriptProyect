const automovil= {
    marca:"Ferrari",
    color: "Rojo",
    placa: "PJ0785",
    modelo: "GT4",
    kilometraje: 1500,
    esNuevo: false,
    radio:{marca:"Sony", soportaAndroidAuto: true, soportaAppleCar: true, tamañopantalla: "7'"},
    adicionales: ["Camara", "kit de herramientas", "Sensor de distancia"]
}

automovil.kilometraje = 1600;
//console.log(automovil);

automovil.cilindraje = 2500;
delete automovil.cilindraje;

//const auto2 = {...automovil}; //copiar formato
const auto2 = Object.assign({}, automovil);
auto2.marca = "Mercedes";
auto2.kilometraje = 50;


console.log("AUTOMOVIL 1");
console.log("--------------------------------------------------------------- ");
console.log("marca = " + automovil.marca);
console.log("kilometraje = " + automovil.kilometraje);
console.log("radio marca = " + automovil.radio.marca);
console.log("Adicional 1=" + automovil.adicionales[0]);
console.log("Cilindraje =" + automovil.cilindraje);
console.log("--------------------------------------------------------------- ");

console.log("AUTOMOVIL 2");
console.log("--------------------------------------------------------------- ");
console.log("marca = " + auto2.marca);
console.log("kilometraje = " + auto2.kilometraje);
console.log("radio marca = " + auto2.radio.marca);
console.log("Adicional 1=" + auto2.adicionales[0]);
console.log("Cilindraje =" + auto2.cilindraje);
console.log("--------------------------------------------------------------- ");