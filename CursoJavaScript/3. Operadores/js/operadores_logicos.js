//OPeradores logicos
// && AND
// || OR
// ! NOT
// ^ XOR

var a = 10;
var b = 20;
var c = 30;
var d = 40;
//AND (&&)  //Todas las condiciones deben ser verdaderas
console.log(a < b && c > d);

//OR (||) //Al menos una condicion debe ser verdadera
console.log(a < b || c > d);

//NOT (!) //Negacion
console.log(!(a < b));

//XOR (^) //Solo una condicion debe ser verdadera
console.log(a < b ^ c > d);

//Ejemplo
var edad = 18;
var tieneLicencia = true;
var esMayorDeEdad = edad >= 18;
var puedeConducir = esMayorDeEdad && tieneLicencia;
console.log(puedeConducir);
