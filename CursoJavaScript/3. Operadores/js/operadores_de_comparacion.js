//operador igual
var x = 4, y = '4'
console.log(x == y);

//operador estrictamente igual
console.log(x === y);

//operador diferente
console.log(x != y);

//operador estrictamente diferente
console.log(x !== y);

//operador mayor que
console.log(x > y);

//operador menor que
console.log(x < y);

//operador mayor o igual que
console.log(x >= y);

//operador menor o igual que
console.log(x <= y);

//operador ternario
var edad = 18;
var resultado = edad >= 18 ? 'Mayor de edad' : 'Menor de edad';
console.log(resultado);

//operador ternario anidado
var resultado = edad >= 18 ? 'Mayor de edad' : edad >= 12 ? 'Adolescente' : 'Menor de edad';
console.log(resultado);

//operador ternario anidado
var resultado = edad >= 18 ? 'Mayor de edad' : edad >= 12 ? 'Adolescente' : edad >= 2 ? 'Nino' : 'Bebé';
console.log(resultado);

