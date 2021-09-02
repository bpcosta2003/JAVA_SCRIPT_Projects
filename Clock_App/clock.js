var hora = 0;
var min = 0;
var sec = 0;

var timer;

var pause = false;

pause = !pause;

//@ Cronometro e Relogio

function play() {
  var alarmePlay = document.getElementById("alarm").className;

  if (pause == false) {
    $("#playBtn").addClass("bi-play-fill");
    $("#playBtn").removeClass("bi-pause");
    clearInterval(timer);
  } else {
    $("#playBtn").addClass("bi-pause");
    $("#playBtn").removeClass("bi-play-fill");
    if (alarmePlay.includes("active")) {
      hora = $("#hour").val();
      min = $("#min").val();
      sec = $("#sec").val();
      timer = setInterval(timerAlarme, 1000);
    } else {
      timer = setInterval(timerCron, 1000);
    }
  }

  pause = !pause;
}

function relogio() {
  screen();
  $(".bi-clock-fill").addClass("active");
  $(".bi-hourglass-top").removeClass("active");
  $(".bi-alarm-fill").removeClass("active");
  clearInterval(timer);
  timer = setInterval(attHora, 1000);
}

function cronometro() {
  screen();
  $(".bi-hourglass-top").addClass("active");
  $(".bi-alarm-fill").removeClass("active");
  $(".bi-clock-fill").removeClass("active");
  pause = true;
  clearInterval(timer);
  $("#playBtn").addClass("bi-play-fill");
  hora = 0;
  min = 0;
  sec = 0;
  $(".btn").prop("disabled", false);
  changeView();
}

function attHora() {
  var data = new Date();
  hora = data.getHours();
  min = data.getMinutes();
  sec = data.getSeconds();

  $(".btn").prop("disabled", true);

  changeView();
}

function timerCron() {
  sec++;
  if (sec == 60) {
    sec = 0;
    min++;
  }

  if (min == 60) {
    min = 0;
    hora++;
  }

  changeView();
}

function changeView() {
  if (sec < 10) {
    $("#sec").html("0" + sec);
  } else {
    $("#sec").html(sec);
  }

  if (min < 10) {
    $("#min").html("0" + min);
  } else {
    $("#min").html(min);
  }
  if (hora < 10) {
    $("#hour").html("0" + hora);
  } else {
    $("#hour").html(hora);
  }
}

function reset() {
  pause = true;
  clearInterval(timer);
  $("#playBtn").addClass("bi-play-fill");
  $("#playBtn").removeClass("bi-pause");
  hora = 0;
  min = 0;
  sec = 0;

  var alarmePlay = document.getElementById("alarm").className;

  if (alarmePlay.includes("active")) {
    $("#hour").val(hora);
    $("#min").val(min);
    $("#sec").val(sec);
  } else {
    $("#hour").html("0" + sec);
    $("#min").html("0" + sec);
    $("#sec").html("0" + sec);
  }
}

//@  Alarme

function alarme() {
  $(".bi-alarm-fill").addClass("active");
  $(".bi-clock-fill").removeClass("active");
  $(".bi-hourglass-top").removeClass("active");
  clearInterval(timer);
  var html = `
  <div class="time">
    <input id="hour" type="number" min="0" max="23" value="0" />
    <h1>.</h1>
    <input id="min" type="number" min="0" max="59" value="0" />
    <h1>.</h1>
    <input id="sec" type="number" min="0" max="59" value="0" />
  </div>
  `;

  $(".time").html(html);
}

function timerAlarme() {
  if (hora == 0 && min == 0 && sec == 0) {
    alert("Terminou o Alarme !");
    clearInterval(timer);
    return;
  }

  if (sec == 0 && min > 0) {
    sec = 59;
    min--;
  } else if (min == 0 && hora > 0 && sec == 0) {
    min = 59;
    sec = 59;
    hora--;
  }

  if (sec < 10) {
    $("#sec").val("0" + sec);
  } else {
    $("#sec").val(sec);
  }

  if (min < 10) {
    $("#min").val("0" + min);
  } else {
    $("#min").val(min);
  }

  if (hora < 10) {
    $("#hour").val("0" + hora);
  } else {
    $("#hour").val(hora);
  }

  sec--;
}

function screen() {
  var html = `<div class="time">
     <h1 id="hour">00</h1>
     <h1>.</h1>
     <h1 id="min">00</h1>
     <h1>.</h1>
     <h1 id="sec">00</h1>
  </div>`;

  $(".time").html(html);
}
