function endereco(rua, cidade, cep) {
  this.rua = rua;
  this.cidade = cidade;
  this.cep = cep;
}

var endereco1 = new endereco(
  "Rua Dr. Antônio Bento 504",
  "São Paulo",
  "04570001"
);
var endereco2 = new endereco(
  "Rua Dr. Carlos Chagas 162",
  "Rio De Janeiro",
  "03589001"
);

function saoIguais(endereco1, endereco2) {
  return (
    endereco1.rua === endereco2.rua &&
    endereco1.cidade === endereco2.cidade &&
    endereco1.cep === endereco2.cep
  );
}

console.log(saoIguais(endereco1, endereco2));

function temEnderecoMemoriaIguais(endereco1, endereco2) {
  return endereco1 === endereco2;
}

console.log(temEnderecoMemoriaIguais(endereco1, endereco2));
