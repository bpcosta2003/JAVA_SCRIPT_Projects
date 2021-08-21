//@ Criação Personagem

var vidaGuerreiro = 50;
var danoGuerreiro = 10;
var vidaArqueiro = 30;
var danoArqueiro = 20;
var vidaMago = 20;
var danoMago = 30;

var imagemGuerreiro = "Imagens/Warrior.png";
var imagemArqueiro = "Imagens/Archer.png";
var imagemMago = "Imagens/Wizard.png";

function Personagem(classe, vida, dano) {
  this.classe = classe;
  this.vida = vida;
  this.dano = dano;
}

var personagemGuerreiro;
var personagemArqueiro;
var personagemMago;
var personagens;

function criarPersonagens() {
  personagemGuerreiro = new Personagem("Warrior", vidaGuerreiro, danoGuerreiro);
  personagemArqueiro = new Personagem("Archer", vidaArqueiro, danoArqueiro);
  personagemMago = new Personagem("Wizard", vidaMago, danoMago);
  personagens = [personagemGuerreiro, personagemArqueiro, personagemMago];
}

criarPersonagens();

//@ Sistema de Evolução

var pontosParaEvolucao = 1;
var pontosAoEvoluir = 5;

function atualizarPontosEvolucao() {
  $("#pontosEvolucaoid").html(pontosParaEvolucao);
  atualizarButtonDisabled();
}

function atualizarButtonDisabled() {
  if (pontosParaEvolucao <= 0) {
    $(".botaoUpdate").attr("disabled", true);
  } else {
    $(".botaoUpdate").attr("disabled", false);
  }
}

atualizarPontosEvolucao();

//@ Aumentar / Diminuir Pontos

function evoluirDano(classe) {
  pontosParaEvolucao -= 1;

  switch (classe) {
    case "guerreiro":
      danoGuerreiro += pontosAoEvoluir;
      $("#GuerreiroDanoId").html(danoGuerreiro);
      break;

    case "arqueiro":
      danoArqueiro += pontosAoEvoluir;
      $("#ArqueiroDanoId").html(danoArqueiro);
      break;

    case "mago":
      danoMago += pontosAoEvoluir;
      $("#MagoDanoId").html(danoMago);
      break;
  }
  atualizarPontosEvolucao();
}

function evoluirVida(classe) {
  pontosParaEvolucao -= 1;

  switch (classe) {
    case "guerreiro":
      vidaGuerreiro += pontosAoEvoluir;
      $("#GuerreiroVidaId").html(vidaGuerreiro);
      break;

    case "arqueiro":
      vidaArqueiro += pontosAoEvoluir;
      $("#ArqueiroVidaId").html(vidaArqueiro);
      break;

    case "mago":
      vidaMago += pontosAoEvoluir;
      $("#MagoVidaId").html(vidaMago);
      break;
  }
  atualizarPontosEvolucao();
}

//@ Criação inimigos

function Inimigo(nome, vida, dano) {
  this.nome = nome;
  this.vida = vida;
  this.dano = dano;
}

var inimigos = [];

function criarInimigos() {
  var orc = new Inimigo("Orc", 20, 30);
  var orcShaman = new Inimigo("Orc Shaman", 20, 30);
  var orcChefe = new Inimigo("Orc Chefe", 50, 10);
  var orcs = [orc, orcShaman, orcChefe];

  var esqueleto = new Inimigo("Skeleton", 10, 20);
  var zumbi = new Inimigo("Zombie", 20, 30);
  var zumbiChefe = new Inimigo("Zombie Boss", 30, 50);
  var zombies = [esqueleto, zumbi, zumbiChefe];

  var imp = new Inimigo("Imp", 20, 20);
  var demon = new Inimigo("Monster", 30, 30);
  var bossDemon = new Inimigo("Monster Boss", 50, 40);
  var demons = [imp, demon, bossDemon];

  inimigos = [orcs, zombies, demons];
}

//@ Batalha

var indexPersonagem = 1;
var indexGrupoInimigos;
var indexInimigoAlvo;

function selecionarInimigos() {
  indexGrupoInimigos = $("#selecaoInimigosId").val();
  var htmlOptions = "";
  for (var i = 0; i < 3; i++) {
    htmlOptions +=
      "<option value=" +
      i +
      ">" +
      inimigos[indexGrupoInimigos][i].nome +
      "</option>";
  }
  $("#inimigosEscolhidosId").html(htmlOptions);
  atualizarDadosAlvo();
}

