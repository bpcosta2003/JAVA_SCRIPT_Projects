function endereco(rua, cidade, cep) {
  return {
    rua,
    cidade,
    cep,
  };
}

console.log(endereco("Rua Dr. Antônio Bento 504", "São Paulo", "04570001"));

var endereco = {
  rua: "Rua Dr. Antônio Bento 504",
  cidade: "São Paulo",
  cep: "04570001",
};

function exibirEndereco(endereco) {
  for (var chave in endereco) {
    console.log(`${chave} = ${endereco[chave]}`);
  }
}

exibirEndereco(endereco);
