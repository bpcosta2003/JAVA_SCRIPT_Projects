function adicionarFilme() {
  var campoFilmeFavorito = document.querySelector("#filme");
  var filmeFavorito = campoFilmeFavorito.value;

  listarFilmesNaTela(filmeFavorito);

  campoFilmeFavorito.value = "";
}

function listarFilmesNaTela(filme) {
  var listaFilmes = document.querySelector("#listaFilmes");
  if (filme.startsWith("https://www.youtube.com/watch?v=")) {
    var id = filme.slice(32);
    filme = "https://www.youtube.com/embed/" + id;
  }
  var elementoFilme =
    "<iframe width='560' height='315' src='" +
    filme +
    "'title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen</iframe>";
  listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilme;
}
