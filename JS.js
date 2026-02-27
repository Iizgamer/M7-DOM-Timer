const startTimer = document.getElementById('startTimer');
const stopTimer = document.getElementById('stopTimer');
const resetTimer = document.getElementById('resetTimer');
const timer = document.getElementById('timer');
let timerCheck = null;
let timerHolder = 0;

startTimer.onclick = function() {
    if (timerCheck === null) {
        timerCheck = setInterval(function () {
            timerHolder++;
            timer.innerHTML = timerHolder;
        }, 1000);
    }
};

stopTimer.onclick = function() {
    clearInterval(timerCheck);
    timerCheck = null;
};

resetTimer.onclick = function() {
    clearInterval(timerCheck);
    timerCheck = null;
    timerHolder = 0;
    timer.innerHTML = timerHolder;
};