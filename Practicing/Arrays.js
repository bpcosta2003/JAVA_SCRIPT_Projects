// ADD ELEMENTS

var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1];

num.unshift(0);
num.splice(1, 0, "Números");
num.push(10);

console.log(num);

//FIND ELEMENTS - type PRIMITIVE

num.indexOf(3);
num.lastIndexOf(1);

console.log(num.indexOf(3));
console.log(num.lastIndexOf(1));

//FIND ELEMENTS - type REFERENCE

var marcas = [
  {id: 001, nome: "Apple"},
  {id: 002, nome: "Xiaomi"},
  {id: 003, nome: "Samsung"},
];

var marca = marcas.find(function (marca) {
  return marca.nome === "Xiaomi";
});

console.log(marca);

// REMOVE ELEMENTS

var num2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(num2);

var ultimo = num2.pop();
var inicio = num2.shift();
var meio = num2.splice(4, 1);

console.log(inicio);
console.log(meio);
console.log(ultimo);

// CLEAN ARRAYS

var num3 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/// Solution 1 -- BEST SOLUTION !
num3.length = 0;
console.log(num3);

/// Solution 2
num3.splice(0, num3.length);
console.log(num3);

/// Solution 3
while (num3.length > 0) {
  num3.pop();
}

// COMBINING AND CUTTING ARRAYS

var first = [1, 2, 3];
var second = [4, 5, 6];

var combinado = first.concat(second);
console.log(combinado);

var combinado2 = [...first, ...second];

var cortado = combinado.slice(1, 3); //vai sobrar somente do indice 1 até o 2 (último indice = 3 - 1)
console.log(cortado);

var cortado = combinado.slice(1); // vai sobrar somento do indice 1 até o último
console.log(cortado);

// CLONE ARRAYS

var first = [1, 2, 3];
var second = [4, 5, 6];

var combinado = first.concat(second);
console.log(combinado);

var clone = [...combinado];
console.log(clone);

// FOREACH METHOD

var nums = [1, 2, 3, 4, 5];

nums.forEach((numero) => console.log(numero));

nums.forEach((numero, indice) => console.log(numero, indice));

// JOIN METHOD

var combinados = nums.join(".");
console.log(combinados);

// SPLIT METHOD

var text = "Hello my name is Bruno";
var result = text.split(" ");
console.log(result);

console.log(result.join(" - "));
