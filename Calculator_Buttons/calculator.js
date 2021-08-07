var valor = "";

function zerar() {
  valor = "";
  document.getElementById("input3").innerHTML = "";
  document.getElementById("resultado").innerHTML = "";
  document.getElementById("resultado2").innerHTML = "";
  document.getElementById("resultado3").innerHTML = "";
  document.getElementById("inputs").innerHTML = "";
}

function aleatorio() {
  var htmlInputs = "";
  htmlInputs +=
    "<input id='input1num' style='margin: auto; margin-top:0.5rem' placeholder='Put the first value ...'><br><br>";
  htmlInputs +=
    "<input id='input2num' style='margin: auto' placeholder='Put the second value ...'><br><br>";
  htmlInputs +=
    "<button id='buttonNum' style='margin: auto' onclick='resultadoAleatorio()'>GERAR NÚMERO<br>";
  document.getElementById("inputs").innerHTML = htmlInputs;
}

function resultadoAleatorio() {
  var max = Math.max(
    document.getElementById("input1num").value,
    document.getElementById("input2num").value
  );
  var min = Math.min(
    document.getElementById("input1num").value,
    document.getElementById("input2num").value
  );

  max += 1;

  document.getElementById("resultado").innerHTML = Math.floor(
    Math.random() * (max - min) + min
  );
}

function pitagoras() {
  var htmlInputs = "";
  htmlInputs +=
    "<input id='input1num' style='margin: auto; margin-top:0.5rem' placeholder='Put the first value...'><br><br>";
  htmlInputs +=
    "<input id='input2num' style='margin: auto' placeholder='Put the second value...'><br><br>";

  htmlInputs +=
    "<button id='buttonNum' style='margin: auto' onclick='resultadoPitagoras()'>GENERATE HYPOTENUSE <br>";
  document.getElementById("inputs").innerHTML = htmlInputs;
}

function resultadoPitagoras() {
  var pit =
    document.getElementById("input1num").value ** 2 +
    document.getElementById("input2num").value ** 2;

  document.getElementById("resultado").innerHTML = Math.sqrt(pit).toFixed(2);
}

function bhaskara() {
  var htmlInputs = "";
  htmlInputs +=
    "<input id='input1num' style='margin: auto; margin-top:0.5rem' placeholder='Put A value ...'><br><br>";
  htmlInputs +=
    "<input id='input2num' style='margin: auto' placeholder='Put B value ...'><br><br>";
  htmlInputs +=
    "<input id='input3num' style='margin: auto' placeholder='Put C value ...'><br><br>";

  htmlInputs +=
    "<button id='buttonNum' style='margin: auto' onclick='resultadoBhaskara()'>GENERATE BHASKARA<br>";
  document.getElementById("inputs").innerHTML = htmlInputs;
}

function resultadoBhaskara() {
  var resultados = "";

  var a = document.getElementById("input1num").value;
  var b = document.getElementById("input2num").value;
  var c = document.getElementById("input3num").value;

  var delta = b ** 2 - 4 * a * c;

  if (delta < 0) {
    document.getElementById("resultado").innerHTML =
      "Dont have real roots... Delta = " + delta;
  } else {
    var bhask1 = (-b + Math.sqrt(delta)) / (2 * a);
    var bhask2 = (-b - Math.sqrt(delta)) / (2 * a);

    document.getElementById("resultado").innerHTML = `Delta = ${delta}`;

    document.getElementById("resultado2").innerHTML = `X_1 = ${bhask1.toFixed(
      2
    )}`;

    document.getElementById("resultado3").innerHTML = `X_2 = ${bhask2.toFixed(
      2
    )}`;
  }
}

function selectNumber(textSelected) {
  valor += textSelected;
  document.getElementById("input3").innerHTML = valor;
  console.log(valor);
}

function igual() {
  document.getElementById("resultado").innerHTML = eval(valor).toFixed(2);
}
