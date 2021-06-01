var listaCompras = [];

function adicionar() {
  var input = document.getElementById("texto").value;
  listaCompras.push(input);

  var html = "";
  var lista = listaCompras.length;

  for (var i = 0; i < lista; i++) {
    html += "<option value=" + i + ">" + listaCompras[i] + "</option>";
  }

  document.getElementById("meuSelect").innerHTML = html;

  texto.value = " ";
}

function resetar() {
  var htmlFinal = "";
  var tamanhoLista = listaCompras.length;
  for (var i = 0; i < tamanhoLista; i++) {
    htmlFinal += "<option>" + listaCompras[i] + "</option>";
  }
  document.getElementById("meuSelect").innerHTML = htmlFinal;
}

function remover() {
  var valorSelecionado = document.getElementById("meuSelect").value;
  listaCompras.splice(valorSelecionado, 1);
  resetar();
}

var num1;
var num2;

function valores() {
  num1 = parseFloat(document.getElementById("input1").value);
  num2 = parseFloat(document.getElementById("input2").value);
}

function soma() {
  valores();
  document.getElementById("resultado").innerHTML = (num1 + num2).toFixed(2);
}
function sub() {
  valores();
  document.getElementById("resultado").innerHTML = (num1 - num2).toFixed(2);
}
function mult() {
  valores();
  document.getElementById("resultado").innerHTML = (num1 * num2).toFixed(2);
}
function divisao() {
  valores();
  document.getElementById("resultado").innerHTML = (num1 / num2).toFixed(2);
}
function zerar() {
  valores();

  input1.value = "";
  input2.value = "";
  document.getElementById("resultado").innerHTML = "";
}

function criarInputs() {
  var numInputs = parseInt(document.getElementById("numeroInputs").value);
  var htmlInputs = "";
  for (var i = 0; i < numInputs; i++) {
    if (i == 0) {
      htmlInputs +=
        "<input class='inputMedia' style='margin: auto; margin-top:2rem'><br><br>";
    } else {
      htmlInputs += "<input class='inputMedia' style='margin: auto'><br><br>";
    }
  }

  document.getElementById("divInputs").innerHTML = htmlInputs;
}

function resetarInputs() {
  numeroInputs.value = "";
  document.getElementById("divInputs").innerHTML = "";
  document.getElementById("mediaFinal").innerHTML = "";
}

function calcularMedia() {
  var inputs = document.getElementsByClassName("inputMedia");
  var numerosInput = inputs.length;

  var soma = 0;

  for (var i = 0; i < numerosInput; i++) {
    soma += parseInt(inputs[i].value);
  }

  document.getElementById("mediaFinal").innerHTML = (
    soma / numerosInput
  ).toFixed(2);
}
