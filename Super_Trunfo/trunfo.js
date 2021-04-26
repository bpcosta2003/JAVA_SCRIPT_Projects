var cartasBatman = {
  nome: "Batman",
  imagem:
    "https://assets.b9.com.br/wp-content/uploads/2020/09/Batman-issue86-heder-1280x677.jpg",
  atributos: {
    força: 70,
    inteligencia: 100,
    poder: 0,
  },
};
var cartasSuperman = {
  nome: "Superman",
  imagem: "https://i.ytimg.com/vi/MrI2nKnPoQI/maxresdefault.jpg",
  atributos: {
    força: 100,
    inteligencia: 80,
    poder: 100,
  },
};
var cartasFlash = {
  nome: "Flash",
  imagem:
    "https://http2.mlstatic.com/D_NQ_NP_735753-MLB42875500881_072020-O.jpg",
  atributos: {
    força: 80,
    inteligencia: 90,
    poder: 85,
  },
};
var cartasMulherMaravilha = {
  nome: "Mulher Maravilha",
  imagem:
    "https://www.thunderwave.com.br/wp-content/uploads/2017/05/Origem-Mulher-Maravilha.jpg",
  atributos: {
    força: 95,
    inteligencia: 85,
    poder: 75,
  },
};
var cartasAquaman = {
  nome: "Aquaman",
  imagem:
    "https://portalovertube.com/wp-content/uploads/2015/01/Justice-League-Throne-Of-Atlantis-Aquaman.jpg",
  atributos: {
    força: 80,
    inteligencia: 60,
    poder: 75,
  },
};
var cartasCiborgue = {
  nome: "Ciborgue",
  imagem:
    "https://i.pinimg.com/564x/4a/55/e2/4a55e2855f4134b07216b4b2ca87b5a3--cyborg-dc-comics-dc-cyborg.jpg",
  atributos: {
    força: 85,
    inteligencia: 100,
    poder: 90,
  },
};

var cartasCaçadorDeMarte = {
  nome: "Caçador de Marte",
  imagem:
    "https://www.jornadageek.com.br/wp-content/uploads/2017/11/Ca%C3%A7ador-de-Marte.jpg",
  atributos: {
    força: 80,
    inteligencia: 100,
    poder: 90,
  },
};
var cartasLanternaVerde = {
  nome: "Lanterna Verde",
  imagem: "https://i.ytimg.com/vi/VClRsLp3lZg/maxresdefault.jpg",
  atributos: {
    força: 90,
    inteligencia: 80,
    poder: 95,
  },
};

var cartaMaquina;
var cartaJogador;
var cartas = [
  cartasBatman,
  cartasSuperman,
  cartasFlash,
  cartasAquaman,
  cartasMulherMaravilha,
  cartasCiborgue,
  cartasCaçadorDeMarte,
  cartasLanternaVerde,
];

var pontosJogador = 0;
var pontosMaquina = 0;

atualizaPlacar();

atualizaQuantidadeDeCartas();

function atualizaQuantidadeDeCartas() {
  var divQuantidadeCartas = document.getElementById("quantidade-cartas");
  var html = "Quantidade de cartas no jogo : " + cartas.length;

  divQuantidadeCartas.innerHTML = html;
}

function atualizaPlacar() {
  var divPlacar = document.getElementById("placar");
  var html = "Jogador " + pontosJogador + "/" + pontosMaquina + " Máquina";

  divPlacar.innerHTML = html;
}

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * cartas.length);
  cartaMaquina = cartas[numeroCartaMaquina];
  cartas.splice(numeroCartaMaquina, 1);

  var numeroCartaJogador = parseInt(Math.random() * cartas.length);
  cartaJogador = cartas[numeroCartaJogador];
  cartas.splice(numeroCartaJogador, 1);

  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;

  exibeCartaJogador();
}

function exibeCartaJogador() {
  var divCartaJogador = document.getElementById("carta-jogador");

  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style="width: inherit; height: inherit; position: absolute;">';

  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;

  var opcoesTexto = "";

  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<input type='radio' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaJogador.atributos[atributo] +
      "<br>";
  }

  var html = "<div id = 'opcoes' class= 'carta-status' >";

  divCartaJogador.innerHTML = moldura + nome + html + opcoesTexto + "</div>";
}

function obtemAtributoSelecionado() {
  var radioAtributo = document.getElementsByName("atributo");
  for (var i = 0; i < radioAtributo.length; i++) {
    if (radioAtributo[i].checked) {
      return radioAtributo[i].value;
    }
  }
}

function jogar() {
  var divResultado = document.getElementById("resultado");

  var atributoSelecionado = obtemAtributoSelecionado();
  if (
    cartaJogador.atributos[atributoSelecionado] >
    cartaMaquina.atributos[atributoSelecionado]
  ) {
    htmlResultado =
      '<p class="resultado-final"> Jogador você venceu a carta da máquina ! </p>';
    pontosJogador++;
  } else if (
    cartaJogador.atributos[atributoSelecionado] <
    cartaMaquina.atributos[atributoSelecionado]
  ) {
    htmlResultado =
      '<p class="resultado-final"> Jogador você perdeu para a máquina !  </p>';
    pontosMaquina++;
  } else {
    htmlResultado =
      '<p class="resultado-final"> Houve um empate entre a máquina e o jogador !  </p>';
  }

  if (cartas.length == 0) {
    alert("FIM DE JOGO");
    if (pontosJogador > pontosMaquina) {
      htmlResultado = '<p class="resultado-final">O jogador Venceu</p>';
    } else if (pontosJogador < pontosMaquina) {
      htmlResultado = '<p class="resultado-final">A máquina Venceu</p>';
    } else {
      htmlResultado = '<p class="resultado-final">O jogo empatou</p>';
    }
  } else {
    document.getElementById("btnProximaRodada").disabled = false;
  }

  divResultado.innerHTML = htmlResultado;
  document.getElementById("btnJogar").disabled = true;

  exibeCartaMaquina();
  atualizaPlacar();
  atualizaQuantidadeDeCartas();
}

function exibeCartaMaquina() {
  var divCartaMaquina = document.getElementById("carta-maquina");

  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style="width: inherit; height: inherit; position: absolute;">';

  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;

  var opcoesTexto = "";

  for (var atributo in cartaMaquina.atributos) {
    opcoesTexto +=
      "<p type='text' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaMaquina.atributos[atributo] +
      "<br>";
  }

  var html = "<div id = 'opcoes' class= 'carta-status' >";

  divCartaMaquina.innerHTML = moldura + nome + html + opcoesTexto + "</div>";
}

function proximaRodada() {
  var divCartas = document.getElementById("cartas");

  divCartas.innerHTML = `<div id="carta-jogador" class="carta"></div> <div id = "carta-maquina" class="carta"></div>`;

  document.getElementById("btnSortear").disabled = false;
  document.getElementById("btnJogar").disabled = true;
  document.getElementById("btnProximaRodada").disabled = true;

  var divResultado = document.getElementById("resultado");
  divResultado.innerHTML = "";
}
