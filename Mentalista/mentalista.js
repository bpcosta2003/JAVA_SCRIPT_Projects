function adivinharNumero() {
  var numeroSecreto = parseInt(Math.random() * 10 + 1);
  var tentativas = 3;

  while (tentativas > 0) {
    var chute = parseInt(
      prompt("Digite um número entre 0 e 10 (voce tem 3 tentativas): ")
    );

    if (chute == numeroSecreto) {
      alert("ACERTOU !");
      break;
    } else if (chute < numeroSecreto) {
      alert("DICA : O número é maior. ");
      tentativas = tentativas - 1;
    } else if (chute > numeroSecreto) {
      alert("DICA : O número é menor.");
      tentativas = tentativas - 1;
    }
  }

  if (chute != numeroSecreto) {
    document.getElementById("mensagem").innerHTML =
      "ACABARAM AS TENTATIVAS ! O número secreto era : " + numeroSecreto;
  }
}
