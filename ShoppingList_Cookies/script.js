$("#inputDivId").hide();
$("#labelDivId").hide();
$(document).ready(validarCookie);

var meuCookie = {};

$("#buttonEntrarId").click(entrar);

function Item(nomeItem, quantidade, preco) {
  this.nomeItem = nomeItem;
  this.quantidade = quantidade;
  this.preco = preco;
}

var listaCompras = [];

function adicionar() {
  var nomeItemNovo = $("#nomeItem1").val();
  var quantidadeNovo = $("#qtdItem").val();
  var precoItemNovo = $("#preçoItem").val();

  var novoItem = new Item(nomeItemNovo, quantidadeNovo, precoItemNovo);

  listaCompras.push(novoItem);

  var lista = listaCompras.length;

  var html = "";

  for (var i = 0; i < lista; i++) {
    html +=
      "<option value=" +
      i +
      ">" +
      listaCompras[i].nomeItem +
      " / " +
      listaCompras[i].quantidade +
      " / " +
      "R$" +
      listaCompras[i].preco +
      "</option>";
  }

  criarCookie("lista", JSON.stringify(listaCompras), 120);

  atualizarTabela(novoItem);

  $("#TableNome").html(nomeItemNovo);
  $("#TableQdt").html(quantidadeNovo);
  $("#TablePreco").html(precoItemNovo);
  $("#nomeItem1").val("");
  $("#qtdItem").val("");
  $("#preçoItem").val("");
  $("#meuSelect").html(html);
}

function atualizarTabela(valores) {
  var htmlTable = "<tr class='valuesitms'>";

  htmlTable += "<td >" + valores.nomeItem + "</td>";
  htmlTable += "<td >" + valores.quantidade + "</td>";
  htmlTable += "<td >" + valores.preco + "</td>";
  htmlTable += "</tr>";

  $("#tabelaItensId").append(htmlTable);
}

function resetar() {
  var htmlFinal = "";
  var tamanhoLista = listaCompras.length;
  for (var i = 0; i < tamanhoLista; i++) {
    htmlFinal +=
      "<option value=" +
      i +
      ">" +
      listaCompras[i].nomeItem +
      " / " +
      listaCompras[i].quantidade +
      " / " +
      "R$" +
      listaCompras[i].preco +
      "</option>";
  }

  var htmlFinalTable = "";

  for (var i = 0; i < tamanhoLista; i++) {
    htmlFinalTable += "<tr class='valuesitms '>";
    htmlFinalTable += "<td >" + listaCompras[i].nomeItem + "</td>";
    htmlFinalTable += "<td >" + listaCompras[i].quantidade + "</td>";
    htmlFinalTable += "<td >" + listaCompras[i].preco + "</td>";
    htmlFinalTable += "</tr>";
  }

  $(".valuesitms").html("");
  $("#tabelaItensId").append(htmlFinalTable);
  $("#meuSelect").html(htmlFinal);
}

function remover() {
  listaCompras.splice($("#meuSelect").val(), 1);
  resetar();
}

function fecharCompra() {
  var htmlFecharCompra = "You bought : ";

  var soma = 0;

  for (var i = 0; i < listaCompras.length; i++) {
    htmlFecharCompra +=
      listaCompras[i].quantidade + " " + listaCompras[i].nomeItem + " - ";
    soma += listaCompras[i].quantidade * listaCompras[i].preco;
  }

  htmlFecharCompra += "Total : " + soma + "$.";

  $("#fechamentoLabelId").text(htmlFecharCompra);
}

function refazerCompra() {
  $("#fechamentoLabelId").html("");
  $("#meuSelect").html("");
  $(".valuesitms").html("");
  listaCompras = [];
  criarCookie("lista", null, -1);
}

function validarCookie() {
  preencherCookie();

  if (meuCookie.nome != undefined) {
    $("#labelDivId").show();
    $("#labelId").text(meuCookie.nome);
    $("#inputDivId").hide();
  } else {
    $("#inputDivId").show();
  }
  if (meuCookie.lista != undefined) {
    listaCompras = JSON.parse(meuCookie.lista);
    resetar();
  }
  if (meuCookie.modo == "dark") {
    SetDarkMode();
    document.getElementById("flexSwitchCheckDefault").checked = false;
  } else {
    SetLightMode();
    document.getElementById("flexSwitchCheckDefault").checked = true;
  }
}

// document.cookie = "nomeDeVariavel=valorDaVariável; expires=Date"
// var aleatoria = 0: nomeDeVariavel=valorDaVariável
//                 1: expires=Date

// var campoValores = 0: "nomeDeVariavel"
//                    1: "valorDaVariável"

// document.cookie = "nome=Bruno; expires=Date"
// document.cookie = "nome=Gabriel; expires=Date"
// document.cookie = "sobrenome=Nobrega; expires=Date"

// var text = "arroz"
// meuCookie[text] // Procura dentro do dicionário cookie variavel de nome arroz
// meuCookie.text // Procura dentro do dicionário cookie variavel de nome text

function preencherCookie() {
  var camposValores = document.cookie.split("; ");
  console.log(camposValores);

  for (var i = 0; i < camposValores.length; i++) {
    var campoValoresVetores = camposValores[i].split("=");
    console.log(campoValoresVetores);
    meuCookie[campoValoresVetores[0]] = campoValoresVetores[1];
  }
}

function entrar() {
  var nome = $("#inputNomeId").val();

  criarCookie("nome", nome, 120);

  validarCookie();
}

function criarCookie(campo, valor, dias) {
  var dataExpiracao = new Date();

  dataExpiracao.setTime(dataExpiracao.getTime() + dias * 1000);

  var campoExpires = "expires=" + dataExpiracao.toUTCString();

  document.cookie = campo + "=" + valor + ";" + campoExpires;
}

function changeBackground() {
  if (document.getElementById("flexSwitchCheckDefault").checked) {
    SetLightMode();
  } else {
    SetDarkMode();
  }
}

function SetLightMode() {
  $("#background").css("background-color", "white");
  $("#background").css("color", "#011323");
  $("#tabelaItensId").css("color", "#011323");
  var sun = "";
  sun +=
    "<label id='icon' class='form-check-label' for='flexSwitchCheckDefault'><i class='bi bi-brightness-high'></i></label>";
  $("#icon").html(sun);

  criarCookie("modo", "light", 120);
}

function SetDarkMode() {
  $("#background").css("background-color", "#011323");
  $("#background").css("color", "white");
  $("#tabelaItensId").css("color", "white");
  var moon = "";
  moon +=
    "<label id='icon' class='form-check-label' for='flexSwitchCheckDefault'><i class='bi bi-moon'></i></label>";
  $("#icon").html(moon);
  criarCookie("modo", "dark", 120);
}
