var hora = 0;
var min = 0;
var sec = 0;

var timer;

var pause = false;

function play() {
  if (pause == false) {
    $("#playBtn").addClass("bi-play-fill");
    $("#playBtn").removeClass("bi-pause");
    clearInterval(timer);
  } else {
    $("#playBtn").addClass("bi-pause");
    $("#playBtn").removeClass("bi-play-fill");
    timer = setInterval(timerCron, 1000);
  }

  pause = !pause;
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
  clearInterval(timer);
  $("#playBtn").addClass("bi-play-fill");
  $("#playBtn").removeClass("bi-pause");
  hora = 0;
  min = 0;
  sec = 0;
  $("#hour").html("0" + sec);
  $("#min").html("0" + sec);
  $("#sec").html("0" + sec);
}