function atualizarDadosAlvo() {
  indexInimigoAlvo = parseInt($("#inimigosEscolhidosId").val());
  $("#vidaInimigoId").html(inimigos[indexGrupoInimigos][indexInimigoAlvo].vida);
  $("#danoInimigoId").html(inimigos[indexGrupoInimigos][indexInimigoAlvo].dano);
  $("#imagemInimigoId").attr(
    "src",
    "Imagens/" + inimigos[indexGrupoInimigos][indexInimigoAlvo].nome + ".png"
  );
}

function iniciarBatalha() {
  criarPersonagens();
  criarInimigos();
  atualizarDadosPersonagem();
  selecionarInimigos();
}

function selecionarPersonagem() {
  indexPersonagem = parseInt($("#personagemEscolhidoId").val());
  atualizarDadosPersonagem();
}

function atualizarDadosPersonagem() {
  $("#vidaPersonagemId").html(personagens[indexPersonagem].vida);
  $("#danoPersonagemId").html(personagens[indexPersonagem].dano);
  $("#imagemPersonagemId").attr(
    "src",
    "Imagens/" + personagens[indexPersonagem].classe + ".png"
  );
}

//@ Ataque

var porcentagemInimigo = 50;

function Atacar() {
  var htmlFinal = "";

  /// Personagem escolhido esta morto?

  if (personagens[indexPersonagem].vida <= 0) {
    htmlFinal =
      personagens[indexPersonagem].classe +
      " is dead, attack with another character";
  }

  /// Inimigo escolhido esta morto?
  else if (inimigos[indexGrupoInimigos][indexInimigoAlvo].vida <= 0) {
    htmlFinal =
      inimigos[indexGrupoInimigos][indexInimigoAlvo].nome +
      " already dead attack another enemy";
  }

  /// Posso atacar normalmente
  else {
    /// Ataque do personagem, 100% acerto

    inimigos[indexGrupoInimigos][indexInimigoAlvo].vida -=
      personagens[indexPersonagem].dano;

    /// Montagem do dano do personagem no inimigo

    htmlFinal =
      inimigos[indexGrupoInimigos][indexInimigoAlvo].nome +
      " has received " +
      personagens[indexPersonagem].dano +
      " of damage. ";

    /// Verifica inimigo morreu, se sim já cria uma mensagem

    if (inimigos[indexGrupoInimigos][indexInimigoAlvo].vida <= 0) {
      htmlFinal +=
        inimigos[indexGrupoInimigos][indexInimigoAlvo].nome + " died. ";

      inimigos[indexGrupoInimigos][indexInimigoAlvo].vida = 0;
    }

    /// Ataque do inimigo, 50% de chance de acertar

    if (Math.floor(Math.random() * 100) < porcentagemInimigo) {
      /// Se acertar diminuiu vida do personagem

      personagens[indexPersonagem].vida -=
        inimigos[indexGrupoInimigos][indexInimigoAlvo].dano;

      /// Cria mensagem

      htmlFinal +=
        personagens[indexPersonagem].classe +
        " has received " +
        inimigos[indexGrupoInimigos][indexInimigoAlvo].dano +
        " of damage. ";

      /// Verifica se personagem morreu, se sim cria mensagem

      if (personagens[indexPersonagem].vida <= 0) {
        personagens[indexPersonagem].vida = 0;

        htmlFinal += personagens[indexPersonagem].classe + " died. ";
      }
    }

    /// Verifica se todos inimigos estão mortos?

    var todosInimigosEstaoMortos = verificaTodosInimigosMortos();

    if (todosInimigosEstaoMortos) {
      htmlFinal += "All enemies killed, can loot the evolution points.";

      /// Se morreu, habilita botão se saquear

      $("#botaoSaquearId").attr("disabled", false);
    }
  }

  atualizarDadosPersonagem();

  atualizarDadosAlvo();

  /// Mostra mensagem final

  $("#resultadoId").html(htmlFinal);
}

//@  Batalha - Finalização

function verificaTodosInimigosMortos() {
  for (var i = 0; i < inimigos[indexGrupoInimigos].length; i++) {
    if (inimigos[indexGrupoInimigos][i].vida > 0) {
      return false;
    }
  }

  return true;
}

function Saquear() {
  pontosParaEvolucao += 1;
  atualizarPontosEvolucao();
  $("#botaoSaquearId").attr("disabled", true);
}
