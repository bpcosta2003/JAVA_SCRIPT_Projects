function Celular(marca, tamanhoTela, bateria) {
  this.marca = marca;
  this.tamanhoTela = tamanhoTela;
  this.bateria = bateria;
}

var celular1 = new Celular("iPhone", 5.5, 5000);

console.log(celular1);
