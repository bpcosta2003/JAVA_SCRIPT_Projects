function converterMoeda() {
  var loop = true;

  while (loop == true) {
    var valor = parseInt(
      prompt(
        "Qual valor você quer converter\n\n< 1 > Dolar para Real\n< 2 > Real para Dolar\n"
      )
    );

    if (valor == 1) {
      moeda = prompt(
        "Digite aqui o valor para conversão de Dolar para Real :  "
      );
      var valorReal = moeda * 5.5;
      var valorDecimalReal = valorReal.toFixed(2);
      loop = false;
      document.getElementById("mensagem").innerHTML =
        moeda + " dolares são " + valorDecimalReal + " reais.";
    } else if (valor == 2) {
      moeda = prompt(
        "Digite aqui o valor para conversão de Real para Dolar :  "
      );
      varDolar = moeda / 5.5;
      var valorDecimalDolar = valorDolar.toFixed(2);
      document.getElementById("mensagem").innerHTML =
        moeda + " reais são " + valorDecimalDolar + " dolares.";
      loop = false;
    } else {
      alert(" /! ERROR /! Opção Inválida !");
      loop = true;
    }
  }
}
