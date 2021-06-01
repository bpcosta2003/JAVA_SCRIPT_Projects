function Celular(marca, tamanhoTela, bateria) {
  this.marca = marca;
  this.tamanhoTela = tamanhoTela;
  this.bateria = bateria;
}

var celular1 = new Celular("iPhone", 5.5, 5000);

console.log(celular1);

/* - - - - - */

function Postagem(titulo, autor, mensagem) {
  this.titulo = titulo;
  this.mensagem = mensagem;
  this.autor = autor;
  this.visualizacoes = 0;
  this.comentarios = [];
  this.estaAoVivo = false;
}

var postagem = new Postagem(
  "Health Food",
  "Arthur Lenght",
  "lorem Ipsum . . ."
);

console.log(postagem);
