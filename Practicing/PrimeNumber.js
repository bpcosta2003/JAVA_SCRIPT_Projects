exibirPrimo(30);

function exibirPrimo(range) {
  for (var i = 2; i <= range; i++) {
    if (descobrirPrimo(i)) {
      console.log(i, "É Primo");
    }
  }
}

function descobrirPrimo(i) {
  for (var j = 2; j < i; j++) {
    if (i % j == 0) {
      return false;
    }
  }
  return true;
}
