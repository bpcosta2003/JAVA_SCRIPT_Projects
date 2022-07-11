$("#inputDivId").hide();
$("#labelDivId").hide();
$("#bemVindoId").ready(validarCookieNome);
$("#bemVindoId").ready(validarCookieCor);
$("#buttonEntrarId").click(entrar);
$("#selectCoresId").change(selecionarCor);

var meuCookie = {};

function criarCookie(campo, valor, dias) {
  var dataExpiracao = new Date();

  dataExpiracao.setTime(dataExpiracao.getTime() + dias * 24 * 60 * 60 * 1000);

  var campoExpires = "expires=" + dataExpiracao.toUTCString();

  document.cookie = campo + "=" + valor + ";" + campoExpires;
}

function entrar() {
  var nome = $("#inputNomeId").val();
  var nickname = $("#inputSobrenomeId").val();

  criarCookie("nome", nome, 2);
  criarCookie("sobrenome", nickname, 2);

  validarCookieNome();
}

function preencherCookie() {
  var camposValores = document.cookie.split("; ");
  console.log(camposValores);

  for (var i = 0; i < camposValores.length; i++) {
    var campoValoresVetores = camposValores[i].split("=");
    console.log(campoValoresVetores);
    meuCookie[campoValoresVetores[0]] = campoValoresVetores[1];
  }
}

function validarCookieNome() {
  preencherCookie();

  if (meuCookie.nome != undefined) {
    $("#labelDivId").show();
    $("#labelId").text(meuCookie.nome + " " + meuCookie.sobrenome);
    $("#inputDivId").hide();
  } else {
    $("#inputDivId").show();
  }
}

function selecionarCor() {
  console.log($("#selectCoresId").val());
  var cor = $("#selectCoresId").val();
  $("#background").css("background-color", cor);
  criarCookie("cor", cor, 2);
  if (cor == "black") {
    $("#background").css("color", "white");
    $(".containerFlex").css("border-bottom", "1px solid white");
  } else {
    $("#background").css("color", "black");
    $(".containerFlex").css("border-bottom", "1px solid black");
  }
}

function validarCookieCor() {
  if (meuCookie.cor != undefined) {
    $("#background").css("background-color", meuCookie.cor);
    if (meuCookie.cor == "black") {
      $("#background").css("color", "white");
      $(".containerFlex").css("border-bottom", "1px solid white");
    } else {
      $("#background").css("color", "black");
      $(".containerFlex").css("border-bottom", "1px solid black");
    }
    $("#selectCoresId").val(meuCookie.cor);
  }
}
