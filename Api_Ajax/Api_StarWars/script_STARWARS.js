$("#botaoBuscarPersonagemAleatorio").click(buscarPersonagemAleatorio);

function buscarPersonagemAleatorio() {
  $.get(
    "https://swapi.dev/api/people/" + Math.floor(Math.random(1, 87) * 10),
    preencherLabelPersonagemAleatorio
  );
}

function preencherLabelPersonagemAleatorio(data) {
  console.log(data.name);

  $("#personagemAleatorioId").text(data.name);
  $.get("https://swapi.dev/api/people/?search=" + data.name, popularTabela);
}

$("#botaoBuscaFilmeId").click(buscarFilmePorPersonagem);

function buscarFilmePorPersonagem() {
  var nome = $("#buscaFilmePorNomePersonagemId").val();
  $.get("https://swapi.dev/api/people/?search=" + nome, popularTabela);
}

function popularTabela(responseText) {
  console.log(responseText.results[0]);
  $("#labelFilmeDeId").text(responseText.results[0].name);

  console.log(responseText.results[0].films);

  $("#tabelaFilmesId").find("tr:gt(0)").remove();

  for (var i = 0; i < responseText.results[0].films.length; i++) {
    $.get(responseText.results[0].films[i], criaLinha);
  }
}

function criaLinha(responseText) {
  var htmlFinal =
    "<tr><td>" +
    responseText.title +
    "</td>" +
    "<td>" +
    responseText.episode_id +
    "</td>" +
    "<td>" +
    responseText.director +
    "</td></tr>";

  $("#tabelaFilmesId").append(htmlFinal);
}
