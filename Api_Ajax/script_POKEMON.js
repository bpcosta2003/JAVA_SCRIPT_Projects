$("#botaoBuscarPersonagemAleatorio").click(buscarPersonagemAleatorio);

function buscarPersonagemAleatorio() {
  $.get(
    "https://pokeapi.co/api/v2/pokemon/" +
      Math.floor(Math.random(1, 898) * 1000),
    preencherLabelPersonagemAleatorio
  );
}

function preencherLabelPersonagemAleatorio(data) {
  console.log(data.name);

  $("#personagemAleatorioId").text(data.name);
  $("#personagemImgId").html(
    "<img src= 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
      data.id +
      ".png'>"
  );
  $("#personagemImgId").append(
    "<img src= 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/" +
      data.id +
      ".png'>"
  );
  $.get("https://pokeapi.co/api/v2/pokemon/" + data.id, popularTabela);
}

//

$("#botaoBuscaPokemonId").click(buscarPokemonPorPersonagem);

function buscarPokemonPorPersonagem() {
  var nome = $("#buscaPokemonPorNomePersonagemId").val();
  $.get("https://pokeapi.co/api/v2/pokemon/" + nome, popularTabela);

  $("#labelPokemonDeId").text(nome);
}

function popularTabela(responseText) {
  $("#personagemImgId2").html(
    "<img src= 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
      responseText.id +
      ".png'>"
  );

  $("#personagemImgId2").append(
    "<img src= 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/" +
      responseText.id +
      ".png'>"
  );

  $("#tabelaPokemonId").find("tr:gt(0)").remove();

  var htmlFinal = "<tr>";

  for (var i = 0; i < 6; i++) {
    htmlFinal += "<td>" + responseText.stats[i].base_stat + "</td>";
  }

  htmlFinal += "</tr>";

  $("#tabelaPokemonId").append(htmlFinal);
}
