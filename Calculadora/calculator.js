function calcularNum() {
  var loop = true;

  while (loop == true) {
    var primeiroValor = parseFloat(prompt("Digite o primeiro valor : "));
    var segundoValor = parseFloat(prompt("Digite o segundo valor : "));

    var operação = prompt(
      "Qual operação dseja realizar :\n < 1 > Para adição\n < 2 > Para subtração\n < 3 > Para multiplicação\n < 4 > Para divisão"
    );

    if (operação == 1) {
      var resultado = (primeiroValor + segundoValor).toFixed(1);
      document.getElementById("listaNum").innerHTML =
        primeiroValor + " + " + segundoValor + " = " + resultado;
      loop = false;
    } else if (operação == 2) {
      var resultado = (primeiroValor - segundoValor).toFixed(1);
      document.getElementById("listaNum").innerHTML =
        primeiroValor + " - " + segundoValor + " = " + resultado;
      loop = false;
    } else if (operação == 3) {
      var resultado = (primeiroValor * segundoValor).toFixed(1);
      document.getElementById("listaNum").innerHTML =
        primeiroValor + " * " + segundoValor + " = " + resultado;
      loop = false;
    } else if (operação == 4) {
      var resultado = (primeiroValor / segundoValor).toFixed(1);
      document.getElementById("listaNum").innerHTML =
        primeiroValor + " / " + segundoValor + " = " + resultado;
      loop = false;
    } else {
      alert(" / ERROR / Opção Inválida !");
      loop = true;
    }
  }
}
