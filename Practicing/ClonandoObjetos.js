var celular = {
  marcaCelular: "iPhone12",
  tamanhoTela: 5.5,
  bateria: 5000,
};

var novoObjeto = Object.assign(
  {
    valor: 10000,
  },
  celular
);
console.log(novoObjeto);

var celular2 = {...celular};
console.log(celular2);
