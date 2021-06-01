var faixasPreco = [
  {tooltip: "Até 700 reais", valorMin: 0, valorMax: 700},
  {tooltip: "De 700 a 1000 reais", valorMin: 700, valorMax: 1000},
  {tooltip: "1000 reais ou mais", valorMin: 1000, valorMax: 999999999},
];

/* - - - - - */

function criarFaixaPreco(tooltip, valorMin, valorMax) {
  return {
    tooltip,
    valorMin,
    valorMax,
  };
}

var faixas = [
  criarFaixaPreco("Até 700 reais", 0, 700),
  criarFaixaPreco("De 700 a 1000 reais", 700, 1000),
  criarFaixaPreco("1000 reais ou mais", 1000, 999999999),
];

/* - - - - - */

function criarFaixaPreco2(tooltip, valorMin, valorMax) {
  this.tooltip = tooltip;
  this.valorMin = valorMin;
  this.valorMax = valorMax;
}

var faixa2 = [
  new criarFaixaPreco2("Até 700 reais", 0, 700),
  new criarFaixaPreco2("De 700 a 1000 reais", 700, 1000),
  new criarFaixaPreco2("1000 reais ou mais", 1000, 999999999),
];
