function startTimer(duration, display) {
    let timer = duration,
      minutes,
      seconds;
    setInterval(function () {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;
      display.textContent = "Time Left: " + minutes + ":" + seconds;
      if (--timer < 0) {
        alert("Time is up!");
      }
    }, 1000);
  }
  window.onload = function () {
    let display = document.querySelector("#timer");
    startTimer(900, display); // 15-minute timer
  };