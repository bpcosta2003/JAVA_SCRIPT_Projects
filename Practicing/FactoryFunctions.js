function criarCelular(marca, tamanhoTela, bateria) {
  return {
    marca,
    tamanhoTela,
    bateria,
  };
}

var celular1 = criarCelular("iPhone", 5.5, 5000);

console.log(celular1);
