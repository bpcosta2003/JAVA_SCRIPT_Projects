// USING ARROW FUNCTIONS

var marcas = [
  {id: 001, nome: "Apple"},
  {id: 002, nome: "Xiaomi"},
  {id: 003, nome: "Samsung"},
];

var marca = marcas.find((marca) => marca.nome === "Xiaomi");

console.log(marca);
