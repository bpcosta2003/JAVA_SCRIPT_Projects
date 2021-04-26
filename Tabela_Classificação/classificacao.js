var Bruno = {
  nome: "Bruno",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0,
  zerar: 0,
};

var Gabriel = {
  nome: "Gabriel",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0,
  zerar: 0,
};
var Guilherme = {
  nome: "Guilherme",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0,
  zerar: 0,
};

function calcularPontos(jogador) {
  var pontos = jogador.vitorias * 3 + jogador.empates;
  return pontos;
}

Bruno.pontos = calcularPontos(Bruno);
Gabriel.pontos = calcularPontos(Gabriel);
Guilherme.pontos = calcularPontos(Guilherme);

var jogadores = [Bruno, Gabriel, Guilherme];

function exibirJogadoresNaTela(jogadores) {
  var html = "";
  for (var i = 0; i < jogadores.length; i++) {
    html += "<tr><td>" + jogadores[i].nome + "</td>";
    html += "<td>" + jogadores[i].vitorias + "</td>";
    html += "<td>" + jogadores[i].empates + "</td>";
    html += "<td>" + jogadores[i].derrotas + "</td>";
    html += "<td>" + jogadores[i].pontos + "</td>";
    html +=
      "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
    html +=
      "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>";
    html +=
      "<td><button onClick='adicionarDerrota(" +
      i +
      ")'>Derrota</button></td></tr>";
  }
  var tabelaJogadores = document.getElementById("tabelaJogadores");
  tabelaJogadores.innerHTML = html;
}

exibirJogadoresNaTela(jogadores);

function adicionarVitoria(i) {
  var jogador = jogadores[i];
  jogador.vitorias++;
  jogador.pontos = calcularPontos(jogador);
  exibirJogadoresNaTela(jogadores);
}
function adicionarEmpate(i) {
  var jogador = jogadores[i];
  jogador.empates++;
  jogador.pontos = calcularPontos(jogador);
  exibirJogadoresNaTela(jogadores);
}
function adicionarDerrota(i) {
  var jogador = jogadores[i];
  jogador.derrotas++;
  exibirJogadoresNaTela(jogadores);
}

function zerarTabela() {
  var html = "";
  for (var i = 0; i < jogadores.length; i++) {
    html += "<tr><td>" + jogadores[i].nome + "</td>";
    html += "<td>" + jogadores[i].zerar + "</td>";
    html += "<td>" + jogadores[i].zerar + "</td>";
    html += "<td>" + jogadores[i].zerar + "</td>";
    html += "<td>" + jogadores[i].zerar + "</td>";
    html +=
      "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
    html +=
      "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>";
    html +=
      "<td><button onClick='adicionarDerrota(" +
      i +
      ")'>Derrota</button></td></tr>";
  }
  var tabelaJogadores = document.getElementById("tabelaJogadores");
  tabelaJogadores.innerHTML = html;
}
