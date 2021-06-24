$("#inputDivId").hide();
$("#labelDivId").hide();
$("#bemVindoId").ready(validarCookieNome);

var meuCookie = {};

function validarCookieNome() {
  preencherCookie();

  if (meuCookie.nome != undefined) {
    $("#labelDivId").show();
    $("#labelId").text(meuCookie.nome);
    $("#inputDivId").hide();
  } else {
    $("#inputDivId").show();
  }
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

$("#buttonEntrarId").click(entrar);

function entrar() {
  var nome = $("#inputNomeId").val();

  criarCookie("nome", nome, 2);

  validarCookieNome();
}

function criarCookie(campo, valor, dias) {
  var dataExpiracao = new Date();

  dataExpiracao.setTime(dataExpiracao.getTime() + dias * 24 * 60 * 60 * 1000);

  var campoExpires = "expires=" + dataExpiracao.toUTCString();

  document.cookie = campo + "=" + valor + ";" + campoExpires;
}

$("#selectCoresId").change(selecionarCor);

function selecionarCor() {
  console.log($("#selectCoresId").val());
  var cor = $("#selectCoresId").val();
  $("#background").css("background-color", cor);
  criarCookie("cor", cor, 2);
  if (cor == "black") {
    $("#background").css("color", "white");
  } else {
    $("#background").css("color", "black");
  }
}

$("#bemVindoId").ready(validarCookieCor);

function validarCookieCor() {
  if (meuCookie.cor != undefined) {
    $("#background").css("background-color", meuCookie.cor);
  }
}
