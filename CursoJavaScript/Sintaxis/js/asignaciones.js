//asignacion por valor

var persona1 = "Quirino";
var persona2 = persona1;
persona1 = "Roger";
console.log(persona2);
console.log(persona1);

//asignacion por referencia

var persona3 = ["Quirino", "Roger", "Luis"];
var persona4 = persona3;
persona3.push("Juan");
console.log(persona3);
console.log(persona4);