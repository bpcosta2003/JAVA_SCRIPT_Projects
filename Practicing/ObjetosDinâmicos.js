var mouse = {
  cor: "red",
  marca: "redragon",
};

mouse.velocidade = 5000;

mouse.trocarDPI = function () {
  console.log("mudando DPI");
};

delete mouse.trocarDPI;

console.log(mouse);
