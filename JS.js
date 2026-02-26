const startTimer = document.getElementById('startTimer');
const stopTimer = document.getElementById('stopTimer');
const resetTimer = document.getElementById('resetTimer');
const timer = document.getElementById('timer');
let timerCheck = false;
let timerHolder = 0;

startTimer.onclick = function() {
    timerCheck = true;
}

while (timerCheck) {
    setInterval(() => {}, 1000);
    timerHolder++;
    timer.innerHTML = timerHolder;
}